const { MongoClient } = require ('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017/nodemongo')

client.connect()
    .then(()=> {
        var dbo = client.db('nodemongo')
        var myquery = {address: 'Valley 345'}
        var newValues = {$set: {name:"Mickey", address :"Canyon 123"}}
        dbo.collection("customers").updateOne(myquery, newValues).then(function(){
            console.log("1 document updated")
            client.close()
        })
    })
    .catch(error => console.log('Failed to connect',error))