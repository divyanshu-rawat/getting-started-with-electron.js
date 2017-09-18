

module.exports = function countdown(tick){

	let count = 10;
	var interval = setInterval(_ => {
		tick(count--);
		if(count == -1){

			clearInterval(interval); 
		}
	},500)

}