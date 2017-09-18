const electron = require("electron");

const app = electron.app;

const countdown = require('./count');

const ipc = electron.ipcMain;

let mainWindow;
// In order to see some UI in my electron application I have importing browserwindow module.

const BrowserWindow = electron.BrowserWindow;

app.on('ready', _=> {

	mainWindow = new BrowserWindow({

		width:400,
		height:300


	})


	mainWindow.loadURL('file://' + __dirname + '/index.html');

	mainWindow.on('closed',_ =>{

		console.log("Closed");

		mainWindow = null;

	});

})

ipc.on('countdown-start', _=>{

		countdown(count =>{

			// webContents is a just a Event Emitter instance !
			mainWindow.webContents.send('count',count);

		});
		
	})




