import { createSelector } from 'reselect';

export const personalFormStateSelector = (state) => state.personalFormField;

export const personalFormFirstNameSelector = createSelector(personalFormStateSelector, (personalForm) => personalForm.get('firstName'));
export const personalFormLastNameSelector = createSelector(personalFormStateSelector, (personalForm) => personalForm.get('lastName'));
export const personalFormEmailSelector = createSelector(personalFormStateSelector, (personalForm) => personalForm.get('email'));
export const personalFormPhotoSrcSelector = createSelector(personalFormStateSelector, (personalForm) => personalForm.get('photoSrc'));
