const students = [
    { name: 'John', score: 85 },
    { name: 'Sarah', score: 96 },
    { name: 'Michael', score: 88 },
    { name: 'Emma', score: 91 },
    { name: 'Daniel', score: 90 },
];

// we need avg of 90+ scorers
const filteredMarks = students.map(ele => ele.score).filter(ele => ele > 90)

// just to seprate filter and avg process
const avg = filteredMarks.length > 0 ? filteredMarks.reduce((acc, score) => acc + score, 0) / filteredMarks.length : 0;

console.log(avg)