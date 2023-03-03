const Favourites = ({ favourit, handleClick }) => {
  return (
    <div className="favourite-container">
      Favourites:
      {favourit.map((baby) => (
        <p
          key={baby.id}
          className={baby.sex === "f" ? "fem" : "mal"}
          onClick={handleClick}
        >
          {baby.name}
        </p>
      ))}
    </div>
  );
};

export default Favourites;
