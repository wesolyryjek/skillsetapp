import React, { PropTypes } from 'react';
import Button from '../../components/Button';

function PersonalSkills({ addSkill, onInputChange, value }) {
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
        <Button onClick={addSkill} > ADD </Button>
    </div>
  );
}

PersonalSkills.propTypes = {
  addSkill: PropTypes.func,
  onInputChange: PropTypes.func,
  value: PropTypes.string,
}

export default PersonalSkills;
