import { createSelector } from 'reselect';

export const personalSkillsStateSelector = (state) => state.personalSkillsReducer;

export const personalSkillsAddSkillSelector = createSelector(personalSkillsStateSelector, (personalSkills) => personalSkills.get('skills'));
