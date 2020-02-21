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

function clockInit() {
    const root = document.getElementById('clock');

    createBasement(root);
}

function createBasement(parent) {
    createSection(parent, 'hours');
    createSection(parent, 'minutes');
    createSection(parent, 'seconds');
}

function createSection(parent, sectionName) {
    const section = createAndAppend(parent, 'div');
    section.dataset.section = sectionName;

    createSectionUnit(section, '__dozens');
    createSectionUnit(section, '__units');
}

function createSectionUnit(parent, suffix) {
    const unit = createAndAppend(parent, 'img');
    unit.dataset.section = parent.dataset.section + suffix;
    unit.setAttribute('src', numbers[0].path);
    unit.setAttribute('alt', numbers[0].alt);
}