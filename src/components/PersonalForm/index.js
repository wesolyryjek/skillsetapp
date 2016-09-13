import React, { PropTypes } from 'react';

function PersonalForm({firstName, lastName, email}) {
  return (
    <form>
      <input  type="text"
              name="firstName"
              value={firstName}
              placeholder="First Name"
    />
      <input  type="text"
              name="lastName"
              value={lastName}
              placeholder="Last Name"
    />
      <input  type="email"
              name="email"
              value={email}
              placeholder="E mail"
    />
    </form>
  );
}
PersonalForm.PropTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
}
export default PersonalForm;
