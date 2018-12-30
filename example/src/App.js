import React, { Component } from 'react'
import 'tt-frontend/src/stylesheets/main.css'
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { ExampleComponent, AlertSample, AlertNew, AlertTest, AlertMessage } from 'tt-frontend'

export default class App extends Component {
  render () {
    return (
      <div>
        <Button className="btn-action">Sample</Button>
        <AlertSample/>
        <AlertNew/>
        <AlertTest/>
        <AlertMessage alertType={'success'} iconName={'fas fa-check-circle'} alertInfo={'This Alert is for SUCCESS message'}/>
      </div>
    )
  }
}
