

module.exports = function countdown(tick){

	let count = 10;
	var interval = setInterval(_ => {
		tick(count--);
		if(count == 0){

			clearInterval(interval); 
		}
	},1000)

}