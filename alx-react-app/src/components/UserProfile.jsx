const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
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

const App = () => {
  return (
    <div><h1>User Profile</h1>
    <User Profile 
    name="Alice" 
    age="25"
    Bio="Loves hiking and photography"
    />
    </div>
  )
}

export default App

import React from 'react'

export const UserProfile = () => {
  return (
    <div>UserProfile</div>
  )
}
