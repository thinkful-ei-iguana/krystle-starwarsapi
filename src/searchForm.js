  
import React from 'react';

export default class SearchForm extends React.Component {
  

  
  render(){
    return(
      <form onSubmit={this.props.handleSubmit}>
        <label>Search Your Favorite Star Wars Character:</label><br></br>
        <input type="text" name="person-name" required></input>
        <button type="submit">Search</button>
      </form>

    )
  }
}