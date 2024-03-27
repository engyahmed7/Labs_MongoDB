//Lab1

// Create database with name ITI
use ITI

//start create new collection named instructors 
db.createCollection("instructors")

//Insert your own data
db.instructors.insertOne({firstName:"engy",lastName:"ahmed",age:23})

db.instructors.find()

//insert instructor without firstName and LastName
db.instructors.insertOne({})

//mongo will raise an error or not ?
// ->  No mongo will not raise any error new document will inserted with _id


//Using array contained with lab folder instructors.txt file

let instructorsArray = 
[
                {_id:6,firstName:"noha",lastName:"hesham",
                age:21,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]},
                
                {_id:7,firstName:"mona",lastName:"ahmed",
                age:21,salary:3600,
                address:{city:"cairo",street:20,building:8},
                courses:["es6","mvc","signalR","expressjs"]},
                
                {_id:8,firstName:"mazen",lastName:"mohammed",
                age:21,salary:7040,
                address:{city:"Ismailia",street:10,building:8},
                courses:["asp.net","mvc","EF"]},
                
                {_id:9,firstName:"ebtesam",lastName:"hesham",
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]}
		
];
		
db.instructors.insertMany(instructorsArray);

//Display all documents for instructors collection
db.instructors.find();

// Display all instructors with fields firstName, lastName and address

db.instructors.find({},{_id:0,firstName:1,lastName:1,address:1});


//Display firstName and city(not full address) for instructors with age 21

db.instructors.find({age:21},{_id:0,firstName:1,'address.city':1})

// Display firstName and age for instructors live in Mansoura city.

db.instructors.find({'address.city':'mansoura'},{_id:0,firstName:1,age:1})

// explain output
db.instructors.find({firstName:"ryhab"},{lastName:"farouq"},{firstName:1,lastName:1})
/* the output is empty as the instructor is not found doesn't exist in instructorsArray array
also there is an syntax error it must be like this db.instructors.find({firstName:"ryhab",lastName:"farouq"},{firstName:1,lastName:1})
*/
// explain output
db.instructors.find({courses:"mvc"},{firstName:1,courses:1}) 
//The output will be instructors who have mvc course in their courses array.


