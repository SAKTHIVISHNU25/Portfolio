import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import video from "../../assets/ice machine_comp.mp4";
import video1 from "../../assets/inspection.mp4";
import video2 from "../../assets/videocall.mp4";
import video3 from "../../assets/Sammeta.mp4";
import video4 from "../../assets/chem.mp4";
import video5 from "../../assets/heart.mp4";
import video6 from "../../assets/apollo_tyres_comp.mp4";
import video7 from "../../assets/service_bricks_.mp4";
import video8 from "../../assets/loto-compressed.mp4";

import "./project.css";

export function Project() {
  const data = [
    {
      title: "Activity-Based Education Application",
      video: video4,
      des: `Developed an innovative application designed to provide immersive, activity-based educational experiences for students
            across multiple platforms, including <b style="font-size: 15px;">VR, Mobile, Web, and IOS</b>. The app integrates 
            interactive learning activities and educational simulations, allowing students to engage with content in a dynamic and 
            hands-on environment. Leveraged <b style="font-size: 15px;">Photon Unity Networking (PUN)</b> to enable real-time 
            multiplayer functionality, promoting collaboration and interaction among students. This application aims to enhance 
            learning by offering engaging, gamified experiences that adapt to various learning styles, improving student retention 
            and making education more accessible and enjoyable.`,
    },
    {
      title: "AR + AI Quality Inspection System",
      video: video1,
      des: `Developed a cutting-edge quality inspection system that integrates AR and AI technologies to revolutionize industrial 
            quality control processes. Utilized <b style="font-size: 15px;">Vuforia</b> for precise AR model overlay, enabling 
            real-time visualization of inspection criteria directly on physical objects. Combined this with a robust machine 
            learning model trained via <b style="font-size: 15px;">Roboflow</b>, designed for accurate extraction and analysis of 
            numerical data. This innovative system streamlines quality checks, reduces manual errors, and ensures higher accuracy, 
            providing a scalable solution for modern industrial applications.`,
    },
    {
      title: "Interactive VR Guidance App",
      video: video,
      des: `Developed an immersive application using <b style="font-size: 15px;">OpenXR</b> in Unity featuring two modes: Guide Mode for step-by-step assistance and Unguided Mode, an assessment mode where users perform tasks independently and receive scores based on accuracy. The app enhances engagement, ensures task precision, and validates skills, making it ideal for training and industrial applications.`,
    },
    {
      title: "Metaverse-Driven Online Meeting Platform",
      video: video3,
      des: `Developed an innovative online meeting platform resembling a metaverse, integrating Ready Player Me avatars for a 
            personalized and immersive experience across <b style="font-size: 15px;">VR, Mobile, Web</b>. Leveraged 
            <b style="font-size: 15px;">Photon Unity Networking (PUN)</b> to implement robust multiplayer functionality, ensuring 
            seamless real-time interaction among users. Designed to enhance remote collaboration, this platform combines cutting-edge 
            technology with intuitive user experiences, making it a versatile tool for meetings, social interactions, and virtual events.`,
    },
    {
      title: "Apollo Tyres – VR Training & Assessment System",
      video: video6,
      des: `Developed a VR training solution in Unity using OpenXR to simulate Apollo Tyres’ Die Change procedure. The system includes a Tutorial Mode with guided steps and a Practice Mode for independent execution. Built an assessment engine that captures user actions, generates performance scores, and displays results on a dashboard for individual user tracking. The solution enhances training accuracy, consistency, and operator readiness.`,
    },
    {
      title: "Heart Anatomy Learning App",
      video: video5,
      des: `Developed an interactive application designed to educate users about the human heart across multiple platforms, including 
            <b style="font-size: 15px;">VR, Mobile, Web, and IOS</b>. The app features a dissection module that allows users to 
            virtually <b style="font-size: 15px;">explore and dissect</b> the heart to understand its structure in detail. It also 
            includes <b style="font-size: 15px;">part identification and label identification</b> features to help users learn and 
            memorize the key components of the heart. With an intuitive, cross-platform interface, this app provides an immersive and 
            hands-on learning experience, making it a valuable tool for students, medical professionals, and anyone interested in the 
            human cardiovascular system.`,
    },
    {
      title: "VR Data Interaction System",
      video: video7,
      des: `Developed an immersive VR application that interacts with backend services to create and retrieve structured data. Users operate VR panels to trigger API actions, and the system displays the results dynamically inside the virtual environment. The project showcases real-time data handling, interactive VR UI design, and smooth integration between VR interfaces and backend systems.`,
    },
    {
      title: "VR LOTO Safety Training System",
      video: video8,
      des: `Developed an immersive VR application designed to teach Lockout–Tagout (LOTO) and safe movement procedures inside an industrial environment. The system recreates a factory floor with realistic machinery and visual safety indicators. Users follow guided pathways, interact with equipment, and learn correct safety steps in a controlled virtual space. The project focuses on increasing situational awareness, reducing workplace risk, and providing an engaging way for operators to practice safety protocols.`,
    },
    {
      title: "Video Calling Remote Assistance App",
      video: video2,
      des: `Designed and developed an advanced video calling remote assistance app powered by AR to enable collaborative sessions 
            and real-time problem-solving. The app allows users to share their AR environment, providing visual guidance and 
            annotations during remote interactions. Integrated <b style="font-size: 15px;">AWS S3 buckets</b> for efficient cloud 
            storage, enabling secure and scalable recording and retrieval of session data. Utilized <b style="font-size: 15px;">PHP</b> 
            for server-side logic, managing API interactions and ensuring seamless data flow. This app offers a robust solution for 
            industries requiring remote support, training, or troubleshooting, enhancing productivity while reducing response times.`,
    },
  ];

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

        {data.map((input) => (
          <div className="glasseff">
            <div
              style={{
                display: "flex",
                borderRadius: "30px",
                marginTop: "-0.2%",
              }}
              className="project-cardnew"
            >
              <div
                style={{
                  height: "100%",
                  width: "50%",
                }}
              >
                <video autoPlay muted loop className="mobilevideo">
                  <source src={input.video} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
              <div
                style={
                  {
                    // marginLeft: "2%",
                    // padding: "2%",
                    // width: "60%",
                    // color: "black",
                  }
                }
                className="project-bodynew"
              >
                <h1>{input.title}</h1>
                <br />
                <p
                  style={{
                    // lineHeight: "2px",
                    letterSpacing: "1px",
                    fontSize: "17px",
                    height: "100%",
                  }}
                  dangerouslySetInnerHTML={{ __html: input.des }}
                ></p>
                {/* <h1> vishnu Hello World</h1> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
