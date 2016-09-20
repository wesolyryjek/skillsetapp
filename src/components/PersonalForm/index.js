import React, { PropTypes } from 'react';

function PersonalForm({ firstName, lastName, email, onInputChange }) {
  return (
      <form>
        <input  type="text"
                name="firstName"
                value={firstName}
                placeholder="First Name"
                onChange={onInputChange}
      />
        <input  type="text"
                name="lastName"
                value={lastName}
                placeholder="Last Name"
                onChange={onInputChange}
      />
        <input  type="email"
                name="email"
                value={email}
                placeholder="E mail"
                onChange={onInputChange}
      />
      </form>
    );
  }

PersonalForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  onInputChange: PropTypes.func,
}

export default PersonalForm;
