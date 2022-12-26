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

//document.addEventListener('click', e => console.log(e.target))
const picts = {
    ref : document.querySelectorAll('.item')
}


for (let item of picts.ref) {
    item.ref = {
        openModalButton: item.querySelectorAll('[data-open-modal]'),
        closeModalButton: item.querySelectorAll('[data-close-modal]'),
        backdrop: item.querySelectorAll('[data-backdrop]'),
    };
    console.log(item);    
    item.ref.openModalButton.addEventListener("click", toggleModal());
    // item.ref.closeModalButton.addEventListener("click", toggleModal());
    // item.ref.backdrop.addEventListener("click", logBackdropClick());
}
// console.log(picts);



// const refs = {
//     openModalButtons: document.querySelectorAll('[data-open-modal]'),
//     closeModalButtons: document.querySelectorAll('[data-close-modal]'),
//     backdrops: document.querySelectorAll('[data-backdrop]'),
// };


// for(let item of refs.openModalButtons) {
//     let img = item.classList[1];
//     console.log('Open:' + img);
//     item.addEventListener("click", toggleModal());
// }

// for(let item of refs.closeModalButtons) {
//     let img = item.classList[1];
//     console.log('Close:' + img);
//     item.addEventListener("click", toggleModal());
// }

// for (let item of refs.backdrops) {
//     // console.log(item.classList);
//     let img = item.classList[1];
//     console.log('backdrops:' + img);
//     item.addEventListener("click", logBackdropClick());
// }
// console.log(refs);

// function toggleModal() {
//     let item = document.querySelector('[data-backdrop]')
//     item.classList.toggle('is-hidden');
//     // console.log(refs.backdrops);
//     // for (let item of refs.backdrops) { 
//     //     // console.log(item);

//     //     if (item.classList.value.includes(img)) { 
//     //         // console.log('++');
//     //         item.classList.toggle('is-hidden');
//     //      }
//     // }
//     //refs.backdrops.img.classList.toggle('is-hidden');
// }

function logBackdropClick(item) {
    // console.log(item);
    console.log('Це клік у бекдроп');
}