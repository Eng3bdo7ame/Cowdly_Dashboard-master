'use client';
import { useEffect, useState, useCallback } from "react";
import { X } from "@phosphor-icons/react";
import axios from "axios";
import Cookies from "js-cookie";
import FormInput from "@/components/form/FormInput";
import FormNumber from "@/components/form/FormNumber";
import FormSelect from "@/components/form/FormSelect";

export default function AddUser({ closeModal, modal }) {
    const token = Cookies.get("token");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [emailMsg, setEmailMsg] = useState("");
    const [emailInputTouched, setEmailInputTouched] = useState(false);

    const handleAddUser = async (e) => {
        e.preventDefault();
        if (password1 !== password2) {
            setEmailMsg("Passwords do not match");
            return;
        }

        try {
            setLoading(true);
            const payload = {
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone_number: phoneNumber,
                country: country,
                password1: password1,
                password2: password2,
            };

            await axios.post(
                "https://dashboard.cowdly.com/api/users/register/",
                payload,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            window.location.href = "/Users";
        } catch (error) {
            console.error("Error adding user:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCheckEmail = useCallback(async () => {
        if (!email) return;

        try {
            const response = await axios.post(
                "https://dashboard.cowdly.com/api/auth/checkEmail",
                { email: email }
            );
            setEmailMsg(response.data.message || "Email already exists");
        } catch (error) {
            console.error("Error checking email:", error);
            setEmailMsg("");
        }
    }, [email]);

    useEffect(() => {
        handleCheckEmail();
    }, [email, handleCheckEmail]);

    return (
        <div
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    closeModal();
                }
            }}
            className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center ${modal ? "visible" : "invisible"}`}
        >
            <div
                className={`w-full max-w-lg bg-white rounded-lg shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 transition-transform duration-300 ease-in-out ${modal ? "translate-y-0" : "translate-y-full"}`}
                aria-modal="true"
                role="dialog"
            >
                <div className="relative text-gray-900">
                    <div className="bg-green-700 w-full flex justify-between items-center text-white p-3 mb-4 rounded-t-lg border-b">
                        <h3 className="text-lg font-semibold">Add User</h3>
                        <button
                            type="button"
                            onClick={closeModal}
                            className="text-gray-400 hover:bg-gray-200 rounded-lg text-sm p-1.5 inline-flex items-center"
                            aria-label="Close modal"
                        >
                            <X size={18} weight="bold" />
                        </button>
                    </div>
                    <form onSubmit={handleAddUser} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormInput
                                label="First Name"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First Name"
                                required
                            />
                            <FormInput
                                label="Last Name"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last Name"
                                required
                            />
                            <FormInput
                                label="Email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailInputTouched(true);
                                }}
                                placeholder="Email"
                                required
                                msgExist={emailMsg}
                                usernameInputTouched={emailInputTouched}
                            />
                            <FormNumber
                                label="Phone Number"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="Phone Number"
                                required
                            />
                            <FormSelect
                                selectLabel="Country"
                                headOption="Select Country"
                                handleChange={(e) => setCountry(e.target.value)}
                                options={countries.map((country) => ({
                                    value: country.id,
                                    label: country.name,
                                }))}
                                value={country}
                                name="country"
                                required
                            />
                            <FormInput
                                label="Password"
                                name="password1"
                                type="password"
                                value={password1}
                                onChange={(e) => setPassword1(e.target.value)}
                                placeholder="Password"
                                required
                            />
                            <FormInput
                                label="Confirm Password"
                                name="password2"
                                type="password"
                                value={password2}
                                onChange={(e) => setPassword2(e.target.value)}
                                placeholder="Confirm Password"
                                required
                            />
                        </div>
                        <div className="flex justify-center mt-6">
                            <button
                                type="submit"
                                disabled={
                                    !firstName ||
                                    !lastName ||
                                    !email ||
                                    !phoneNumber ||
                                    !country ||
                                    !password1 ||
                                    !password2
                                }
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                            >
                                {loading ? "Loading..." : "Add User"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
