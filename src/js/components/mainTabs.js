function mainTabs() {
    const tabsDesk = document.querySelectorAll('.main__tab-title');
    const infoBoxDesk = document.querySelectorAll('.main__tab-item');
    // infoBoxDesk.forEach((innerInfoBox) => {
    //     innerInfoBox.style.transition = 'visibility 0.5s, opacity 0.5s'
    // });


    tabsDesk.forEach((tab, i) => {
        
        tab.addEventListener('click', () => {
            tabsDesk.forEach((innerTab) => {
                innerTab.classList.remove('active');
            });

            tab.classList.add('active');
            infoBoxDesk.forEach((innerInfoBox) => {
                innerInfoBox.classList.remove('active');
            });

            infoBoxDesk[i].classList.add('active');
        });
    });
}

export default mainTabs;
