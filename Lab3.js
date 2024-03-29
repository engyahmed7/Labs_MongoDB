use FacultySystemV2;

let courses=[
    {"Course Name":"js","finalMark":69.95},
    {"Course Name":"css","finalMark":3.04},
    {"Course Name":"html","finalMark":88.11},
    {"Course Name":"c","finalMark":78.53},
    {"Course Name":"c++","finalMark":70.19},
    {"Course Name":"jquery","finalMark":62.8},
    {"Course Name":"php","finalMark":26.88},
    {"Course Name":"nodejs","finalMark":35.16},
    {"Course Name":"laravel","finalMark":99.08},
    {"Course Name":"sql","finalMark":21.8},
    {"Course Name":"mysql","finalMark":63.38},
    {"Course Name":"database","finalMark":26.89},
    {"Course Name":"aws","finalMark":97.56},
    {"Course Name":"mongodb","finalMark":65.78},
    {"Course Name":"python","finalMark":72.62}

]


let faculty=[{"Faculty Name":"Lanette Lambrechts","Address":"630 Columbus Plaza"},
{"Faculty Name":"Burgess Kuhne","Address":"921 Towne Court"},
{"Faculty Name":"Sayre De Caroli","Address":"21 Hooker Parkway"},
{"Faculty Name":"Erin Durston","Address":"415 Luster Junction"},
{"Faculty Name":"Dorie Ankrett","Address":"7 Bayside Avenue"},
{"Faculty Name":"Fred Howles","Address":"89 Prentice Terrace"},
{"Faculty Name":"Ruthie Sleany","Address":"627 Rigney Pass"},
{"Faculty Name":"Merrill Fannin","Address":"7966 Emmet Street"},
{"Faculty Name":"Brit Pactat","Address":"770 Autumn Leaf Street"},
{"Faculty Name":"Benjie Eakin","Address":"428 Messerschmidt Avenue"},
{"Faculty Name":"Shelli Honacker","Address":"5 Nevada Place"},
{"Faculty Name":"Romeo Meadows","Address":"81380 Eliot Lane"},
{"Faculty Name":"Ozzy Briiginshaw","Address":"4488 Montana Trail"},
{"Faculty Name":"Davin Ghilardini","Address":"7 Hudson Avenue"},
{"Faculty Name":"Herold Talks","Address":"7420 Loomis Court"}]



db.createCollection('faculty',{
    validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["Faculty Name", "Address"],
          properties: {
            "Faculty Name": { bsonType: "string" },
            Address: { bsonType: "string" }
          }
        }
  }
})


db.createCollection('courses',{
    validator:{
        $jsonSchema:{
           bsonType: "object",
           required: ["Course Name", "finalMark"],
           properties:{
               "Course Name":{bsonType:"string"},
               "Final Mark":{bsonType:"double"}
           }
        }
    }

})

let coursesIds=db.courses.find().toArray();
let facultyIds=db.faculty.find().toArray();

let studentData = [
    {"FirstName":"Kale","LastName":"Deveraux","IsFired":false,"courses":[{"CourseID":coursesIds[0]._id,"grade":1.26}],"facultyId":facultyIds[0]._id},
    {"FirstName":"Dorine","LastName":"Hulburd","IsFired":true,"courses":[{"CourseID":coursesIds[1]._id,"grade":2.45},{"CourseID":coursesIds[4]._id,"grade":16.77}],"facultyId":facultyIds[1]._id},
    {"FirstName":"Karena","LastName":"Cure","IsFired":true,"courses":[{"CourseID":coursesIds[2]._id,"grade":0.9},{"CourseID":coursesIds[4]._id,"grade":27.21}],"facultyId":facultyIds[0]._id},
    {"FirstName":"Edan","LastName":"Gottschalk","IsFired":false,"courses":[{"CourseID":coursesIds[5]._id,"grade":77.84}],"facultyId":facultyIds[3]._id},
    {"FirstName":"Codi","LastName":"Ahmad","IsFired":false,"courses":[{"CourseID":coursesIds[1]._id,"grade":8.29},{"CourseID":coursesIds[6]._id,"grade":80.74},{"CourseID":coursesIds[3]._id,"grade":65.73}],"facultyId":facultyIds[2]._id},
    {"FirstName":"Ana","LastName":"Sakins","IsFired":true,"courses":[{"CourseID":coursesIds[3]._id,"grade":79.84},{"CourseID":coursesIds[5]._id,"grade":45.93}],"facultyId":facultyIds[1]._id},
    {"FirstName":"Caldwell","LastName":"Castelyn","IsFired":true,"courses":[{"CourseID":coursesIds[2]._id,"grade":79.7}],"facultyId":facultyIds[2]._id},
    {"FirstName":"Georgeanne","LastName":"Isbell","IsFired":false,"courses":[{"CourseID":coursesIds[1]._id,"grade":85.74}],"facultyId":facultyIds[1]._id},
    {"FirstName":"Saundra","LastName":"Norcliffe","IsFired":false,"courses":[{"CourseID":coursesIds[4]._id,"grade":37.16},{"CourseID":coursesIds[0]._id,"grade":13.71},{"CourseID":coursesIds[1]._id,"grade":48.14}],"facultyId":facultyIds[5]._id},
    {"FirstName":"Efrem","LastName":"Talby","IsFired":false,"courses":[{"CourseID":coursesIds[2]._id,"grade":20.39},{"CourseID":coursesIds[0]._id,"grade":17.4}],"facultyId":facultyIds[3]._id},
    {"FirstName":"Carlynn","LastName":"Whitrod","IsFired":false,"courses":[{"CourseID":coursesIds[8]._id,"grade":29.91}],"facultyId":facultyIds[1]._id},
    {"FirstName":"Pete","LastName":"Cathery","IsFired":true,"courses":[{"CourseID":coursesIds[7]._id,"grade":89.15},{"CourseID":coursesIds[0]._id,"grade":85.31},{"CourseID":coursesIds[8]._id,"grade":83.01}],"facultyId":facultyIds[0]._id},
    {"FirstName":"Jessie","LastName":"Kembery","IsFired":false,"courses":[{"CourseID":coursesIds[6]._id,"grade":16.08},{"CourseID":coursesIds[2]._id,"grade":75.42}],"facultyId":facultyIds[4]._id},
    {"FirstName":"Eda","LastName":"Cescotti","IsFired":false,"courses":[{"CourseID":coursesIds[0]._id,"grade":94.16}],"facultyId":facultyIds[0]._id},
    {"FirstName":"Kary","LastName":"O'Brien","IsFired":true,"courses":[{"CourseID":coursesIds[3]._id,"grade":52.39},{"CourseID":coursesIds[6]._id,"grade":32.85},{"CourseID":coursesIds[7]._id,"grade":39.32}],"facultyId":facultyIds[4]._id}

]


db.createCollection('students',{
    validator:{
        $jsonSchema:{
           bsonType: "object",
           required: ["FirstName", "LastName", "IsFired", "courses", "facultyId"],
           properties:{
               firstName:{bsonType:"string"},
               lastName:{bsonType:"string"},
               IsFired: { bsonType: "bool" },
                courses: {
                     bsonType: "array",
                     items: {
                          bsonType: "object",
                          required: ["CourseID", "grade"],
                          properties: {
                            CourseID: { bsonType: "objectId" },
                            grade: { bsonType: "double" }
                          }
                     }
                },
                facultyId: { bsonType: "objectId" },
           }
        }
    }
})


db.students.insertMany(studentData)
db.courses.insertMany(courses)
db.faculty.insertMany(faculty)



// Display each student Full Name along with his average grade in all courses. $concat
db.students.aggregate([
    {
        $project:{
            _id:0,
            FullName:{$concat:["$FirstName"," ","$LastName"]},
            avgGrade:{$avg:"$courses.grade"}
        }
    }
])

// Using aggregation display the sum of final mark for all courses in Course collection.

db.courses.aggregate([
    {
        $group:{
            _id:null,
            total:{$sum:"$finalMark"}
        }
        
    },{
        $project:{
            _id:0
        }
    }
])


/*
Implement (one to many) relation between Student and Course, by adding array of Courses IDs in the student object. 
    • Select specific student with his name, and then display his courses.
*/


let coursesArray = db.courses.find({}, { 'Course Name': 1 }).toArray();

db.students.find({FirstName:'Codi'}, { FirstName: 1, LastName: 1, courses: 1 }).forEach(stu => {
    stu.courses.forEach(course => {
        let coursee = coursesArray.find(c => c._id.equals(course.CourseID));
            print(`${stu.FirstName} ${stu.LastName}: ${coursee['Course Name']}`);
    });
});

// or

db.students.aggregate([
    {
        $match:{FirstName:"Codi"}
    },
    {
    $lookup:{
            from:"courses",
            localField:"courses.CourseID",
            foreignField:"_id",
            as:"course"
        }
   }

])


/*
Implement relation between Student and faculty by adding the faculty object in the student using _id Relation using $Lookup. 
    • Select specific student with his name, and then display his facult
*/

db.students.aggregate([
{
    $match:{FirstName:'Ana'},
},{
    $lookup:{
            from:"faculty",
            localField:"facultyId",
            foreignField:"_id",
            as:"faculty"
        }
},{
    $project:{
        courses:0
    }
}
])





















