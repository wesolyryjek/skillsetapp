import React, { Component, PropTypes } from 'react';
import store from '../../store';
import { connect } from 'react-redux';
import { addSkill } from '../../actions/personalSkillsAction';
import { personalSkillsAddSkillSelector } from '../../selectors/personalSkillsSelectors';

import PersonalSkills from '../../components/PersonalSkills';

class AddSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: ''};
  }

  _onInputChange = ({target: { name, value }}) => {
    this.setState({inputValue: value})
  }
  _handleAddSkill = () => {
    store.dispatch(addSkill({name: this.state.inputValue, level: 0}));
  }
  render() {
    const { skills } = this.props;
    return (
      <div>
        <PersonalSkills
          onInputChange={this._onInputChange}
          addSkill={this._handleAddSkill}
        />
        { skills && skills.map((item, index) => {
          return <div key={index}>{item.name}</div>
        })}
      </div>
    );
  }
}

AddSkills.propTypes = {
  skills: PropTypes.any,
}

export default connect(
  (state) => ({
    skills: personalSkillsAddSkillSelector(state),
}))(AddSkills);
