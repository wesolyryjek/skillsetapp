import React, { PropTypes } from 'react';
import star from '../../img/star.svg';
import starFilled from '../../img/star1.svg';
import styles from './styles.css';
import cx from 'classnames';

function SkillItem({ name, level }) {
  return (
    <div className="skillsContainer">
      <div className="nameContainer">
        <p> {name} </p>
      </div>
      <div className="starContainer">
        {[...new Array(5)].map((_, index)=> <object type="image/svg+xml" className="star" key={index} data={index < level ? starFilled:star} /> )}
      </div>
    </div>
  );
}

SkillItem.propTypes = {
  name: PropTypes.string,
  level: PropTypes.number,
}


export default SkillItem;
