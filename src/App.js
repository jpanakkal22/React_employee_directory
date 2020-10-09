import React, { Component } from "react";
import API from "./utils/API";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";

class App extends Component {
  // Setting this.state.employee to an empty object
  state = {
    result: []
  };
  // Query the API and update state
  componentDidMount(){    
    API.search()
      .then(res => this.setState({ result: res.data.results }))
      .catch(err => console.log(err));       
  }
  
  render() {
    console.log(this.state.result[0]);
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        {this.state.result.map(employee => ( 
          <EmployeeCard
            key= {employee.id.value}
            name= {`${employee.name.first} ${employee.name.last}`}
            image= {employee.picture.large}
            email= {employee.email}
            phone= {employee.phone}
          /> 
        ))}                 
      </Wrapper>
    );
  }
}

export default App;
