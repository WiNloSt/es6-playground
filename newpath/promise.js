var d = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (true) {
			resolve('hello world');
		} else {
			reject('no bueno');
		}
	}, 2000)
});

d.then(data => {
		console.log('success: ', data)
    throw new Error('wtf just happen')
    
    return 'yo'
	})
	.then(data => console.log('another success: ', data))
  .catch(error => console.log('error : ', error));

console.log('done executing... waiting for callbacks')
