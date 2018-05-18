import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {

  render() {
    return (
      <header className="main-header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/welcome/signup">Signup</Link></li>
            <li><Link to="/welcome/signin">Signin</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}
