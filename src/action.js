export const STORY = `@@ink/STORY`;
export const NEXT = `@@ink/NEXT`;
export const CHOOSE = `@@ink/CHOOSE`;

export const story = (text, canContinue, choices) => ({
  type: STORY,
  payload: {
    text,
    canContinue,
    choices,
  }
});

export const next = () => ({
  type: NEXT
});

export const choose = choiceIndex => ({
  type: CHOOSE,
  payload: { choiceIndex }
});

