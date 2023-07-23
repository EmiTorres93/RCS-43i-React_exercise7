import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import EmpleadoList from "./components/EmpleadoList";

function App() {
  return (
    <>
      <Container>
        <h1 className="text-center my-3">Lista Empleados</h1>
        <EmpleadoList></EmpleadoList>
      </Container>
    </>
  );
}

export default App;
