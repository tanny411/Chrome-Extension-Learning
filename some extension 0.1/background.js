//This page runs in "Inspect views -- background page"

console.log("Background is running! WOHO!");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab)
{
    console.log("Clicked The Button in the tab ");
    console.log(tab);
    
    let msg={
        txt: "hello"
    }
    chrome.tabs.sendMessage(tab.id,msg);
}