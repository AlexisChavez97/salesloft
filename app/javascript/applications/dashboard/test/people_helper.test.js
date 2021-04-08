import { countCharacters, findPossibleDuplicates } from '../people_helper'

const people = [
  { email_address: 'alexis@gmail.com' },
  { email_address: 'alexis@hotmail.com' },
  { email_address: 'alexi@gmail.com' }
]

const expectedResultFrequency = [
  ['a', 6], ['i', 6], ['l', 6], ['m', 6], ['o', 4], ['e', 3], ['x', 3], ['@', 3], ['.', 3], ['c', 3], ['g', 2], ['s', 2], ['h', 1], ['t', 1]
]

const expectedResultDuplicates = [
  {"duplicates": ["alexis@gmail.com"], "email": "alexi@gmail.com"}
]

test('returns characters and frequency', () => {
  expect(countCharacters(people)).toStrictEqual(expectedResultFrequency);
});

test('returns emails possible duplicates', () => {
  expect(findPossibleDuplicates(people)).toStrictEqual(expectedResultDuplicates);
});