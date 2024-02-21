import "./index.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

// or less ideally
// import { Button } from "react-bootstrap";s
{
  /* The following line can be included in your src/index.js or App.js file */
}

const Gallery = () => (
  <div className="gallery">
    <h3>i am Gallery page</h3>
    <a href="./gallery">Gallery</a>
    <Button variant="primary">Primary</Button>{" "}
    <Button variant="secondary">Secondary</Button>{" "}
    <Button variant="success">Success</Button>{" "}
    <Button variant="warning">Warning</Button>{" "}
    <Button variant="danger">Danger</Button>{" "}
    <Button variant="info">Info</Button> <Button variant="light">Light</Button>{" "}
    <Button variant="dark">Dark</Button>
    <Button variant="link">Link</Button>
    <br />
    <br />
    <br />
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>using bootstrap card as an exmple</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
);

export default Gallery;

// function TypesExample() {
//   return (
//     <>
//       <Button variant="primary">Primary</Button>{" "}
//       <Button variant="secondary">Secondary</Button>{" "}
//       <Button variant="success">Success</Button>{" "}
//       <Button variant="warning">Warning</Button>{" "}
//       <Button variant="danger">Danger</Button>{" "}
//       <Button variant="info">Info</Button>{" "}
//       <Button variant="light">Light</Button>{" "}
//       <Button variant="dark">Dark</Button>
//       <Button variant="link">Link</Button>
//     </>
//   );
// }

// export default TypesExample;
