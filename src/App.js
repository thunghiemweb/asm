import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { STAFFS } from './shared/staffs';
import StaffList from './StaffListComponent';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { dsnv: STAFFS };
  }


  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className='jumbotron2'>
            <NavbarBrand>
              Ứng dụng quản lý nhân sự v1.0
            </NavbarBrand>
          </div>
        </Navbar>

        <StaffList dsnv={this.state.dsnv} />

      </div>
    );
  }
}
//
export default App;