
function addSmooth(item){
    document.querySelectorAll(`${item}`).forEach((innerInfoBox) => {
        innerInfoBox.style.transition = 'opacity 0.5s, visibility 0.5s'
    });
}






export default addSmooth