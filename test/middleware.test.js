import { Story } from 'inkjs';
import inkMiddleware from '../src/middleware';
import {
  next as storyNext,
  choose,
  story
} from '../src/action';

describe('inkMiddleware', () => {
  let dispatch, next, inkStory;

  beforeEach(() => {
    inkStory = new Story(require('./tests.json'));
    next = jest.fn();
    dispatch = inkMiddleware(require('./tests.json'))()(next);
  });

  it('dispatch story actions', () => {
    dispatch(storyNext());
    expect(next).lastCalledWith(story(inkStory.Continue(), true, null));

    dispatch(storyNext());
    expect(next).lastCalledWith(story(null, false, inkStory.currentChoices));

    dispatch(choose(0));
    inkStory.ChooseChoiceIndex(0);
    expect(next).lastCalledWith(story(inkStory.Continue(), true, null));
  });

  it('ignores other actions', () => {
    dispatch({ type: 'FOO' });
    expect(next).toBeCalled();
    expect(next).lastCalledWith({ type: 'FOO' });
  });
});
