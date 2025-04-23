'use client'

import React, { useState } from 'react';

// Define the component
const AddItemForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the data to be sent
    const newItem = {
      title,
      description,
      url,
    };

    try {
      // Send the POST request to your API route
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      // Parse the JSON response
      const data = await response.json();

      // Handle the response
      if (response.ok) {
        setMessage('Item added successfully!');
        setTitle('');
        setDescription('');
        setUrl('');
      } else {
        setMessage(data.message || 'Something went wrong');
      }
    } catch (error) {
      setMessage('Error occurred while adding the item');
    }
  };
  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter item title"
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter item description"
          />
        </div>
        <div>
          <label htmlFor="url">URL</label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter item URL"
            required
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddItemForm;



