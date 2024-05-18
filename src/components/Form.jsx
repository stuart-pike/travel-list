import { useState } from "react";
// input fields and the select example below maintain there own state inside the HTML element in the DOM. This makes it hard to read their values, and keeping their state in the DOM is not ideal.
export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // 'event' is automatically passed by onSubmit
  function handleSubmit(event) {
    event.preventDefault();
    // require a description to create new item
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItem(newItem);
    // reset form to original state
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip</h3>
      <select
        value={quantity}
        //e.target.value is always a string us Number to convert
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {/* inside {JS} use Array.from, pass an {object} with a length property set to 20. The second part receive the first arg and index. using only the index map throught the array */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
