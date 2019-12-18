import React, { useState } from 'react';

import Form from './Components/Form';
import TeamList from './Components/TeamList';
import data from './data';
import { Container, Row, Col } from 'reactstrap';



function App() {

  const [members, setMembers] = useState(data);

  const addNewPerson = person => {
    setMembers([...members, person])
  }


  return (
    
    <Container> 
    <div>

      <h1>Lisa's Team Builder</h1>
     <Row> <TeamList teamList={members} /></Row>
     <Col> <Form addNewPerson={addNewPerson} /></Col>
      </div>
      </Container>
  );
}
export default App;