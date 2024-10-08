export default function updateStudentGradeByCity(
  array,
  city,
  newGrades,
) {
  if (!Array.isArray(array)) {
    return [];
  }
  if (!Array.isArray(newGrades)) {
    return array;
  }
  const result = [];
  const sameCity = array.filter((student) => {
    if (student.location === city) {
      return student;
    }
    return false;
  });
  sameCity.map((student) => {
    let actionPerformed = false;
    const dummy = student;
    newGrades.map((newGrade) => {
      if (student.id === newGrade.studentId) {
        actionPerformed = true;
        dummy.grade = newGrade.grade;
        result.push(dummy);
      }
      return false;
    });
    if (!actionPerformed) {
      dummy.grade = 'N/A';
      result.push(dummy);
    }
    return false;
  });
  return result;
}
