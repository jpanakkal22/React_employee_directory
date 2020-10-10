import React, { Component } from "react";
import API from "./utils/API";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";



class App extends Component {
  // Setting this.state.employee to an empty object
  state = {
    result: [],
    filteredResults: []
  };
  // Query the API and update state
  componentDidMount(){    
    API.search()
      .then(res => this.setState({ result: res.data.results, filteredResults: res.data.results }))
      .catch(err => console.log(err));       
  }

  //  handleClick(event) {
  //   console.log(event.target);
  // }
  handleClick = (arg) => {
    this.setState(state => {
      const newArray = state.filteredResults.filter(result => {
        return result.gender === arg;
      })
      console.log(newArray);     
      return {filteredResults: newArray};
      
    })
    
  }
  
  render() {
        
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <button onClick={() => this.handleClick("male")}>Male</button>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredResults.map(employee => (
              <tr>
                <td><img src={employee.picture.large} alt={employee.name.first}/></td>
                <td>{`${employee.name.first} ${employee.name.last}`}</td>
                <td>{employee.gender}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>       
      </Wrapper>      
    );
  }
}

export default App;
