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
}


export default UserProfile;