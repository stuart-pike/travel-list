import { useState } from "react";

import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  // Lifted state from Form component to get items to PackingList
  const [items, setItems] = useState([]);
  // pass the setter function as a prop to the Form
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearListItems() {
    const confirmed = window.confirm(
      "Are you sure you ant to delete all itmems?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
        handleClearListItems={handleClearListItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
