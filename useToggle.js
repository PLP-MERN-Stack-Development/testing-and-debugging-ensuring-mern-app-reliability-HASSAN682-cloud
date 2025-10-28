import { useState } from 'react';
export const useToggle = () => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn((prev) => !prev);
  return [on, toggle];
};

// client/src/hooks/__tests__/useToggle.test.js
import { renderHook, act } from '@testing-library/react';

import { useToggle } from '../useToggle';

test('toggles boolean state', () => {
  const { result } = renderHook(() => useToggle());
  expect(result.current[0]).toBe(false);
  act(() => result.current[1]());
  expect(result.current[0]).toBe(true);
});