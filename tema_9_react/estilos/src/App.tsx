import "./App.css";
import { CreateTableUI } from "./components/TableUI";
import { items } from "./data/ItemsTable";

function App() {
  return (
    <>
      <div className="flex gap-4 items-center justify-between">
        <CreateTableUI
          items={items}
          title="Chakra UI Table"
          variant="line"
          colorPalette="gray"
          size="lg"
          stickyHeader
          interactive
          pageSize={10}
        />
      </div>
    </>
  );
}

export default App;
