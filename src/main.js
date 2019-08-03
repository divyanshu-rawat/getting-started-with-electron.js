const electron = require("electron");
const { app } = electron;
const countdown = require('./count');
const ipc = electron.ipcMain;
let mainWindow;
// In order to see some UI in my electron application I have importing browserwindow module.
const { BrowserWindow } = electron;
app.on('ready', _ => {
	mainWindow = new BrowserWindow({
		width: 400,
		height: 300,
		webPreferences: {
			nodeIntegration: true
		}
	})

	mainWindow.loadURL('file://' + __dirname + '/index.html');
	// mainWindow.webContents.openDevTools();
	mainWindow.on('closed', _ => {
		mainWindow = null;
	});

})

ipc.on('countdown-start', _ => {
	countdown(count => {
		mainWindow.webContents.send('count', count);
	});
})




