function Search({ inputSetter }) {
  return (
    <input
      className="input"
      placeholder="Search for a name..."
      type="text"
      onInput={(event) => inputSetter(event)}
    />
  );
}

export default Search;
