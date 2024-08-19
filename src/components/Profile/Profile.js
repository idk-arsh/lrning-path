import React from 'react';
import './Profile.css';

const Profile = ({ profileData, setProfileData }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:3001/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...profileData,
          cost: profileData.cost === 'true', // Convert to boolean here
        }),
      });
      alert('Course data submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <h1>Select Course to begin with....</h1>
      <form method='POST' onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Learning Goal'
          value={profileData.title}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type='number'
          name='duration'
          placeholder='In how many weeks'
          value={profileData.duration}
          onChange={handleChange}
          required
        />
        <br />
        <select name='cost' value={profileData.cost} onChange={handleChange} required>
          <option value="false">Free</option>
          <option value="true">With Money</option>
        </select>
        <br />
        <div className="note">
                <p>
                    Note: This Website is not modified for the paid services so right now you will only get the free service even if you click paid option.
                </p>
            </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Profile;
