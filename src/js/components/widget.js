const widget = () => {
    const widgetBtns = document.querySelectorAll('.widget__menu-link');
    document.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('widget__menu-link')) {
            widgetBtns.forEach((widgetBtn) => {
                widgetBtn.classList.remove('active');
            });
            target.classList.add('active');
        } else {
            if (document.querySelector('.widget__menu-link.active')) {
                document.querySelector('.widget__menu-link.active').classList.remove('active');
            }
        }
    });

};

export default widget;
