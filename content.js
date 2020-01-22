console.log('--EXAMPLE');

let filenames = [
    "study1.jpg",
    "study2.jpg",
    "study3.jpg",
    "study4.jpg",
];

// recieve the message from the background
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message.txt);
    if (message.txt === "content") {
        let imgs = document.getElementsByTagName('img'); // this selects everything in the webpage with the img tag
        // can enter the line above and then 'imgs' in the next within the developer
        // tools console in the web page to find all images
        // we want to replace the src property within each img to the above pictures
        // shorthand for each element in imgs array
        for (imgElt of imgs) {
            let r = Math.floor(Math.random() * filenames.length);
            let file = 'pictures/' + filenames[r]; // get a random image from the pictures folder
            let url = chrome.extension.getURL(file); // get the url of the path of the file
            imgElt.src = url; //now, each image within the page is set to the url of the picture
            console.log(url)
        }
    }
});