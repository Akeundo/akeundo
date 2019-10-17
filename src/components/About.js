import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class About extends React.Component {
  render() {
    return <Container>
      <br/>
      <br/>
      <Row>
        <Col>
          <h3>This page is deployed as a static website and was built with the following technologies as well as a reference to Diaz personal page :</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            
            <li><a href="https://reactjs.org/">React</a></li>
            
            <li><a href="https://fontawesome.com/how-to-use/on-the-web/using-with/react">Font Awesome</a></li>
            
            <li><a href="https://github.com/ReactTraining/react-router">react-router</a></li>
            <li><a href="https://dev.to/oswaldodiaz/my-personal-page-with-react-4jkn">Referencing Diaz's github page </a></li>
          </ul>
        </Col>
      </Row>

     
      <Row>
        <Col>
          <p>For More Information Please Check MY<a href="https://www.linkedin.com/in/valantine-nkeh-akeundo-a78053167/">Linkedin</a> account.</p>
        </Col>
      </Row>
    </Container>
  }
}

export default About;