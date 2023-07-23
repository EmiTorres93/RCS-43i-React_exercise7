import { Card } from "react-bootstrap";

import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({ propslistaEmpleado }) => {
  return (
    <>
      {propslistaEmpleado.map((empleado, index) => (
        <Card
          className="m-4 border border-black border-5"
          key={index}
          style={{ width: "30rem" }}
        >
          <div className="d-flex m-3 ">
            <EmpleadoAvatar
              propsAvatar={"assets/" + empleado.pic}
            ></EmpleadoAvatar>
            <div className="p-4">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{empleado.fullName}</Card.Title>
                <Card.Text>{empleado.title}</Card.Text>
                <Card.Text
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {empleado.department}
                </Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default EmpleadoRow;
