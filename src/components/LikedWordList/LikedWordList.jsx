import React, { Component } from "react";
import Table from 'react-bootstrap/Table'


class LikedWordList extends Component{
  constructor({likedWordList}){
    super({likedWordList});

  }

  render(){
      let {likedWordList} = this.props
      console.log(likedWordList);
      return(
  <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
      )
  }
}

export default LikedWordList;