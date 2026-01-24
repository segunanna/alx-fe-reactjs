const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '20px', margin: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: 'blue', fontSize: '1.5rem', marginBottom: '10px' }}>{props.name}</h2>
      <p style={{ fontSize: '1.1rem' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p style={{ fontStyle: 'italic', color: 'darkslategray' }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;

function App() {
  return (
    <div>
      <h1>User Profiles</h1>

      <User Profile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
    </div>
  );
}


import React from 'react'

