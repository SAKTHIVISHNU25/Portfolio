import { Container } from "./styles";
import VinayakSingh from "../../assets/Sakthivishnu.jpg";
import wordpress from "../../assets/unity.png";
import shopify from "../../assets/c-sharp.png";
import htmlIcon from "../../assets/java.png";
import cssIcon from "../../assets/aws.png";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/github.png";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/vrnew.png";
import vueIcon from "../../assets/augmented-reality.png";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <>
      <p style={{ height: "15vh" }}></p>
      <Container id="about">
        <div className="about-text">
          <ScrollAnimation animateIn="fadeInLeft">
            <h2>About me</h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
            <p>
              Hi, I'm Sakthivishnu, a passionate Unity developer with 2.4 years
              of experience specializing in VR, AR, and game development. I am
              committed to creating immersive and interactive experiences that
              push the boundaries of technology.
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={0.2 * 1000}
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <p>
              My expertise includes working with cutting-edge tools and
              technologies to develop innovative applications that blend user
              engagement with real-world functionality. I'm always eager to take
              on new challenges and contribute to projects that make an impact
              in the world of interactive media and beyond.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
            {/* <p>
            So if you're in need of a new website or just looking to revamp your
            current online presence, I'd love to chat and see how I can help.
            Let's bring your website dreams to reality together!
          </p> */}
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
            <h3>Here are my main skills:</h3>
          </ScrollAnimation>
          <div className="hard-skills">
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
                <img src={wordpress} alt="Wordpress" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
                <img src={shopify} alt="shopify" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
                <img src={typescriptIcon} alt="Typescript" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
                <img src={vueIcon} alt="Vue" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                <img src={htmlIcon} alt="React" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
                <img src={cssIcon} alt="Html" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
                <img src={nodeIcon} alt="Node" />
              </ScrollAnimation>
            </div>
            {/* <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
                <img src={cssIcon} alt="Css" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                <img src={boostrapIcon} alt="bootstrap" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                <img src={jsIcon} alt="JavaScript" />
              </ScrollAnimation>
            </div> */}
          </div>
        </div>
        <div className="about-image">
          <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
            <img
              style={{ borderRadius: "50%" }}
              src={VinayakSingh}
              alt="Sakthivishnu"
            />
          </ScrollAnimation>
        </div>
      </Container>
    </>
  );
}
