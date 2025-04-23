'use client';
import { useState } from 'react';

const BioSection = () => {
    const [bio, setBio] = useState("No bio");
    const [isEditing, setIsEditing] = useState(false);
    const [newBio, setNewBio] = useState("");

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setBio(newBio);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setBio(bio);
        setIsEditing(false);
    };

    return (
        <div>
            <p>{bio}</p>

            {isEditing ? (
                <div>
                <textarea
                    value={newBio}
                    onChange={(e) => setNewBio(e.target.value)}
                    className="border p-1 w-full mt-2"
                    rows={4}
                />
                <div className="mt-2">
                    <button onClick={handleSave} className="mr-2 bg-red-700 text-white hover:bg-red-300 hover:text-white p-1 rounded">
                    Save
                    </button>
                    <button onClick={handleCancel} className="bg-black text-white hover:bg-red-300 hover:text-white p-1 rounded">
                    Cancel
                    </button>
                </div>
                </div>
            ) : (
                <div>
                    <button onClick={handleEdit} className="mt-5 mr-2 bg-red-700 text-white hover:bg-red-300 hover:text-white p-1 rounded">
                        Edit Bio
                    </button>
                </div>
            )}
        </div>
    );
}

export default BioSection;