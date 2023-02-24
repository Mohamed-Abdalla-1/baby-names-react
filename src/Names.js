const Names = (props) => {
  return (
    <div className="container">
      {props.babyNames
        .sort((a, b) =>
          a.name.toUpperCase() < b.name.toUpperCase()
            ? -1
            : a.name.toUpperCase() > b.name.toUpperCase()
            ? 1
            : 0
        )
        .map((baby) => (
          <p key={baby.id} className={baby.sex === "f" ? "fem" : "mal"}>
            {baby.name}
          </p>
        ))}
    </div>
  );
};

export default Names;
