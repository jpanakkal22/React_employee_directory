import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";



function App() {
  return(
    <Wrapper> 
      <Title>Employee Directory</Title>
      <EmployeeCard/>      
    </Wrapper>
  );
}

export default App;
