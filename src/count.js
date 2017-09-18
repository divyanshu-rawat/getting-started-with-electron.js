

module.exports = function countdown(){

	let count = 10;
	var interval = setInterval(_ => {
		count--;

		console.log("count : ",count);
		if(count == 0){

			clearInterval(interval); 
		}
	},1000)

}