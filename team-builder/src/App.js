import React, { useState } from "react";

import Form from "./Components/Form";
import TeamList from "./Components/TeamList";
import data from "./data";
import { Container, Row } from "reactstrap";

function App() {
  const [members, setMembers] = useState(data);

  const addNewPerson = person => {
    setMembers([...members, person]);
  };

  return (
    <Container>
      <div className="whichBox?">
        <h1>Lisa's Team Builder</h1>
        <Row>
          {" "}
          <TeamList teamList={members} />
        </Row>
        <Form addNewPerson={addNewPerson} />
      </div>
    </Container>
  );
}
export default App;
