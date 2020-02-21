function clockInit() {
    const root = document.getElementById('clock');
    const numbers = [
        { path: 'src/img/0.png', alt: 'Number zero' },
        { path: 'src/img/1.png', alt: 'Number one' },
        { path: 'src/img/2.png', alt: 'Number two' },
        { path: 'src/img/3.png', alt: 'Number three' },
        { path: 'src/img/4.png', alt: 'Number four' },
        { path: 'src/img/5.png', alt: 'Number five' },
        { path: 'src/img/6.png', alt: 'Number six' },
        { path: 'src/img/7.png', alt: 'Number seven' },
        { path: 'src/img/8.png', alt: 'Number eigth' },
        { path: 'src/img/9.png', alt: 'Number nine' }
    ]

    createBasement(root, numbers);
    synchronize(numbers);
}

function createBasement(parent, imagesCollection) {
    createSection(parent, 'hours', imagesCollection);
    createSection(parent, 'minutes', imagesCollection);
    createSection(parent, 'seconds', imagesCollection);
}

function createSection(parent, sectionId, imagesCollection) {
    const section = createAndAppend(parent, 'div');
    section.setAttribute('id', sectionId);

    createSectionUnit(section, `${sectionId}__dozens`, imagesCollection);
    createSectionUnit(section, `${sectionId}__units`, imagesCollection);
}

function createSectionUnit(parent, id, imagesCollection) {
    const unit = createAndAppend(parent, 'img');
    unit.setAttribute('id', id);
    unit.setAttribute('src', imagesCollection[0].path);
    unit.setAttribute('alt', imagesCollection[0].alt);
}

function synchronize(imagesCollection) {
    setItemImage('seconds__units', imagesCollection, getTimeItem('seconds', 'units'));
    setItemImage('seconds__dozens', imagesCollection, getTimeItem('seconds', 'dozens'));

    setInterval(() => {
        setItemImage('seconds__units', imagesCollection, getTimeItem('seconds', 'units'));
    }, 1000);

    setInterval(() => {
        setItemImage('seconds__dozens', imagesCollection, getTimeItem('seconds', 'dozens'));
    }, 10000);
}


