import React from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaWhatsapp,FaMailBulk,FaLinkedin } from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const Rightsidenave = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-success"> <FaGoogle />  Login with Google</Button>
        <Button variant="outline-dark"> <FaGithub/>  Login with Github</Button>
      </ButtonGroup>
      <div className="mt-5">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2"><FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item className="mb-2"> <FaTwitter/> Twiter</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaWhatsapp/> WhatsApp</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaMailBulk/> Gmail</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaLinkedin/> Linked In</ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-5">
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};  

export default Rightsidenave;
