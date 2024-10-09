export default function cleanSet(set, word) {
  let result = null;
  if (word.trim() === '') {
    return '';
  }
  for (const element of set) {
    if (element.startsWith(word)) {
      const subword = element.split(word.charAt(word.length - 1), 2);
      if (result === null && subword[1] !== null) {
        result = '';
        result += subword[1];
      } else if (subword[1] !== null) {
        result += `-${subword[1]}`;
      }
    }
  }
  return result;
}
