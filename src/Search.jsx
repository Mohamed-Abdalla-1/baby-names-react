function Search({ value, inputSetter }) {
  return (
    <input
      className="input"
      placeholder="Search for a name..."
      value={value}
      type="text"
      onInput={(event) => inputSetter(event)}
    />
  );
}

export default Search;
