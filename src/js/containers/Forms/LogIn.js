import React, { useState } from 'react';
import useForm from './FormHooks';

const LogIn = () => {
  const { handleSubmit, handleInputChange, inputs } = useForm(logThemIn);

  function logThemIn() {
    console.log("Dispatch Action to Log In user");
    console.log(inputs);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={inputs.username}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          value={inputs.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;