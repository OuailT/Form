import Form from "./Components/Form/Form";
import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    max-width: 500px;
    width: 100%;
    padding: 50px;
    background-color: #fff;
    border: 20px solid #dce7ff;
`;


function App() {
  return (
    <div className="container">
      <Wrapper> 
        <Form/>
      </Wrapper>
    </div>
  );
}

export default App;
