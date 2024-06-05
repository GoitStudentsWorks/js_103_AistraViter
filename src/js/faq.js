import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// Вибираємо всі кнопки та елементи <li>
const buttons = document.querySelectorAll(".accordion button");
const accordionItems = document.querySelectorAll(".accordion-item");

// Встановлюємо початковий стан для першого елемента
buttons[0].setAttribute('aria-expanded', 'true');
buttons[0].nextElementSibling.hidden = false;
accordionItems[0].setAttribute('aria-expanded', 'true');

// Функція для перемикання аккордеону
function toggleAccordion(event) {
    event.stopPropagation();  // Запобігаємо бульбашці події при натисканні на кнопку
    const itemToggle = this.getAttribute('aria-expanded');
    const content = this.nextElementSibling;
    const accordionItem = this.parentElement;

    // Закриваємо всі аккордеони
    buttons.forEach(button => {
        button.setAttribute('aria-expanded', 'false');
        button.nextElementSibling.hidden = true;
        button.parentElement.classList.remove('active');
        button.parentElement.setAttribute('aria-expanded', 'false');
    });

    // Відкриваємо/закриваємо поточний аккордеон
    if (itemToggle === 'false' || !itemToggle) {
        this.setAttribute('aria-expanded', 'true');
        content.hidden = false;
        accordionItem.classList.add('active');
        accordionItem.setAttribute('aria-expanded', 'true');
    }
}

// Додаємо слухач подій для кожної кнопки
buttons.forEach(button => button.addEventListener('click', toggleAccordion));

// Додаємо слухач подій для кожного елемента <li>
accordionItems.forEach(item => item.addEventListener('click', function(event) {
    const button = this.querySelector('button');
    button.click();
}));
