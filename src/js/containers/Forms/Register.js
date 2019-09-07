import React from 'react';
import useForm from './FormHooks';
import { connect } from 'react-redux'
import { userActions } from '../../redux/actions';

const Register = () => {
  const { handleSubmit, handleInputChange, inputs } = useForm(signThemUp);

  function signThemUp() {
    const { firstName, lastName, username, email, password } = inputs
    console.log("Dispatch Action to Register user");
    props.signUp(firstName, lastName, username, email, password)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleInputChange}>
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          value={inputs.firstName}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          value={inputs.lastName}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="username"
          value={inputs.username}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="e-mail"
          value={inputs.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={inputs.password}
          required
        />
        <input
          type="password"
          name="password2"
          placeholder="confirm password"
          value={inputs.password2}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = {
  signUp: userActions.signUp
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);