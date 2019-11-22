import React from 'react';
import './App.css';
import SearchForm from './searchForm';
import NameList from './nameList';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      people: [],
    };
    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('handlesubmit ran');
    const name= event.target['person-name'].value;
    console.log(name)
    event.target['person-name'].value = ''; 
    this.componentDidMount(name); 

  }

  
  componentDidMount = (name) => {
    
    fetch(`https://swapi.co/api/people/?search=${name}`)
    .then(response => {     
      if (!response.ok) {       
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data=> {
     
      this.setState({
        people: data.results,
      });
    })
    .catch(error => {
      this.setState({
        error: error.message
      });
    });
  }

 

  render() {
    return (
      <div className="App">
        <main>
          <SearchForm handleSubmit={this.handleSubmit}/>
          <NameList people={this.state.people}/>
        </main>
      </div>
    );

    
  }
  
}

export default App;