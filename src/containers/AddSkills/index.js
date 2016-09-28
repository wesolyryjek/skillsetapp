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
    store.dispatch(addSkill(this.state.inputValue, 0}));
    console.log(store.getState());
  }
  render() {
    const { addSkill } = this.props;
    return (
      <div>
        <PersonalSkills
          onInputChange={this._onInputChange}
          addSkill={this._handleAddSkill}
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
