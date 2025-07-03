import "./App.css";
import { CreateTable } from "./components/Table";
import { items } from "./data/ItemsTable";

function App() {
  return (
    <>
      <CreateTable
        items={items}
        title="Productos"
        variant="line"
        colorPalette="gray"
        size="lg"
        stickyHeader
        interactive
        pageSize={10}
      />
    </>
  );
}

export default App;
