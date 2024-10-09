export default function cleanSet(set, startString) {
  if (!set || !startString || typeof startString !== 'string') {
    return '';
  }
  if (startString.trim() === '') {
    return '';
  }

  let result = '';
  for (const element of set) {
    if (typeof element === 'string' && element.startsWith(startString)) {
      const substring = element.slice(startString.length);
      if (substring) {
        if (result) {
          result += `-${substring}`;
        } else {
          result = substring;
        }
      }
    }
  }

  return result;
}
