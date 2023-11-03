import { Form } from "./components/Form";
import { Logo } from "./components/Logo";
import { PackagingList } from "./components/PackagingList";
import { Stats } from "./components/Stats";
import "../src/style.css";

function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackagingList />
      <Stats />
    </div>
  );
}

export default App;
