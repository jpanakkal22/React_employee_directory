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

  handleClick = (arg) => {    
    if(arg === "both"){
      return this.setState({filteredResults: this.state.result});
    }
    else {
      this.setState(state => {
        const newArray = state.filteredResults.filter(result => {
          return result.gender === arg;
        });
        return {filteredResults: newArray};      
      });   
    }   
  }

  sortEvent = (arg) => {
    if(arg === "ascending"){
      this.setState(state => {
        const sortArray = state.filteredResults.sort((a, b) => {
          let x = a.name.last.toLowerCase();
          let y = b.name.last.toLowerCase();
    
          if(x < y) {return -1}
          if(x > y) {return 1}
          return 0;
        });
        return {filteredResults: sortArray};
      });
    }
    else {
      this.setState(state => {
        const sortArray = state.filteredResults.sort((a, b) => {
          let x = a.name.last.toLowerCase();
          let y = b.name.last.toLowerCase();
    
          if(x > y) {return -1}
          if(x < y) {return 1}
          return 0;
        });
        return {filteredResults: sortArray};
      });
    }
    
  }   
    
  
  
  render() {   
    console.log(this.state.filteredResults[0])      ;
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary" onClick={() => this.handleClick("male")}>Male</button>
        <button type="button" className="btn btn-secondary" onClick={() => this.handleClick("female")}>Female</button>
        <button type="button" className="btn btn-success" onClick={() => this.handleClick("both")}>Both</button>
        </div>
        <div>
        <button type="button" className="btn btn-primary" onClick={() => this.sortEvent("ascending")}>A-Z</button>
        <button type="button" className="btn btn-secondary" onClick={() => this.sortEvent("desceding")}>Z-A</button>
        </div>
        
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
