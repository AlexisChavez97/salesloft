export const countCharacters = (people) => {
  const lettersTable = {}
  const allLetters = people.map(person => person.email_address).join('').split('')

  allLetters.forEach(letter => lettersTable[letter] = (lettersTable[letter] || 0) + 1)

  const entries = Object.entries(lettersTable);
  const sorted = entries.sort((a, b) => b[1] - a[1]);

  return sorted
}
