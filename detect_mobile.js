var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var element = document.getElementById('text');
if (isMobile) {
    element.innerHTML = "You are using Mobile!!<p>Wow!";
} else {
    element.innerHTML = "You are using Desktop!!";
}
