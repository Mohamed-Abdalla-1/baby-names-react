const Names = ({ babyNames, input, handleClick }) => {
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
        .filter((baby) => baby.name.toUpperCase().includes(input.toUpperCase()))
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
