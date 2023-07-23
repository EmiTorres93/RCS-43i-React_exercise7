import { Card } from "react-bootstrap";
import image from "../assets/Avatar1.png";

const EmpleadoRow = ({ propslistaEmpleado }) => {
  return (
    <>
      {propslistaEmpleado.map((empleado, index) => (
        <Card key={index} style={{ width: "30rem" }}>
          <div className="d-flex  ">
            <Card.Img variant="top" style={{ width: "12rem" }} src={image} />
            <div className="p-4">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{propslistaEmpleado.fullname}</Card.Title>
                <Card.Text> </Card.Text>
                <Card.Text>business</Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default EmpleadoRow;
