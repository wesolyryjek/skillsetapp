<<<<<<< HEAD
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import { updatePersonalFormField } from '../../actions/personalFormField';

class PersonalForm extends Component {


  _onInputChange = ({target: { name, value }}) => {
    store.dispatch(updatePersonalFormField({name, value}));
  }


  render () {
    const {firstName, lastName, email} = this.props;
    return (
      <form>
        <input  type="text"
                name="firstName"
                value={firstName}
                placeholder="First Name"
                onChange={this._onInputChange}
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
}
PersonalForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
}
export default connect(
  (state) => ({
    firstName: state.personalFormField.firstName,
    lastName: state.personalFormField.lastName,
    email: state.personalFormField.email,
  })
)(PersonalForm);
