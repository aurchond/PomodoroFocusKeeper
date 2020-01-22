console.log('background running');

// this function is from the chrome API
chrome.browserAction.onClicked.addListener((tab) => {
    // console.log("button clicked!");
    // console.log(tab);

    let msg = {
        txt: "content"
    }
    chrome.tabs.sendMessage(tab.id, msg); //can send messages from background to content using this 
});

// function buttonClicked (tab) {
//     console.log("button clicked!");
//     console.log(tab);
// }  