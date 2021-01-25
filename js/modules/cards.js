import {
    getResource
} from '../services/services';

function cards() {
    class MenuCard {
        constructor(scr, alt, title, descr, prise, parentSelector, ...classes) {
            this.scr = scr;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.prise = prise;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.classes = classes;

        }


        render() {
            const element = document.createElement('div');

            if (this.classes.length == 0) {
                this.classes = 'menu__item';
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(cl => {
                    element.classList.add(cl);
                })
            }
            element.innerHTML = `<img src=${this.scr} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}"</h3>
        <div class="menu__item-descr">${this.descr} </div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Price: </div>
            <div class="menu__item-total"><span>${this.prise}</span> $/day</div>`;
            this.parent.append(element);

        }
    }



    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({
                img,
                altimg,
                title,
                descr,
                price
            }) => {
                new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
            });
        });
}

export default cards;