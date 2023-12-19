const students = [
    { name: 'John', score: 85 },
    { name: 'Sarah', score: 96 },
    { name: 'Michael', score: 88 },
    { name: 'Emma', score: 91 },
    { name: 'Daniel', score: 90 },
];

// we need 90+ scorer names
const toppers = students.filter(ele => ele.score > 90).map(ele => ele.name)

console.log(toppers)