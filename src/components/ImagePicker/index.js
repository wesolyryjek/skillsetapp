import React, { PropTypes } from 'react';

import './styles.css';

function ImagePicker({ handleImageChange, photoSrc }) {
    return (
      <div className="container">
        <input type="file" name="myImage" accept="image/x-png, image/gif, image/jpeg" className="input" onChange={(e)=>handleImageChange(e)}/>
        <div className="imgPreview">
          <img src={photoSrc} />
        </div>
      </div>
    );
}


export default ImagePicker;

ImagePicker.propTypes = {
  handleImageChange: PropTypes.func,
  photoSrc: PropTypes.string,
}
