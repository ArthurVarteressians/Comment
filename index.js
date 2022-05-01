const inputTxt = document.getElementById('text_input');
const commentBtn = document.getElementById('commentBtn');
const outputTxt = document.getElementById('show_box');
const commentBlock = document.getElementById('box_container');
const deleteButton = document.getElementById('deleteBtn');




function getInput() {
    commentBlock.style.display = "block";
    outputTxt.innerHTML += `${inputTxt.value}\n`;
}
commentBtn.addEventListener('click', getInput);



inputTxt.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        event.preve
    }
    ntDefault();
    document.getElementById("commentBtn").click();
});




// function slideDown(el) {
//     var elem = document.getElementById(el);
//     elem.style.transition = "all 2s ease-in-out";
//     elem.style.height = "400px";
// }



deleteButton.addEventListener('click', function() {
    commentBlock.style.display = "none";
    outputTxt.innerHTML = ``;
    inputTxt.value = '';

});