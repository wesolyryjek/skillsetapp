import React, { Component, PropTypes } from 'react';
import store from '../../store';
import { connect } from 'react-redux';
import { updatePersonalFormField, updatePersonalFormPhoto } from '../../actions/personalFormField';
import PersonalForm from '../../components/PersonalForm';
import ImagePicker from '../../components/ImagePicker';
import { personalFormFirstNameSelector, personalFormLastNameSelector, personalFormEmailSelector, personalFormPhotoSrcSelector} from '../../selectors/personalFormSelectors';

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
  render() {
    const { firstName, lastName, email, photoSrc } = this.props;
    return (
      <div>
        <PersonalForm
          onInputChange={this._onInputChange}
          firstName={firstName}
          lastName={lastName}
          email={email}
        />
        <ImagePicker
          handleImageChange={this._handleImageChange}
          photoSrc={photoSrc}
        />
      </div>
    );
  }
}

AddProfile.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  photoSrc: PropTypes.string,
}

export default connect(
  (state) => ({
    firstName: personalFormFirstNameSelector(state),
    lastName: personalFormLastNameSelector(state),
    email: personalFormEmailSelector(state),
    photoSrc: personalFormPhotoSrcSelector(state),
  }))(AddProfile);
