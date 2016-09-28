import React, { PropTypes } from 'react';

function PersonalSkills({ addSkill, onInputChange }) {
  return (
      <form>
        <input  type="text"
                name="addSkill"
                value={addSkill}
                placeholder="Add Skill"
                onChange={onInputChange}
      />
      </form>
    );
  }

PersonalSkills.propTypes = {
  addSkill: PropTypes.string,
  onInputChange: PropTypes.func,
}

export default PersonalSkills;
