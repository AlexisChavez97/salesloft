const ACCEPTED_DISTANCE = 2;

export const countCharacters = (people) => {
  const lettersTable = {}
  const allLetters = people.map(person => person.email_address).join('').split('')

  allLetters.forEach(letter => lettersTable[letter] = (lettersTable[letter] || 0) + 1)

  const entries = Object.entries(lettersTable);
  const sorted = entries.sort((a, b) => b[1] - a[1]);

  return sorted
};

export const findPossibleDuplicates = (data, similars = []) => {
  const emailsBySize = calculateEmailsBySize(data)
  const emailsSizes = Object.keys(emailsBySize).map(size => parseInt(size));

  emailsSizes.forEach(size => {
    const emailsWithSimilarSize = concatSimilarSizeEmails(size, emailsBySize)
    const similarsFound = findSimilars(emailsWithSimilarSize)
    if(Object.keys(similarsFound).length > 0){
      similars.push(similarsFound)
    }
  })
  return [].concat(...similars)
};

const calculateEmailsBySize = (data) => {
  let emailsSize = {}
  data.forEach(person => {
    const email = person.email_address
    emailsSize[email.length] = (emailsSize[email.length] || []).concat(email)
  });
  return emailsSize;
};

const areTwoStringsSimilar = (str1, str2, strikes = 0) => {
  for (let i = 0; i < str1.length; i++) {
    if(strikes > ACCEPTED_DISTANCE)
      break;

    if(str1[i] !== str2[i] && str1[i] !== str2[i-1] && str1[i] !== str2[i+1])
      strikes++
  }
  return strikes <= ACCEPTED_DISTANCE
};

const areTwoEmailsSimilar = (firstEmail, secondEmail) => {
  const [firstEmailUser, firstEmailDomain] = firstEmail.split('@');
  const [secondEmailUser, secondEmailDomain] = secondEmail.split('@');

  return areTwoStringsSimilar(firstEmailUser, secondEmailUser) && areTwoStringsSimilar(firstEmailDomain, secondEmailDomain)
};

const compareToRemainingEmails = (email, remainingEmails) => {
  let results = {email: email, duplicates: []}
  remainingEmails.forEach(notReviewedEmail => {
    if(areTwoEmailsSimilar(email, notReviewedEmail))
      results.duplicates.push(notReviewedEmail)
  })
  return results;
};

const findSimilars = (emails) => {
  let results = []

  emails.forEach(email => {
    const matches = compareToRemainingEmails(email, emails = emails.slice(1))
    const didFoundMatch = matches.duplicates.length > 0

    if(didFoundMatch)
      results.push(matches)
  })

  return results
};

const concatSimilarSizeEmails = (size, emailsBySize) => {
  const emailsWith1MoreLetter = emailsBySize[size + 1] || []
  return emailsBySize[size].concat(emailsWith1MoreLetter)
};
