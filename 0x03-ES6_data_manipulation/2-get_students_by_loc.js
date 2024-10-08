export default function getStudentsByLocation(array, city) {
  if (!Array.isArray(array)) {
    return [];
  }
  const arr = array.filter((persone) => {
    if (persone.location === city) {
      return persone;
    }
    return false;
  });
  return arr;
}
