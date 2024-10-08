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
  const newList = [];
  array.forEach((student) => {
    const studentId = student.id;
    const city_ = student.location;
    const dummyObj = student;
    if (city_ === city) {
      let actionPerformed = false;
      newGrades.forEach((grade) => {
        if (grade.studentId === studentId) {
          dummyObj.grade = grade.grade;
          actionPerformed = true;
        }
      });
      if (!actionPerformed) {
        dummyObj.grade = 'N/A';
      }
      newList.push(dummyObj);
    }
  });
  return newList;
}
