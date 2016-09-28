import React, { PropTypes } from 'react';

function PersonalSkills({ addSkill, onInputChange }) {
  return (
    <div>
      <form>
        <input  type="text"
                name="addSkill"
                placeholder="Add Skill"
                onChange={onInputChange}
        />
      </form>
        <button onClick={addSkill} />
      </div>
    );
  }

PersonalSkills.propTypes = {
  addSkill: PropTypes.func,
  onInputChange: PropTypes.func,
}

export default PersonalSkills;
