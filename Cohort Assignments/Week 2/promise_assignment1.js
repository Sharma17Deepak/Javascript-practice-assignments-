/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function returnPromise(n){
	setTimeout(() => {
		return new Promise((resolve,reject)=>{
			console.log("Hello world!");
		});
	},n)
}

returnPromise(5000);
