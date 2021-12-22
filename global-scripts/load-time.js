// let start = new Date().getTime();
window.onload = getLoadTime;

function getLoadTime() {
    var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    var footerTime = document.querySelector(".footer__load-time");
    footerTime.innerHTML = `Page loaded in ${loadTime / 1000}s`;
    // console.log(loadTime/1000);
    // console.log((new Date().getTime() - start) / 1000);
}