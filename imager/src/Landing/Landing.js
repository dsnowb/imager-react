import React from 'react'
import AuthForm from './AuthForm/AuthForm'

export default class Landing extends React.Component {
  render() {
    let { params } = this.props.match
    let handleComplete = params.auth === 'signin'
      ? this.props.signin
      : this.props.signup

    return (
      <div className="landing-container">
        <AuthForm buttonText={params.auth} onComplete={handleComplete} />
      </div>
    )
  }
}
