const { MongoClient } = require ('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017/statsdb')

client.connect()
    .then(()=> {
        //console.log('Database statsdb Created!')
        //client.close();

        var dbo = client.db('statsdb')
        /*dbo.createCollection('uscensus').then(function(){
            console.log("collection created");
            client.close();
        })*/
        /*dbo.collection("uscensus").insertMany(stats).then(function(res){
            console.log("Number of document inserted:" + res.insertedCount)
            client.close()
        })*/
        /*dbo.collection("uscensus").insertMany(newData).then(function(res){
            console.log("Number of new document inserted:" + res.insertedCount)
            client.close()
        })*/
        /*var query = {city: "Corona", state:"NY"}
        dbo.collection('uscensus').find(query)
            .toArray()
            .then(items => {
                items.forEach(item => {
                    console.log(`Success! found item zip Code: ${item.zip}`);
                });
                client.close()
            })*/
        /*var query = {state:/^C/}
        dbo.collection('uscensus').find(query)
            .toArray()
            .then(items => {
                items.forEach(item =>{
                    console.log(`${item.city} income : ${item.income}`)
                })
            client.close()
            })*/
        /*var query = {state: 'AK'}
        var newValues = {$set: {income:"38910", age :"46"}}
        dbo.collection("uscensus").updateOne(query, newValues).then(function(){
            console.log("document updated successfully")
            client.close()
        })*/
        var mysort = {state:1}
        dbo.collection('uscensus').find()
            .sort(mysort)
            .toArray()
            .then(items =>{
                console.log(`Successfully sorted ${items.length} documents.`)
                console.log(items);
                client.close()
            })
    })

var newData = [
    {
        'city': 'Pacoima', 
        'zip': '91331', 
        'state': 'CA', 
        'income': '60360',
        'age': '33'
    },
    {
        'city': 'Ketchikan', 
        'zip': '99950', 
        'state': 'AK', 
        'income': '00000',
        'age': '00'
    },
]

var stats =[
    {
        'city': 'San Juan', 
        'zip': '00926', 
        'state': 'PR', 
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona', 
        'zip': '11368', 
        'state': 'NY', 
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago', 
        'zip': '60629', 
        'state': 'IL', 
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso', 
        'zip': '79936', 
        'state': 'TX', 
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles', 
        'zip': '90011', 
        'state': 'CA', 
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk', 
        'zip': '90650', 
        'state': 'CA', 
        'income': '66453',
        'age': '35'
    }
]