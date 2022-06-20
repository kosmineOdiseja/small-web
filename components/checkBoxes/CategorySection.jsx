function CategorySection({ categorysection }) {
	
  const [selected, setSelected] = React.useState([]);

  function onChange(event, item) {
    if (event.target.checked) {
      setSelected([...selected, item]);
    } else {
      setSelected((prev) =>
        prev.filter((currItem) => currItem.value !== item.value)
      );
    }
  }

  return (
    <details className="dropdown-header">
      <summary>
        {categorysection.category}{" "}
        {selected.length > 0 ? selected.length : null}
      </summary>

      {categorysection.data.map((categorylabel, i) => (
        <div key={i}>
          <input
            type="checkbox"
            id={categorylabel.value}
            name="vehicle1"
            value="Bike"
            onChange={(event) => onChange(event, categorylabel)}
          />
          {/* <label for={categorylabel.value}>{categorylabel.label}</label> */}
        </div>
      ))}
    </details>
  );
}