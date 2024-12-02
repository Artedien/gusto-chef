const footerPagination = () => {
    const pagination = (paginationSelector, totalPages, currentPage) => {
        // Выбираем элемент с классом 'pagination ul' в DOM
        const element = document.querySelector(paginationSelector);

        // Задаем общее количество страниц и текущую страницу

        // Функция для генерации разметки пагинации
        function createPagination(totalPages, currentPage) {
            // Инициализируем пустую строку для разметки
            let liTag = '';

            // Переменная для отслеживания активной страницы
            let active;

            // Определяем сколько цифр отображать с каждой стороны
            const sideNumbers = 2;

            // Вычисляем страницы, которые будут отображены перед и после текущей страницы
            let beforePage = Math.max(currentPage - sideNumbers, 1);
            let afterPage = Math.min(currentPage + sideNumbers, totalPages);

            // Если текущая страница не первая, добавляем кнопку "Prev"
            if (currentPage > 1) {
                liTag += `<button class="pagination__pagination-btn  pagination__pagination-btn--prev"><span style='display:flex;gap:1rem;align-items:center;'>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.6668 6.00016H1.3335M1.3335 6.00016L6.00016 10.6668M1.3335 6.00016L6.00016 1.3335" stroke="#1E1E1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
</svg> 
Предыдущая</span></button>`;
            } else {
                liTag += `<button disabled class="pagination__pagination-btn  pagination__pagination-btn--prev"><span style='display:flex;gap:1rem;align-items:center;'><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.6668 6.00016H1.3335M1.3335 6.00016L6.00016 10.6668M1.3335 6.00016L6.00016 1.3335" stroke="#1E1E1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
</svg> Предыдущая</span></button>`;
            }
            // Если есть страницы перед текущей, добавляем "..." и первую страницу
            if (currentPage > sideNumbers + 1) {
                liTag += `<li class="pagination__pagination-item  pagination__pagination-item--numb"><span>1</span></li>`;
                if (currentPage > sideNumbers + 2) {
                    liTag += `<li class="pagination__pagination-item  pagination__pagination-item--dots"><span>...</span></li>`;
                }
            }

            // Генерируем разметку для страниц, которые будут отображены перед и после текущей страницы
            for (let plength = beforePage; plength <= afterPage; plength++) {
                // Определяем активную страницу
                active = currentPage === plength ? 'isActive' : '';
                // Добавляем тег <li> с номером страницы
                liTag += `<li class="pagination__pagination-item  pagination__pagination-item--numb ${active}"><span>${plength}</span></li>`;
            }

            // Если есть страницы после текущей, добавляем "..." и последнюю страницу
            if (currentPage < totalPages - sideNumbers) {
                if (currentPage < totalPages - sideNumbers - 1) {
                    liTag += `<li class="pagination__pagination-item pagination__pagination-item--dots"><span>...</span></li>`;
                }
                liTag += `<li class="pagination__pagination-item  pagination__pagination-item--numb"><span>${totalPages}</span></li>`;
            }

            // Если текущая страница не последняя, добавляем кнопку "Next"
            if (currentPage < totalPages) {
                liTag += `<button class="pagination__pagination-btn  pagination__pagination-btn--next"><span style='display:flex;gap:1rem;align-items:center;'>Следующая <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.3335 6.00016H10.6668M10.6668 6.00016L6.00016 1.3335M10.6668 6.00016L6.00016 10.6668" stroke="#1E1E1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
</svg></span></button>`;
            } else {
                liTag += `<button disabled class="pagination__pagination-btn   pagination__pagination-btn--next"><span style='display:flex;gap:1rem;align-items:center;'>Следующая <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.3335 6.00016H10.6668M10.6668 6.00016L6.00016 1.3335M10.6668 6.00016L6.00016 10.6668" stroke="#1E1E1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
</svg></span></button>`;
            }

            // Устанавливаем сгенерированную разметку внутрь элемента с классом 'pagination ul'

            // element.innerHTML = liTag;

            element.innerHTML = liTag;

            // Добавляем обработчики событий после обновления HTML
            addEventListeners();
        }

        // Функция для добавления обработчиков событий на элементы пагинации
        function addEventListeners() {
            // Получаем все элементы с классами 'numb', 'prev' и 'next'
            const pageLinks = element.querySelectorAll(
                '.pagination__pagination-item--numb, .pagination__pagination-btn--prev, .pagination__pagination-btn--next'
            );

            // Для каждого элемента добавляем обработчик события при клике
            pageLinks.forEach((link) => {
                link.addEventListener('click', function () {
                    // Получаем номер страницы из текста элемента, на который кликнули
                    const pageNumber = parseInt(this.textContent);

                    // Обновляем текущую страницу в зависимости от действия пользователя
                    if (!isNaN(pageNumber)) {
                        currentPage = pageNumber;
                    } else if (this.classList.contains('pagination__pagination-btn--prev')) {
                        currentPage--;
                    } else if (this.classList.contains('pagination__pagination-btn--next')) {
                        currentPage++;
                    }

                    // Генерируем пагинацию с обновленными значениями
                    createPagination(totalPages, currentPage);
                });
            });
        }

        // Вызываем функцию создания пагинации при загрузке страницы
        createPagination(totalPages, currentPage);
    };

    pagination('.pagination__pagination--1', 68, 1);
    pagination('.pagination__pagination--2', 14, 5);
    pagination('.pagination__pagination--3', 21, 9);
    pagination('.pagination__pagination--4', 31, 15);
    pagination('.pagination__pagination--5', 6, 1);
    pagination('.pagination__pagination--6', 28, 3);
    pagination('.pagination__pagination--7', 44, 15);
    pagination('.pagination__pagination--8', 22, 3);
    pagination('.pagination__pagination--9', 61, 25);
    pagination('.pagination__pagination--10', 16, 1);


    const dropDowns = document.querySelectorAll('.pagination__order-dropdown');
    dropDowns.forEach(dropdown=>{
        const  text = dropdown.querySelector('.pagination__order-dropdown-header-text');
        const  inputs = dropdown.querySelectorAll('.pagination__order-dropdown-item label');
        const headerDropdown = dropdown.querySelector('.pagination__order-dropdown-header-box')
        const dropdownListBox = dropdown.querySelector('.pagination__order-dropdown-list-box')


        inputs.forEach(input=>{

            const inputInner = input.querySelector('input')
            if (inputInner.checked ) {
                text.textContent = input.parentElement.textContent.trim()

            }
            
        })

        headerDropdown.addEventListener('click',()=>{
            dropdownListBox.classList.toggle('isActive')
        })

        inputs.forEach(input=>{

        input.addEventListener('click', ()=>{
            let value = input.parentElement.textContent.trim()
            text.textContent = value
            dropdownListBox.classList.remove('isActive')

        })
    })
    })
};

// Экспортируем функцию guests
export default footerPagination;
