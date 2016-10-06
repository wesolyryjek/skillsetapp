import React, { PropTypes } from 'react';
import styles from './styles.css';
import cx from 'classnames';
import Button from '../../components/Button';

function SkillItem({ name, id, onDelete, level }) {
  return (
    <div className="skillsContainer">
      <div className="nameContainer">
        <p> {name} </p>
        <p> {level} </p>
        <Button onClick={()=> onDelete(id)}> Delete </Button>
      </div>
    </div>
  );
}

SkillItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  onDelete: PropTypes.func,
  level: PropTypes.number,
}


export default SkillItem;
