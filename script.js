function clickfunct(){
    window.location.href="page-yes.html"
}
function increaseSize(){
    const yesButton = document.querySelector(".yes");
    yesButton.style.width = (yesButton.offsetWidth + 70) + 'px';
    yesButton.style.height = (yesButton.offsetHeight + 70) + 'px';

    const currentFrontSize = window.getComputedStyle(yesButton).FrontSize;
    const newFrontSize = parseInt(currentFrontSize) + 20 + 'px';
    yesButton.style.frontSize = newFrontSize
}