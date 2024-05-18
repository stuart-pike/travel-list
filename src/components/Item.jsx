export default function Item({ listItem, onDeleteItem, onToggleItem }) {
  const { description, quantity, packed } = listItem;
  return (
    <li>
      <input
        type="checkbox"
        value={listItem.packed}
        onChange={() => onToggleItem(listItem.id)}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(listItem.id)}>❌</button>
    </li>
  );
}
