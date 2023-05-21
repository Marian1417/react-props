import "./App.css";
import List from "./components/List";

function App() {
  return (
    <div className="container">
      <List
        items={[
          "pencil",
          "paper",
          "scissors",
          "notebook",
          "itemsglue",
          "ruler",
        ]}
      />
    </div>
  );
}

export default App;
