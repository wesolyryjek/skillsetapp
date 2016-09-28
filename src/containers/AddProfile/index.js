import React, { Component, PropTypes } from 'react';
import store from '../../store';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { updatePersonalFormField, updatePersonalFormPhoto } from '../../actions/personalFormField';

import PersonalForm from '../../components/PersonalForm';
import ImagePicker from '../../components/ImagePicker';
import Button from '../../components/Button';

import { personalFormFirstNameSelector,
         personalFormLastNameSelector,
         personalFormEmailSelector,
         personalFormPhotoSrcSelector,
         personalFormTelephoneSelector} from '../../selectors/personalFormSelectors';
import photo from '../../img/photo.png';

class AddProfile extends Component {
  _onInputChange = ({target: { name, value }}) => {
    store.dispatch(updatePersonalFormField({name, value}));
  }
  _handleImageChange(e) {
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = () => {
      store.dispatch(updatePersonalFormPhoto(reader.result));
    }
    file && reader.readAsDataURL(file);
    }
  _goToExperience = () => {
    store.dispatch(push('/addskills'));
  }
  render() {
    const { firstName, lastName, email, telephone, photoSrc } = this.props;
    return (
      <div>
        <PersonalForm
          onInputChange={this._onInputChange}
          firstName={firstName}
          lastName={lastName}
          email={email}
          telephone={telephone}
        />
        <ImagePicker
          handleImageChange={this._handleImageChange}
          photoSrc={photoSrc}
        />
        <div>
          <img src={photo} />
        </div>
        <Button onClick={this._goToExperience}> SUMBIT </Button>
      </div>
    );
  }
}

AddProfile.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  photoSrc: PropTypes.string,
  telephone: PropTypes.string,
}

export default connect(
  (state) => ({
    firstName: personalFormFirstNameSelector(state),
    lastName: personalFormLastNameSelector(state),
    email: personalFormEmailSelector(state),
    photoSrc: personalFormPhotoSrcSelector(state),
    telephone: personalFormTelephoneSelector(state),
  }))(AddProfile);
