

const Card = ({ name, age, role, isActive }) => {
  return (
    <div className="card">
      <img
        src="https://sites.brown.edu/sharelab/files/2021/08/avatar.jpg"
        alt="Avatar"
        width="100px"
      />
      <h1>{name} {isActive && '\u2740'}</h1>
      <h2>{age}</h2>
      <h2>{role}</h2>
    </div>
  );
};

export default Card;

