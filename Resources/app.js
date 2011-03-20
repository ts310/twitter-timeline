// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#fff');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

// Create the window "mainWin"
var mainWin = Titanium.UI.createWindow ({
  title           : "Tweets", // Set the title
  backgroundColor : "#fff", // Set the background color to white
  url             : "tweets.js" // Link to file which will handle the code for the window
});

// Create the tab "mainTab"
var mainTab = Titanium.UI.createTab({
  title  : "Twitter", // Title of the tab - "Twitter"
  icon   : "KS_nav_mashup.png", // Icon for tab - Included in the source files
  window : mainWin  // We will create the window "mainWin"
});

// Add the tab to our tab group
tabGroup.addTab(mainTab);

// open tab group
tabGroup.open();
