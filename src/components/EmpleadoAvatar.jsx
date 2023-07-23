import { Card } from "react-bootstrap";

const EmpleadoAvatar = ({ propsAvatar }) => {
  return (
    <>
      <Card.Img
        className="border border-primary border-3 rounded-circle"
        variant="top"
        style={{ width: "12rem" }}
        src={propsAvatar}
      />
    </>
  );
};

export default EmpleadoAvatar;
