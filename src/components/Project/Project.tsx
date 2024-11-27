import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll"
import video from "../../assets/Tools.mp4";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

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

<div style={{height:'600px',width:'25px'}} className="project-card">
        <header className="project-card-header">
          <video autoPlay muted loop playsInline className="project-video">
            <source src={video} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </header>
        <div className="project-body">
          <h3>Project Title</h3>
          <p>Project description goes here...</p>
        </div>
      </div>

      <div style={{height:'600px',width:'25px'}} className="project-card">
        <header className="project-card-header">
          <video autoPlay muted loop playsInline className="project-video">
            <source src={video} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </header>
        <div className="project-body">
          <h3>Project Title</h3>
          <p>Project description goes here...</p>
        </div>
      </div>
      <div style={{height:'600px',width:'25px'}} className="project-card">
        <header className="project-card-header">
          <video autoPlay muted loop playsInline className="project-video">
            <source src={video} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </header>
        <div className="project-body">
          <h3>Project Title</h3>
          <p>Project description goes here...</p>
        </div>
      </div>




      </div>
    </Container>
  );
}