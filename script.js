// const refs = {
//     openModalBtn: document.querySelector('[data-open-modal]'),
//     closeModalBtn: document.querySelector('[data-close-modal]'),
//     backdrop: document.querySelector('[data-backdrop]'),
// };

// refs.openModalBtn.addEventListener("click", toggleModal);
// refs.closeModalBtn.addEventListener("click", toggleModal);

// refs.backdrop.addEventListener("click", logBackdropClick);

// function toggleModal() {
//     refs.backdrop.classList.toggle('is-hidden');
// }

// function logBackdropClick() {
//     console.log('Це клік у бекдроп');
// }

const refs = {
    openModalBtns: document.querySelectorAll('[data-open-modal]'),
    closeModalBtns: document.querySelectorAll('[data-close-modal]'),
    backdrop: document.querySelectorAll('[data-backdrop]'),
};

for(let item of refs.openModalBtns) {
    item.addEventListener("click", toggleModal(item));
    console.log(item);
}
console.log(refs.openModalBtns);


for(let item of refs.closeModalBtns) {
   item.addEventListener("click", toggleModal(item));
}

for(let item of refs.backdrop) {
    item.addEventListener("click", logBackdropClick);
}

function toggleModal(item) {
    refs.backdrop[item].classList.toggle('is-hidden');
}

function logBackdropClick() {
    console.log('Це клік у бекдроп');
}