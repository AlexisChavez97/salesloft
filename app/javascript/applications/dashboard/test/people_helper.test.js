import { countCharacters } from '../people_helper'

const people = [
  { email_address: 'alexis@gmail.com' },
  { email_address: 'alexis@hotmail.com' }
]

const expectedResult = [
  ['a', 4], ['m', 4], ['i', 4], ['l', 4], ['o', 3], ['e', 2], ['s', 2], ['x', 2], ['.', 2], ['c', 2], ['@', 2], ['t', 1], ['h', 1], ['g', 1]
]

test('returns characters and frequency', () => {
  expect(countCharacters(people)).toStrictEqual(expectedResult);
});