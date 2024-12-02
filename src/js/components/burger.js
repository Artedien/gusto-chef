const burger = () => {
    const burger = document.querySelector('.header__burger-btn-box');
    const nav = document.querySelector('.header__nav-box');

    const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

    function openBurger() {
        let scrollWith = getScrollbarWidth();

        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollWith}px`;
        

        document.documentElement.classList.add('burger-show');
        burger.classList.add('active');
        nav.classList.add('active');
    }

    function closeBurger() {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';

        document.documentElement.classList.remove('burger-show');
        burger.classList.remove('active');
        nav.classList.remove('active');
    }

    burger.addEventListener('click', () => {
        burger.classList.contains('active') ? closeBurger() : openBurger();
    });

    nav.addEventListener('click', (e) => {
        if (e.target.classList.contains('header-top__nav-link')) {
            closeBurger();
        }
    });
};

export default burger;
