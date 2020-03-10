const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

function MongoUtils() {
	const mu = {};
	var url =
    'mongodb+srv://admin:admin@cluster0-twpse.mongodb.net/test?retryWrites=true&w=majority';
	mu.connect = () => {
		const client = new MongoClient(url, { useUnifiedTopology: true }); // { useUnifiedTopology: true } removes connection warnings;
		return client.connect();
	};

	mu.db = {};

	mu.db.find = query =>
		mu.connect().then(client => {
			const gradesCol = client.db('apolo').collection('tutorias');
			console.log('query', query);
            
			return gradesCol
				.find(query)
				.limit(20)
				.sort({ timestamp: -1 })
				.toArray()
				.finally(() => client.close());
		});

	return mu;
}

module.exports = MongoUtils();

//---------------------Mostrar las collections de una BD-------------------------------

// Connection url
// var url =
//   "mongodb+srv://LordExodia:<password>@cluster0-i3jf4.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(url, { useUnifiedTopology: true }); // { useUnifiedTopology: true } removes connection warnings;

// const dbName = "test";

// client
//   .connect()
//   .then(
//     client =>
//       client
//         .db(dbName)
//         .listCollections()
//         .toArray() // Returns a promise that will resolve to the list of the collections
//   )
//   .then(cols => console.log("Collections", cols))
//   .finally(() => client.close());

//---------------------Listar las bases de datos <select>-------------------------------
// const { promisify } = require('util');
// const exec = promisify(require('child_process').exec)
// async function test() {
//   var res = await exec('mongo  --eval "db.adminCommand( { listDatabases: 1 } )" --quiet')
//   return { res }
// }

// test()
//   .then(resp => {
//     console.log('All dbs', JSON.parse(resp.res.stdout).databases)
//   })
// test()
//--------------------------------------------------------------------------------
