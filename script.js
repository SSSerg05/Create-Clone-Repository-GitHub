const refs = {
    openModalButtons: document.querySelectorAll('[data-open-modal]'),
    closeModalButton: document.querySelector('[data-close-modal]'),
    backdrop: document.querySelector('[data-backdrop]'),
    bgImg:    document.querySelector('[data-img]'),
};


for (let item of refs.openModalButtons) {
    let img = item.classList;
    console.log('Add click in :' + img);
    item.addEventListener("click", toggleModalOn);
}

refs.closeModalButton.addEventListener("click", toggleModalOff);
console.log('Add click in : CloseModal');

refs.backdrop.addEventListener("click", logBackdropClick);
console.log('Add click in : Done Modal');

function toggleModalOn() {
    refs.backdrop.classList.toggle('is-hidden');
    let img = this.classList.value;
    refs.bgImg.classList.add('bg-' + img)
}
    
function toggleModalOff() {
    refs.backdrop.classList.toggle('is-hidden');
    refs.bgImg.classList = {};
    refs.bgImg.classList.add('modal');
}    

function logBackdropClick() {
    console.log('Це клік у бекдроп');
}