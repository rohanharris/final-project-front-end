import React, { Component } from 'react';
import Nav from "./Nav";
import { withRouter } from 'react-router-dom';

class Header extends Component {

  render() {
    const { children } = this.props;
    
    return (

      <>
        {/* <div className="container"> */}
          <header className="header glitch">

            {/* <h1 className="header-title" data-text={children}>{children}</h1> */}
            <div className="header-title " >
              {children}</div>

            <Nav />

          </header>
        {/* </div> */}
      </>
    );
  };



}


export default withRouter(Header)