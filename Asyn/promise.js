const p = new Promise((resolve, reject) => {

	// kick off some async work
	// ...
	setTimeout(() => {

		reject(new Error ("message"))
	}, 2000);
		// resolve(1);
});

p
.then(result => console.log('Result', result))
.catch(error => console.log('Error', error.message))
