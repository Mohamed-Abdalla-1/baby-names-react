const Names = (props) => {
  return (
    <div className="names-container">
      {props.babyNames
        .sort((a, b) =>
          a.name.toUpperCase() < b.name.toUpperCase()
            ? -1
            : a.name.toUpperCase() > b.name.toUpperCase()
            ? 1
            : 0
        )
        .filter((baby) =>
          baby.name.toUpperCase().includes(props.input.toUpperCase())
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
