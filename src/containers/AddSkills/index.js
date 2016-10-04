import React, { Component, PropTypes } from 'react';
import store from '../../store';
import { connect } from 'react-redux';
import { addSkill } from '../../actions/personalSkillsAction';
import SkillItem from '../../components/SkillItem';
import { personalSkillsAddSkillSelector } from '../../selectors/personalSkillsSelectors';

import PersonalSkills from '../../components/PersonalSkills';

class AddSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: ''};
  }

  _onInputChange = ({target: { value }}) => {
    value.length < 40 && this.setState({inputValue: value})
  }
  _handleAddSkill = () => {
    this.state.inputValue.length > 1 && 
    store.dispatch(addSkill({name: this.state.inputValue, level: 4}));
    this.setState({inputValue:''});
  }
  render() {
    const { skills } = this.props;
    return (
      <div>
        <PersonalSkills
          onInputChange={this._onInputChange}
          addSkill={this._handleAddSkill}
          value={this.state.inputValue}
        />
        { skills && skills.map(({ name, level }, index) => {
          return <SkillItem key={index} name={name} level={level} />
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
