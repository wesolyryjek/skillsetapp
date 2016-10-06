export const ADD_SKILL = 'PersonalSkills/ADD_SKILL';
export const CHANGE_SKILL_LEVEL = 'PersonalSkills/CHANGE_SKILL_LEVEL';

export function addSkill (payloads){
  return {
    type: ADD_SKILL,
    payloads
  };
};

export function changeSkillLevel (index, level){
  return {
    type: CHANGE_SKILL_LEVEL,
    index,
    level,
  }
}
