import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';


export const Projects = () => {

  // this array will hold the info about the project
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  // buliding the component
  return (
    // builded the entire component in this <section> element this is like suger form of this cmpnnt
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            
              
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                {/* here the tab.container starts */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">

                  {/* took this pills from react bootstarp website it has 3 nav items */}
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">

                  
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab One</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab Two</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab Three</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  {/* react bootstrap pills ends here */}

                  
                  {/* here the tab.content element starts which contains 3 tab.panes */}
                  <Tab.Content>

                    {/* 1st tab.pane */}
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                                
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    {/* 2nd tab.pane */}
                    <Tab.Pane eventKey="second">
                      Lorem Ipsum
                    </Tab.Pane>


                    {/* 3rd tab.pane */}
                    <Tab.Pane eventKey="third">
                      Lorem Ipsum
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              {/* tab container ends here */}
            
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}