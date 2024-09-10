import { useState } from 'react';

const   EditTaskForm = () => {
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [label, setLabel] = useState('');
    const [comment, setComment] = useState('');
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Due Date</label>
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Select Label</label>
                <select
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    className="w-full p-2 border rounded"
                >
                    <option value="">Select Label</option>
                    <option value="label1">Label 1</option>
                    <option value="label2">Label 2</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Attachments</label>
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="w-full p-2 border rounded"
                />
                {file && <p className="mt-2 text-sm">{file.name}</p>}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Comment</label>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full p-2 border rounded"
                    rows="4"
                ></textarea>
            </div>

            <div className="flex justify-between">
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Update</button>
                <button type="button" className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
            </div>
        </form>
    );
};

export default EditTaskForm;
