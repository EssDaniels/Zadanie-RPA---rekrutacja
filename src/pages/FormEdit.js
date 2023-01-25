import React, { useState } from 'react';

const EditRecordForm = (props) => {
  console.log(props);
  const [editingRecord, setEditingRecord] = useState(props);

  const handleChange = e => {
    setEditingRecord({
      ...editingRecord,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/reports/${editingRecord.id}`, {
        method: 'PUT',
        body: JSON.stringify(editingRecord),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        throw new Error('Error editing record');
      }
   
    
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        name="city"
        value={editingRecord.city}
        onChange={handleChange}
      />
      <label htmlFor="temperature">Temperature:</label>
      <input
        type="text"
        id="temperature"
        name="temperature"
        value={editingRecord.temperature}
        onChange={handleChange}
      />
      <label htmlFor="unit">Unit:</label>
      <input
        type="text"
        id="unit"
        name="unit"
        value={editingRecord.unit}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
};


export default EditRecordForm;
