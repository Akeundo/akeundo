import React from 'react';
import {Jumbotron, Container} from "reactstrap";


class ProfileSummary extends React.Component {
  render() {
    return <Jumbotron className="summary">
      <Container>
        <h2 className="display-3">Full Stack Developer</h2>
        <div className="lead">
        <p> I am very passionate about software development. Getting things work effectively and efficiently for clients. Always growing as a person. Looking forward to give my best to my team and co-workers.</p>
        <p>Currently seeking for internship position as a Junior Full Stack Developer after completing a crash training with business College Pasila. Prior qualifications include a solid background in Accounting and Finance. Msc in Advance Information Systems, ACCA certification(affiliate), Readily available and can travel . </p>
        </div>
      </Container>
    </Jumbotron>;
  }
}

export default ProfileSummary;