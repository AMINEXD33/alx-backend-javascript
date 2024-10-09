export default function cleanSet(set, startString) {
  let result = "";
  if (!set || !startString || typeof startString !== 'string') {
    return '';
  }
  if (startString.trim() === '') {
    return '';
  }
  for (const element of set) {
    if (typeof element === 'string') {
      if (element.startsWith(startString)) {
        const substartString = element.split(startString.charAt(startString.length - 1), 2);
        if (result === "" && substartString[1] !== null) {
          result = '';
          result += substartString[1];
        } else if (substartString[1] !== null) {
          result += `-${substartString[1]}`;
        }
      }
    }
  }
  return result;
}
