import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    const content = this.nextElementSibling;

    for (let i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
        items[i].nextElementSibling.hidden = true;
    }

    if (itemToggle === 'false') {
        this.setAttribute('aria-expanded', 'true');
        content.hidden = false;
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion)); 