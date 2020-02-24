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
    clockEngine(numbers);
}

function createBasement(parent, imagesCollection) {
    createSection(parent, 'hours', imagesCollection);
    createSection(parent, 'minutes', imagesCollection);
    createSection(parent, 'seconds', imagesCollection);
}

function createSection(parent, sectionId, imagesCollection) {
    const section = createAndAppend(parent, 'div');
    section.setAttribute('id', sectionId);

    createSectionUnit(section, `${sectionId}Dozens`, imagesCollection);
    createSectionUnit(section, `${sectionId}Units`, imagesCollection);
}

function createSectionUnit(parent, id, imagesCollection) {
    const unit = createAndAppend(parent, 'img');
    unit.setAttribute('id', id);
    unit.setAttribute('src', imagesCollection[0].path);
    unit.setAttribute('alt', imagesCollection[0].alt);
}

function clockEngine(imagesCollection) {
    const time = synchronize(imagesCollection);

    setInterval(() => {
        (time[0].value < 9) ? time[0].value++ : time[0].value = 0;
        setItemImage(time[0].key, imagesCollection, time[0].value);

        for (let i = 0; i < time.length; i++) {
            const current = time[i];
            const next = time[i + 1];

            if (current.key === 'hoursUnits' && next.value === 2 && current.value === 4) {
                current.value = 0;
                next.value = 0;
                setItemImage(next.key, imagesCollection, next.value);
                setItemImage(current.key, imagesCollection, current.value);
                break;
            }

            if (current.value === 0) {
                (next.value === next.maxValue) ? next.value = 0 : next.value++;
                setItemImage(next.key, imagesCollection, next.value);
            } else {
                break;
            }
        }
    }, 1000);
}