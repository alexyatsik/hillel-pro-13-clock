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

    createSectionUnit(section, `${sectionId}__dozens`, imagesCollection);
    createSectionUnit(section, `${sectionId}__units`, imagesCollection);
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
        (time.seconds.units < 9) ? time.seconds.units++ : time.seconds.units = 0;
        setItemImage('seconds__units', imagesCollection, time.seconds.units);

        if (time.seconds.units === 0) {
            (time.seconds.dozens < 5) ? time.seconds.dozens++ : time.seconds.dozens = 0;
            setItemImage('seconds__dozens', imagesCollection, time.seconds.dozens);

            if (time.seconds.dozens === 0) {
                (time.minutes.units < 9) ? time.minutes.units++ : time.minutes.units = 0;
                setItemImage('minutes__units', imagesCollection, time.minutes.units);

                if (time.minutes.units === 0) {
                    (time.minutes.dozens < 5) ? time.minutes.dozens++ : time.minutes.dozens = 0;
                    setItemImage('minutes__dozens', imagesCollection, time.minutes.dozens);

                    if (time.minutes.dozens === 0) {
                        (time.hours.units < 9) ? time.hours.units++ : time.hours.units = 0;
                        setItemImage('hours__units', imagesCollection, time.hours.units); 

                        if (time.hours.units === 0) {
                            (time.hours.dozens < 2) ? time.hours.dozens++ : time.hours.dozens = 0;
                            setItemImage('hours__dozens', imagesCollection, time.hours.dozens); 
                        }

                        if (time.hours.dozens === 2 && time.hours.units === 4) {
                            time.hours.units = 0;
                            time.hours.dozens = 0;
                            setItemImage('hours__units', imagesCollection, time.hours.units); 
                            setItemImage('hours__dozens', imagesCollection, time.hours.dozens); 
                        }
                    }
                }
            }
        }
    }, 1000);
}