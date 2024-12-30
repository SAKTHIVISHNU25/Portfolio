import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import video from "../../assets/back-video.mp4";
import "./project.css";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projectsnew">
        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/Serverless-Voting-Application" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://vote.vinayaksingh.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Serverless Voting Application for Programming Languages</h3>
              <p> Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency. </p>
            </div>
            <footer> <ul className="tech-list"> <li>AWS Lambda</li> <li>API Gateway</li> <li>DynamoDB</li> </ul> </footer>
          </div>
        </ScrollAnimation> */}
        <div className="glasseff">
          <div
            style={{
              display: "flex",
              borderRadius: "30px",
              marginTop: "-0.2%",
            }}
            className="project-cardnew"
          >
            <div style={{ height: "100%", width: "50%" }}>
              <video
                autoPlay
                muted
                loop
                style={{
                  height: "100%",
                  width: "100%",
                  marginTop: "1%",
                  marginLeft: "2%",
                  borderRadius: "2px",
                }}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div
              style={{
                marginLeft: "2%",
                padding: "2%",
                width: "60%",
                color: "black",
              }}
              className="project-bodynew"
            >
              <h3>Project Title</h3>
              <p>Project description goes here...</p>
              <h1> vishnu Hello World</h1>
            </div>
          </div>
        </div>

        <div className="glasseff">
          <div
            style={{
              display: "flex",
              borderRadius: "30px",
              marginTop: "-0.2%",
            }}
            className="project-cardnew"
          >
            <div style={{ height: "100%", width: "50%" }}>
              <video
                autoPlay
                muted
                loop
                style={{
                  height: "100%",
                  width: "100%",
                  marginTop: "1%",
                  marginLeft: "2%",
                  borderRadius: "2px",
                }}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div
              style={{ marginLeft: "2%", width: "60%", color: "black" }}
              className="project-bodynew"
            >
              <h3>Project Title</h3>
              <p>Project description goes here...</p>
              <h1> vishnu Hello World</h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
