// CRUD create read update delete

const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const { MongoClient , ObjectID } = require('mongodb')

const id = new ObjectID ()
console.log (id)

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
//     db.collection('users').insertOne({
//         _id: id,
//         name: 'Andrew',
//         age: 27
//     })

//     db.collection('tasks').insertMany([
//  {
//  description: 'Clean the house',
//  completed: true
//  },{
//  description: 'Renew inspection',
//  completed: false
//  }
// ], (error, result) => {
//  if (error) {
//  return console.log('Unable to insert tasks!')
//  }
//  console.log(result.ops)
// })

db.collection('users').findOne({name: 'Jeff'}, (error, task) => {

    if (error) {
        return console.log('record not found')
    }

    console.log(task)

})

    
})