import React, { Component } from 'react';

import './styles.css';

class ImagePicker extends Component {

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    let url = '';
    reader.onloadend = () => {
      url = reader.result
    }

    reader.readAsDataURL(file);
  }
  render() {
    return (
      <div className="container">
        <input type="file" name="myImage" accept="image/x-png, image/gif, image/jpeg" className="input" onChange={(e)=>this._handleImageChange(e)}/>
        <div className="imgPreview">
        </div>
      </div>
    );
  }
}

export default ImagePicker;
