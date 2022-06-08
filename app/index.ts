import { app, BrowserWindow, ipcMain } from "electron"
import { join } from "path"

import "dotenv/config"

app.whenReady().then(main);

function main() {
	const window = new BrowserWindow({
		width: 800,
		height: 650,
		title: app.getName(),
		icon: join(__dirname, "../public/favicon.png"),
		webPreferences: {
			preload: join(__dirname, "preload.js"),
		}
	});

	if (process.env.DEV_MODE == "true") window.webContents.openDevTools({ mode: 'detach' });

	window.loadFile(join(__dirname, "../public/index.html"));
}

const showModal = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 650,
	});

	win.loadURL('https://discord.com/oauth2/authorize?client_id=931298070338109450&redirect_uri=botson%3A%2F%2Fauth%2Fcallback&response_type=code&scope=guilds%20identify')
};

ipcMain.on("showModal", showModal);
