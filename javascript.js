// for (let count = 1; count <= 100; count++) {

//     console.log(count++  + " Prasanna");
//     console.log(count + " Balaji");
// }


// JSON JavaScript Object Notation
//Given a array of student objects
// 0. Find a student whose name is Aravind.
// 1. Find the eldest student
// 2. Find the students whose physics score is more than 80
// 3. Count the number of students whose total average is more than 70.
let array_student_obj = [{
    name: "Aravind",
    age: 19,
    salary: 10000,
    marks: {
        maths: 80,
        physics: 78,
        chemistry: 90
    }
},
{
    name: "Parameshwari",
    age: 18,
    salary: 10000,
    marks: {
        maths: 95,
        physics: 95,
        chemistry: 89
    }
},
{
    name: "Barath",
    age: 21,
    salary: 10000,
    marks: {
        maths: 76,
        physics: 81,
        chemistry: 76
    }
}, 
{
    name: "Saran",
    age: 22,
    salary: 10000,
    marks: {
        maths: 67,
        physics: 51,
        chemistry: 39
    }
},
{
    name: "Mohan",
    age: 22,
    salary: 10000,
    marks: {
        maths: 67,
        physics: 85,
        chemistry: 39
    }
},
{
    name: "Raman",
    age: 22,
    salary: 10000,
    marks: {
        maths: 67,
        physics: 71,
        chemistry: 39
    }
},
{
    name: "sundar",
    age: 22,
    salary: 10000,
    marks: {
        maths: 67,
        physics: 80,
        chemistry: 39
    }
}
];
// First sum anwers
// console.log(array_student_obj[0].name);

// // Second sum answers
// console.log(array_student_obj[3]);
// Third sum anwerss
// for (i = 0; i < array_student_obj.length; i++) {
//     if (array_student_obj[i].marks.physics > 80) {
//         console.log(array_student_obj[i].name);
//     }
// }
// fourth sum anwers
// for (i = 0; i < array_student_obj.length; i++) {
//     let maths = array_student_obj[i].marks.maths;
//     let physics = array_student_obj[i].marks.physics;
//     let chemistry = array_student_obj[i].marks.chemistry;
//     let total = maths + chemistry + physics;
//     if (total / 3 > 70) {
//         console.log(i);
//     }
//     else {
//         console.log("you give a wrong instruction");
//     }
// }