import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const items = document.querySelectorAll(".accordion button");

items[0].setAttribute('aria-expanded', 'true');
items[0].nextElementSibling.hidden = false;

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    const content = this.nextElementSibling;
    const accordionItem = this.parentElement;

    items.forEach(item => {
        item.setAttribute('aria-expanded', 'false');
        item.nextElementSibling.hidden = true;
        item.parentElement.classList.remove('active');
    });

    if (itemToggle === 'false') {
        this.setAttribute('aria-expanded', 'true');
        content.hidden = false;
        accordionItem.classList.add('active');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
