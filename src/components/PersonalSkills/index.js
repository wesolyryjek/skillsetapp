import React, { PropTypes } from 'react';
import Button from '../../components/Button';
import star from '../../img/star.svg';
import starFilled from '../../img/star1.svg';
import styles from './styles.css';

function PersonalSkills({ addSkill, onInputChange, value, level, onSetLevel, rate, }) {
  return (
    <div>
      <form>
        <input  type="text"
                name="addSkill"
                placeholder="Add Skill"
                onChange={onInputChange}
                value={value}
        />
      <div>
        {[...new Array(5)].map((_, index)=> <img onClick={()=> onSetLevel(index)} className="star" key={index} src={index < level ? starFilled:star} /> )}
      </div>

      </form>
        <Button onClick={addSkill} > ADD </Button>

    </div>
  );
}

PersonalSkills.propTypes = {
  addSkill: PropTypes.func,
  onInputChange: PropTypes.func,
  value: PropTypes.string,
  level: PropTypes.number,
  onSetLevel: PropTypes.func,
  id: PropTypes.number,
}

export default PersonalSkills;
