import "./App.css";
import Otro from "./Otro";
import Formulariocss from "./Formulariocss";
import Formularioboot from "./components/Formularioboot";

function App() {
  return (
    <>
    <div className="row">
    <div className="col-4">
      <h1></h1>
    </div>
    <div className="col-4">
      <h1></h1>
    </div>
    <div className="col-4">
      <h1></h1>
    </div>
    </div>
    <div className="App">
      <h1>Hola</h1>
      <Otro />
      <Formulariocss />
      <div className="container-fluid p-3 ">
        <Formularioboot />
      </div>
    </div>
    </>
  );
}

export default App;