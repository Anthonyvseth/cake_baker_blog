import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __LoginUser } from '../components/services/UserServices'

export default class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      formError: false,
      login: true
    }
    this.changeState = this.changeState.bind(this)
  }

  changeState = () => {
    this.setState({
      login: !this.state.login
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value, formError: false })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const loginData = await __LoginUser(this.state)
      // console.log(loginData)
      this.props.toggleAuthenticated(true, loginData.user, () =>
        this.props.history.push('/profile')
      )
    } catch (error) {
      this.setState({ formError: true })
    }
  }
  render() {
    const { email, password, login } = this.state
    return (
      <div className="signin flex-col">
        <form 
        type="button"
          className={login ? "btn-primary" : "btn-danger"}
          onClick={this.changeState} 
           onSubmit={this.handleSubmit}>
          <TextInput
            placeholder="Your Email"
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
          />
          <TextInput
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
          />
          <button>Sign In</button>
          {this.state.formError ? <p>Error While Logging In</p> : <p></p>}
        </form>
      </div>
    )
  }
}
