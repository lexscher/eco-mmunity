import React from 'react';
import useForm from './FormHooks';
import { connect } from 'react-redux';
import { userActions } from '../../redux/actions';

const LogIn = props => {
  const { handleSubmit, handleInputChange, inputs } = useForm(logThemIn);
  function logThemIn() {
    const { username, password } = inputs;
    props.logIn(username, password);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="assimilation-form">
      <h3>Log In</h3>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={inputs.username}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={inputs.password || ''}
          onChange={handleInputChange || ''}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = {
  logIn: userActions.logIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
