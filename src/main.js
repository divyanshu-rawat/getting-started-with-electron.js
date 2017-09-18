const electron = require("electron");

const app = electron.app;

const countdown = require('./count');

let mainWindow;
// In order to see some UI in my electron application I have importing browserwindow module.

const BrowserWindow = electron.BrowserWindow;

app.on('ready', _=> {

	mainWindow = new BrowserWindow({

		width:400,
		height:300


	})


	mainWindow.loadURL('file://' + __dirname + '/index.html');

	countdown();

	mainWindow.on('closed',_ =>{

		console.log("Closed");

		mainWindow = null;

	});


})