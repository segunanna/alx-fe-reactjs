const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};


 function UserProfile() {
  return (
    <div>
      <h2>Alice </h2>
       <p>Age: 25 </p>
       <p>Bio: Loves hiking and photography </p>
    </div>
  );
};


function App() {
  return (
    <div>
      <h1>User Information</h1>
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
    </div>
  );
}

export default Userprofile;