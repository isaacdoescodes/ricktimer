function starttimer(secs) {
    if (secs == "") {
        secs = 60;
    }
    var lol = confirm("Click 'OK' if you have enabled popup windows. Press 'Cancel' if you haven't and then go do so.");
    document.title = "New Tab";
    document.getElementById("manual").style.display = "none";
    window.setTimeout(() => {
        window.open("https://www.youtube.com/watch?v=a3Z7zEc7AXQ");
    }, (secs - .5) * 1000)
}