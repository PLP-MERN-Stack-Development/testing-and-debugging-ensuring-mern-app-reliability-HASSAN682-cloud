export const setUser = (user) => ({ type: 'SET_USER', payload: user });

// client/src/store/__tests__/userActions.test.js
import { setUser } from '../actions/userActions';

test('creates SET_USER action', () => {
  expect(setUser({ name: 'Hassan' })).toEqual({
    type: 'SET_USER',
    payload: { name: 'Hassan' },
  });
});