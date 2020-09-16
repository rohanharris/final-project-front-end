import React,  { Component } from 'react';


class Search extends Component{

  render(){
    if (window.location.pathname === '/') return null;
    
    return(
    <form className="search" action="/">
      <input className="form-input" type="text" placeholder="Search.." name="search"/>
      <button className="form-button" type="submit"><i className="fa fa-search"></i></button>
    </form>

    );
   

  }

}



export default Search