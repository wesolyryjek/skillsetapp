import React, { PropTypes } from 'react';
import Button from '../../components/Button';
import star from '../../img/star.svg';
import starFilled from '../../img/star1.svg';
import styles from './styles.css';

function PersonalSkills({ addSkill, onInputChange, onChangeLevel, level, id, value }) {
  return (
    <div>
      <form>
        <input  type="text"
                name="addSkill"
                placeholder="Add Skill"
                onChange={onInputChange}
                value={value}
        />
      </form>

      <div className="starContainer">
        {[...new Array(5)].map((_, index)=>
          <img  onClick={()=> onChangeLevel(id, index)}
                className="star"
                key={index}
                src={index < level ? starFilled:star} /> )}
      </div>

      <Button onClick={addSkill} > ADD </Button>
    </div>
  );
}

PersonalSkills.propTypes = {
  addSkill: PropTypes.func,
  onInputChange: PropTypes.func,
  value: PropTypes.string,
  level: PropTypes.number,
  onChangeLevel: PropTypes.func,
  id: PropTypes.number,
}

export default PersonalSkills;
