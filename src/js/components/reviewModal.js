function reviewModal() {
    function openModal(modal) {
        const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
        let scrollWith = getScrollbarWidth();
        document.body.style.paddingRight = `${scrollWith}px`;
        modal.classList.add('isActive');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        modal.classList.remove('isActive');
        document.body.style.paddingRight = ``;
        document.body.style.overflow = '';
    }
    const reviewBtn = document.querySelectorAll('.feedback');
    const reviewModal = document.querySelector('.reviewModal__wrapper');
    const reviewModalCloseBtn = document.querySelector('.reviewModal__reject');

    const successReviewBtn = document.querySelector('.reviewModal__submit');
    const successRevievModal = document.querySelector('.successReviewModal__wrapper');

    const closeBtn = document.querySelector('.successModal__btn');

    reviewBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(reviewModal);
        });
    });

    reviewModalCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(reviewModal);
    });

    reviewModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('reviewModal__wrapper')) {
            closeModal(reviewModal);
        }
    });

    successReviewBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(reviewModal);
        openModal(successRevievModal);
    });

    successRevievModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('successReviewModal__wrapper')) {
            closeModal(successRevievModal);
        }
    });

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(successRevievModal);
    });
}

export default reviewModal;
