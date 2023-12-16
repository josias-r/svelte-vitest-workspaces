import { it, expect } from 'vitest';
import { example } from './example';

it('should pass', () => {
  expect(example()).toBe('example');
});
