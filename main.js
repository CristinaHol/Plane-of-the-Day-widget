const { app, BrowserWindow, ipcMain } = require("electron");
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 218,
    height: 232,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false, 
    transparent: true,
    webPreferences: {
      contextIsolation: true,
      preload:path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

ipcMain.on('close-window', () => {
  app.quit();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
