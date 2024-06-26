# ITI MongoDB Course Labs

This repository contains Lab1, Lab2, and Lab3 files designed to help you practice MongoDB commands and queries as part of the ITI MongoDB course labs.

## Lab1

Lab1 covers basic MongoDB operations and queries.

### Instructions:

1. Create a database named "ITI".
2. Create a collection named "instructors".
3. Insert your own data into the "instructors" collection.
4. Use the provided instructors array.
5. Perform various queries and operations on the "instructors" collection.

### Lab1 Contents:

- **Create database and collection**
- **Insert documents**
- **Perform queries:**
  - Display documents with specific fields.
  - Filter documents based on specific criteria.
  - Explain query outputs.
- **Update documents**
- **Delete documents**
- **Add new fields to documents**
- **Rename fields**
- **Update nested fields**

## Lab2

Lab2 covers more advanced MongoDB operations and queries.

### Instructions:

1. Use the "ITI" database.
2. Perform various queries and operations on the "instructors" collection.

### Lab2 Contents:

- **Display all documents**
- **Perform queries:**
  - Filter documents based on specific criteria.
  - Perform aggregation operations.
  - Explain query outputs.
- **Update documents**
- **Delete documents**
- **Add new fields to documents**
- **Rename fields**

## Lab3

Lab3 introduces advanced MongoDB features such as data aggregation, data relationships, and schema validation.

### Instructions:

1. Use the provided code snippets to set up collections for faculty, courses, and students.
2. Insert sample data into the faculty, courses, and students collections.
3. Aggregate student data to display each student's full name along with their average grade in all courses.
4. Aggregate course data to display the sum of final marks for all courses.
5. Implement relationships between collections:
   - Establish a one-to-many relationship between students and courses by adding an array of course IDs to the student object.
   - Use the $lookup stage to establish a relationship between students and faculty, displaying the faculty associated with a specific student.


Feel free to explore and execute the commands in the Lab1.js, Lab2.js, and Lab3.js files to practice MongoDB commands and queries.

