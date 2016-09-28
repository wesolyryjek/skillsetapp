export const ADD_SKILL = 'PersonalSkills/ADD_SKILL';

//add skill, payloads : skillId, skillName, skillLevel
export function addSkill (payloads){
  return {
    type: ADD_SKILL,
    payloads
  };
};
