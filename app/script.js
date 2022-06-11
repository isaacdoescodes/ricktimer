function starttimer(secs) {
    if (secs == "") {
        secs = 60;
    }
    document.title = "New Tab";
    document.getElementById("manual").style.display = "none";
    window.setTimeout(() => {
        window.location = "https://www.youtube.com/watch?v=a3Z7zEc7AXQ"
    }, (secs - .5) * 1000)
}
localStorage.worked = true;
