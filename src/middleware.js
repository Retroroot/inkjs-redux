import { Story } from 'inkjs';
import {
  story,
  NEXT,
  CHOOSE,
} from './action';

function continueStory (inkStory) {
  if (inkStory.canContinue) {
    return story(inkStory.Continue(), true, null);
  }
  return story(null, false, inkStory.currentChoices);
}

export default function inkMiddleware(inkAssets) {
  const inkStory = new Story(inkAssets);
  return () => next => action => {
    const actionType = action.type;
    if (actionType === CHOOSE) {
      inkStory.ChooseChoiceIndex(action.payload.choiceIndex);
      return next(continueStory(inkStory));
    }
    if (actionType === NEXT) {
      return next(continueStory(inkStory));
    }
    return next(action);
  }
}
