import React, { PropTypes } from 'react';
import star from '../../img/star.svg';
import starFilled from '../../img/star1.svg';
import styles from './styles.css';
import cx from 'classnames';
import Button from '../../components/Button';

function SkillItem({ name, level, onChangeLevel, id, onDelete }) {
  return (
    <div className="skillsContainer">
      <div className="nameContainer">
        <p> {name} </p>
        <Button onClick={()=> onDelete(id)}> Delete </Button>
      </div>
      <div className="starContainer">
        {[...new Array(5)].map((_, index)=> <img onClick={()=> onChangeLevel(id, index)} className="star" key={index} src={index < level ? starFilled:star} /> )}
      </div>
    </div>
  );
}

SkillItem.propTypes = {
  name: PropTypes.string,
  level: PropTypes.number,
  onChangeLevel: PropTypes.func,
  id: PropTypes.number,
  onDelete: PropTypes.func,
}


export default SkillItem;
