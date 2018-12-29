console.log("Chrome Extension go?");

//by definition, the "content script" does not run untill the 
//web page is completely loaded

//"background script" runs as soon as we open chrome, and starts listening
//for if we opened a new tab, what we are typing in omnibox etc

let pharagraph=document.getElementsByTagName('p');
for(p of pharagraph){
    p.style['background-color']='#FF00FF';
}

/*
in json matches
1. "<all_urls>"
2. "*://*github*"
3. "http://goodreads.com/*"
4. "https://goodreads.com/*"
*/

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(msg,sender,sendResponse){
    console.log(msg.txt);
}

//Replace all images with kittens

let imgfiles=[
    "1.jpg","2.jpg","3.jpg"
]
function replaceImgs(){
    let imgs=document.getElementsByTagName('img');
    for(p of imgs){
        let r=Math.floor(Math.random()*imgfiles.length);
        let file='kittens/' + imgfiles[r];
        p.src=chrome.extension.getURL(file);
    }
};

replaceImgs();