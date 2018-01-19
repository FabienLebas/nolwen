import React, { Component } from 'react';

class Today extends Component{
  constructor(props){
    super(props);
    this.state = {
      begin: "",
      end: ""
    }
  }

  componentDidMount(){
    const now = new Date();
    const month = ["January", "February", "March", "April", "May", "June", "April", "May", "June", "July", "August", "September", "October", "November", "December"][now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    this.setState({
      begin: new Date(`${month} ${day}, ${year} 16:45:00`),
      end: now
    })
    //I need something like 'December 17, 1995 03:24:00'

  }

  render(){
    if(this.props.leavingPressed){
      return(
        <table>
          <tbody>
            <tr>
              <td>Début à {this.state.begin.toLocaleString()}</td>
              <td>Fin à {this.state.end.toLocaleString()}</td>
              <td>Total {Math.round((this.state.end - this.state.begin) / (60 * 1000 * 60)*100)/100}h</td>
            </tr>
          </tbody>
        </table>
      )
    } else {
      return null;
    }
  }
}

export default Today;
