let currentbutValue = null;
const whichbutton = document.querySelectorAll('.mybut');
whichbutton.forEach((button, index) => {

    button.addEventListener('click', () => {
        whichbutton.forEach((but) => {
            but.classList.remove('selected');
        })
        const currentbut = index + 1;
        const getCurrentBut = document.querySelector(`#but${currentbut}`);
        getCurrentBut.classList.add('selected');
        getButtonNum(currentbut);
    });
});
function getButtonNum(value) {
    currentbutValue = value;
    //console.log(currentbutValue);
}

const mysubbut = document.querySelector('#mysubbut');
mysubbut.addEventListener("click", () => {
    if (!currentbutValue === false) {
        const firstContainer = document.querySelector('.container');
        firstContainer.style.display = "none";
        const afterSubmit = document.querySelector('.aftersubmit');
        afterSubmit.style.display = "flex";
        const resultText = document.querySelector('.resulttext');
        resultText.innerText = ` You selected ${currentbutValue} out of 5`;
    }

})




