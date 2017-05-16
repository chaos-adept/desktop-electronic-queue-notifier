var electron = require('electron');
var url = require('url');
var path = require('path');

electron.app.once('ready', function () {
  //var mainWindow = new electron.BrowserWindow({width: 200, height: 200, resizable:false,  frame: true, transparent: true, backgroundColor: '#80FFFFFF'});
  //mainWindow.setIgnoreMouseEvents(true);
  //mainWindow.setAlwaysOnTop(true);
  //mainWindow.loadURL('file://' + __dirname + '/index.html');


  // Create a new window
  window = new electron.BrowserWindow({
	x:0,
	y:0,	
    // Set the initial width to 800px
    width: 800,
    // Set the initial height to 600px
    height: 600,
    // Set the default background color of the window to match the CSS
    // background color of the page, this prevents any white flickering
	transparent: true,
	frame: false,
	alwaysOnTop: true,
    //backgroundColor: "#FFFFFF",
    // Don't show the window until it ready, this prevents any white flickering
    show: false
  });

  // Load a URL in the window to the local index.html path
  window.loadURL(url.format({
    pathname: path.join(__dirname, '/lib/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Show window when page is ready
  window.once('ready-to-show', function () {
	window.setIgnoreMouseEvents(true);
    window.show()
  })
  
  
});
