/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(ms){
	let a=1;
	for(i=0;i<ms;i++){
		a++;
	}
	return new Promise((resolve,reject)=>{
		console.log("Promise is resolved");
	});
}
sleep(1000000000);

