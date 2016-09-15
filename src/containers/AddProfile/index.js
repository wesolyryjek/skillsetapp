import React, { Component } from 'react';

import PersonalForm from '../../components/PersonalForm';
import ImagePicker from '../../components/ImagePicker';

class AddProfile extends Component {
  render() {
    return (
      <div>
        <PersonalForm />
        <ImagePicker />
      </div>
    );
  }
}

export default AddProfile;
