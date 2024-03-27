// Lab2

use ITI

//  Display all documents in instructors collection
db.instructors.find({})

// Display all instructors with salaries greater than 4000 (only show firstName and salary)

db.instructors.find({salary:{$gt:4000}} , {_id:0 , firstName:1,salary:1})

// Display all instructors with ages less than or equal 25.

db.instructors.find({age:{$lte:25}})

// Display all instructors with city mansoura and sreet number 10 or 14 only display (firstname,address,salary).

db.instructors.find({$and:[{'address.city':'mansoura'},{'address.street':{$in:[10,14]}}]},{_id:0,firstName:1,address:1,salary:1})


//Display all instructors who have js and jquery in their courses (both of them not one of them).

db.instructors.find({courses:{$all:['js','jquery']}})


// Display number of courses for each instructor and display first name with number of courses.

db.instructors.find().forEach(instructor => {
   const count = instructor.courses.length;
    print(instructor.firstName + " " + count); 
});

//another solution for same question
db.instructors.find().forEach(instructor => {
    let count=0;
    instructor.courses.forEach(course=>{
        count++;
    })
    print(instructor.firstName + " " + count); 
});



/*
Write mongodb query to get all instructors that have firstName and 
lastName properties , sort them by firstName ascending then by 
lastName descending and finally display their data FullName and age 
*/

db.instructors.find({
    firstName:{$exists:true},
    lastName:{$exists:true}
})
.sort({firstName: 1, lastName: -1 })
.forEach(instructor=>{
    const fullName=instructor.firstName+" "+instructor.lastName;
   
    print('FullName : '+fullName + ', ', "Age : " + instructor.age)
})

// Find all instructors that have fullName that contains “mohammed”.

db.instructors.find({
    $or: [
        { firstName: { $regex: /mohammed/i } },
        { lastName: { $regex: /mohammed/i } }
    ]
})

//Delete instructor with first name “ebtesam” and has only 5 courses in courses array

db.instructors.remove({
    firstName:"ebtesam",
    courses:{$size:5}
})

// Add active property to all instructors and set its value to true.

db.instructors.updateMany({},{$set:{'active':true}})


// Change “EF” course to “jquery” for “mazen mohammed” instructor (without knowing EF Index)

db.instructors.update(
    { firstName: "mazen", lastName: "mohammed", courses: 'EF' },
    { $set: { "courses.$": "jquery" } }
)


//Add jquery course for “noha hesham”.

db.instructors.update(
    { firstName: "noha", lastName: "hesham" },
    { $addToSet: { courses: "jquery" } } 
)

// Remove courses property for “ahmed mohammed ” instructor

db.instructors.update({
    firstName: "ahmed", lastName: "mohammed"
},
{$unset:{courses:''}}
)


//Decrease salary by 500 for all instructors that has only 3 courses in their list ($inc)

db.instructors.updateMany(
    { 
        courses:{ $size :3}
    },
    {
        $inc:{salary:-500}
    }
)

db.instructors.find()

// Rename address field for all instructors to fullAddress.

db.instructors.update({},{
    $rename:{'address':"fullAddress"}
})


// Change street number for noha hesham to 20

db.instructors.updateOne({
    firstName:'noha',lastName:'hesham'
},{
    $set:{'fullAddress.street':20}
})



