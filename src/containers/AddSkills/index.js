import React, { Component, PropTypes } from 'react';
import store from '../../store';
import { connect } from 'react-redux';
import { addSkill } from '../../actions/personalSkillsAction';
import { personalSkillsAddSkillSelector } from '../../selectors/personalSkillsSelectors';

import PersonalSkills from '../../components/PersonalSkills';

class AddSkills extends Component {
  _handleSkillChange = ({target: { name, value }}) => {
    store.dispatch(addSkill({name, value}));
  }
  render() {
    const { addSkill } = this.props;
    return (
      <div>
        <PersonalSkills
          onInputChange={this._onInputChange}
          addSkill={addSkill}
        />
      </div>
    );
  }
}

AddSkills.propTypes = {
  addSkill: PropTypes.string,
}

export default connect(
  (state) => ({
    addSkill: personalSkillsAddSkillSelector(state),
}))(AddSkills);
