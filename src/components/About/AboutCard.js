import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rachit Sharma </span>
            from <span className="purple"> Auraiya, Uttar Pradesh, India.</span>
            <br />
            <br />
            I have completed B.Tech in Hemwati Nandan Bahuguna Garhwal University, Srinagar, Uttrakhand.
            <br />
            I'm passionate about web development, focusing on Node.js, React.js, MongoDB, and Express.js. I excel in crafting innovative solutions and conducting detailed content analysis. My full-stack expertise ensures seamless integration of front-end and back-end technologies for robust applications.
            <br />
            I have a deep passion for web scraping, data analysis, and software development. With extensive experience using tools such as Microsoft Excel, Tableau, and QGIS, I excel at uncovering valuable insights and creating impactful visualizations and analytics dashboards.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Read Articles
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rachit Sharma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
