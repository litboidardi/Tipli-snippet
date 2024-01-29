window.addEventListener("DOMContentLoaded", (event) => {
    const modalOpen = document.getElementById('modalOpen');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    if(modalOpen) {
        modalOpen.addEventListener('click', ()=> {
            modal.classList.add('show');
        });
    } if(closeModal) {
        closeModal.addEventListener('click', ()=> {
            modal.classList.remove('show');
        });
    }
})



