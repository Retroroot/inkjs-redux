import {
  STORY,
  NEXT,
  CHOOSE,
  story,
  next,
  choose,
} from '../src/action';

describe('actions', () => {
  describe('story', () => {
    it('creates actions', () => {
      expect(story('text', true, null)).toEqual({
        type: STORY,
        payload: {
          text: 'text',
          canContinue: true,
          choices: null
        }
      });
    });
  });

  describe('next', () => {
    it('creates actions', () => {
      expect(next()).toEqual({
        type: NEXT
      });
    });
  });

  describe('choose', () => {
    it('creates actions', () => {
      expect(choose(1)).toEqual({
        type: CHOOSE,
        payload: { choiceIndex: 1 }
      })
    });
  });
});
