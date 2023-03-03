const Names = ({ babyNames, handleClick }) => {
  return (
    <div className="names-container">
      {babyNames
        .sort((a, b) =>
          a.name.toUpperCase() < b.name.toUpperCase()
            ? -1
            : a.name.toUpperCase() > b.name.toUpperCase()
            ? 1
            : 0
        )

        .map((baby) => (
          <p
            key={baby.id}
            className={baby.sex === "f" ? "fem" : "mal"}
            onClick={(e) => handleClick(e)}
          >
            {baby.name}
          </p>
        ))}
    </div>
  );
};

export default Names;
