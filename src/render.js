const electron = require('electron');
const ipc = electron.ipcRenderer;

document.getElementById('start').addEventListener('click',_ =>{
	ipc.send('countdown-start');
})

ipc.on("count",(event,count)=>{
	document.getElementById('dispCount').innerHTML = count;
})