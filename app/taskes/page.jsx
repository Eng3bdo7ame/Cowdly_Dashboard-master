"use client"
import React, { useEffect, useState } from 'react';
import Sortable from 'sortablejs';
import { GoPaperclip } from "react-icons/go";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

// Data structure for the columns and cards
const initialColumnsData = [
    {
        title: "In Progress",
        items: [
            {
                label: "UX",
                labelColor: "bg-green-200 text-green-700",
                title: "Research FAQ page UX",
                attachments: 4,
                comments: 12,
                users: [1, 2, 3]
            },
            {
                label: "Code Review",
                labelColor: "bg-red-200 text-red-700",
                title: "Review Javascript code",
                attachments: 2,
                comments: 8,
                users: [4, 5]
            },
        ]
    },
    {
        title: "In Review",
        items: [
            {
                label: "Info",
                labelColor: "bg-blue-200 text-blue-700",
                title: "Review completed Apps",
                attachments: 8,
                comments: 17,
                users: [6, 7]
            },
            {
                label: "Images",
                labelColor: "bg-yellow-200 text-yellow-700",
                title: "Find new images for pages",
                attachments: 10,
                comments: 18,
                image: "/placeholder.svg", // Placeholder image
                users: [1, 2, 3, 4]
            },
        ]
    },
    {
        title: "Done",
        items: [
            {
                label: "App",
                labelColor: "bg-gray-200 text-gray-700",
                title: "Forms & Tables section",
                attachments: 1,
                comments: 4,
                users: [8, 9, 10]
            },
            {
                label: "Charts & Maps",
                labelColor: "bg-purple-200 text-purple-700",
                title: "Completed Charts & Maps",
                attachments: 6,
                comments: 21,
                users: [11]
            },
        ]
    },
];

const DraggableBoard = () => {
    const [columnsData, setColumnsData] = useState(initialColumnsData); // State to store columns
    const [showForm, setShowForm] = useState(false); // State to control form visibility
    const [newColumnName, setNewColumnName] = useState(''); // State to store new column name

    // Initialize the sortable feature for each column
    useEffect(() => {
        const containers = document.querySelectorAll('.draggable-column');

        containers.forEach(container => {
            new Sortable(container, {
                draggable: '.draggable-card', // Set the whole card as draggable
                group: 'shared', // To allow dragging between columns
                animation: 150,
                onEnd: (evt) => {
                    // Handle the logic when dragging ends, e.g., update state
                }
            });
        });
    }, [columnsData]); // Add dependency on columnsData to reinitialize on update

    // Handle adding new column
    const handleAddNewColumn = () => {
        if (newColumnName.trim()) {
            const newColumn = {
                title: newColumnName,
                items: [] // Empty items in the new column
            };
            setColumnsData([...columnsData, newColumn]); // Add the new column to the existing columns
            setShowForm(false); // Hide the form after adding
            setNewColumnName(''); // Reset the input field
        }
    };

    return (
        <div className='pt-[100px] xl:w-[78%] lg:w-[68%] md:w-[95%] float-end'>
            <div className='relative flex justify-between'>
                <h1 className='text-7xl'>Tasks</h1>
                <button
                    className="text-3xl bg-blue-500 text-white rounded-lg px-4 py-2 mr-16"
                    onClick={() => setShowForm(true)} // Show form when clicked
                >
                    + Add new
                </button>


                {/* Form to input new column name */}
                {showForm && (
                    <div className="absolute top-[12rem] right-[-9rem] transform -translate-x-1/2 -translate-y-1/2 p-4 w-[20%] bg-white rounded-xl shadow-lg">
                        <h2 className='text-2xl'>Add new column</h2>
                        <input
                            type="text"
                            placeholder="Enter column name"
                            value={newColumnName}
                            onChange={(e) => setNewColumnName(e.target.value)}
                            className="border border-gray-300 rounded-lg px-4 py-2 w-full text-xl"
                        />
                        <div className="mt-4">
                            <button
                                className="bg-green-500 text-white rounded-lg text-xl px-4 py-2 mr-4"
                                onClick={handleAddNewColumn}
                            >
                                Confirm
                            </button>
                            <button
                                className="bg-red-500 text-white rounded-lg text-xl px-4 py-2"
                                onClick={() => setShowForm(false)} // Hide form when canceled
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex space-x-4 p-8">
                {columnsData.map((column, colIndex) => (
                    <div key={colIndex} className="w-1/3">
                        <h3 className="text-4xl font-semibold mb-4">{column.title}</h3>
                        <div className="draggable-column space-y-4">
                            {column.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="draggable-card p-4 bg-white rounded-lg shadow-md cursor-move">
                                    {/* No handle, the whole card is draggable */}
                                    <span className={`inline-block px-2 py-1 text-xl font-semibold ${item.labelColor} rounded-full mb-2`}>
                                        {item.label}
                                    </span>
                                    {item.image && (
                                        <div className="mb-4">
                                            <img src={item.image} alt={item.title} className="rounded-lg w-full" />
                                        </div>
                                    )}
                                    <h4 className="text-2xl font-medium mb-2">{item.title}</h4>
                                    <div className="flex justify-between items-center text-sm text-gray-500">
                                        <div className="flex items-center space-x-4">
                                            <span className="text-2xl flex items-center">
                                                <GoPaperclip className="mr-1" /> {item.attachments}
                                            </span>
                                            <span className="text-2xl font-semibold flex items-center">
                                                <BiMessageSquareDetail className="mr-1" /> {item.comments}
                                            </span>
                                        </div>
                                        <div className="flex -space-x-2">
                                            {item.users.map((user, userIndex) => (
                                                <FaUserCircle key={userIndex} className="w-8 h-8 text-gray-400" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className=" mt-4 text-2xl  text-gray-500 rounded-lg px-4 py-2">+ Add New Item</button>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default DraggableBoard;
