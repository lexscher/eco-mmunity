import { useState } from 'react';

const useForm = callback => {
  // Set hook to control input
  const [inputs, setInputs] = useState({});

  // Handle submit
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    // Use whatever method we've passed into our hook (Most likely a method that dispatches an Action)
    if (callback instanceof Function) callback();
  };
  // Method actually handles the input
  const handleInputChange = event => {
    event.persist();
    const { name, value } = event.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  };
  // Return an object so that we may destructure these methods
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useForm;
