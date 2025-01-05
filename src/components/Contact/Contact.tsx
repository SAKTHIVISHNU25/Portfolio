import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts" style={{ marginBottom: "5vh" }}>
        <div>
          <a href="mailto:sakthivishnu2002@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="sakthivishnu2002@gmail.com">sakthivishnu2002@gmail.com</a>
        </div>
        <div>
          <a href="tel:+918610408854">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+918610408854">(+91) 8610408854</a>
        </div>
      </div>
      {/* <Form></Form> */}
    </Container>
  );
}
