import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'react-datepicker/dist/react-datepicker.css'
import './stylesheets/main.css'
import AlertSample from './components/Alert/AlertSample'
import AlertNew from './components/Alert/AlertNew'
import AlertTest from './components/Alert/AlertTest'
import AlertMessage from './components/Alert/AlertMessage'
// export default class ExampleComponent extends Component {
//   static propTypes = {
//     text: PropTypes.string
//   }

//   render() {
//     const {
//       text
//     } = this.props

//     return (
//       <div className={styles.test}>
//         Example Component: {text}
//       </div>
//     )
//   }
// }
export { AlertSample, AlertNew, AlertTest, AlertMessage }
