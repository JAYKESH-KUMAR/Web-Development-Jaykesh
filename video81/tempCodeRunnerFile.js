// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("Cruddb");

// Find a document in a collection.
db.createCollection("courses")

db.courses.insertOne({
    name: "Harrys web dev free course",
    price:0,
    assignments :12,
    projects:45

});
db.courses.insertMany([
    {
        name: "Harrys web dev free course",
        price:0,
        assignments :12,
        projects:45
    },

