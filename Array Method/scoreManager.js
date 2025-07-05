const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 42 },
    { name: "Charlie", score: 68 },
    { name: "David", score: 95 },
    { name: "Eve", score: 58 }
];

// students.push({ name: "Frank", score: 73 });

//ForEach
students.forEach((student) => console.log(student.name));

//Map
const namesOnly = students.map((student) => student.name);
console.log(namesOnly);

//Filter
const studentsWhoPassed = students.filter((student) => student.score >= 50);
console.log(studentsWhoPassed);

//Highest Score with reduce()
const studentWithHighestScore = students.reduce((highest, current) => {
    return current.score > highest.score ? current : highest;
})
console.log(studentWithHighestScore);

//Average Score with reduce()
const totalScore = students.reduce((sum, student) => sum + student.score, 0)
const averageScore = totalScore / students.length;
console.log(averageScore);

//Sort
const descendingScore = [...students].sort((a, b) => {
    return b.score - a.score;
})
console.log(descendingScore);

//Some
const failedStudents = students.some((student) => {
    return student.score < 50;
});
console.log(failedStudents);

//Every
const passedStudents = students.every((student) => {
    return student.score >= 50;
})
console.log(passedStudents);

//Find
const findStudent = students.find((student) => {
    return student.name === "Charlie";
})
console.log(findStudent);

//Top Students
function getTopStudents(students, minScore) {
    return students
        .filter(student => student.score > minScore)
        .map(student => student.name)
}
console.log(getTopStudents(students, 70));
