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
    // Version 1
    synchronize(imagesCollection);

    setInterval(() => {
        const secondsUnits = getTimeItem('seconds', 'units');
        setItemImage('seconds__units', imagesCollection, secondsUnits);
        
        if (secondsUnits === 0) {
            const secondsDozens = getTimeItem('seconds', 'dozens');
            setItemImage('seconds__dozens', imagesCollection, secondsDozens);

            if (secondsDozens === 0) {
                const minutesUnits = getTimeItem('minutes', 'units');
                setItemImage('minutes__units', imagesCollection, minutesUnits);

                if (minutesUnits === 0) {
                    const minutesDozens = getTimeItem('minutes', 'dozens');
                    setItemImage('minutes__dozens', imagesCollection, minutesDozens);

                    if (minutesDozens === 0) { 
                        const hoursUnits = getTimeItem('hours', 'units');
                        setItemImage('hours__units', imagesCollection, hoursUnits);

                        if (hoursUnits === 0) {
                            const hoursDozens = getTimeItem('hours', 'dozens');
                            setItemImage('hours__dozens', imagesCollection, hoursDozens);
                        }
                    }
                }
            }
        }
    }, 1000);

    // Version 2
    /*const time = synchronize(imagesCollection);

    setInterval(() => {
        time.secondsUnits = getTimeItem('seconds', 'units');
        setItemImage('seconds__units', imagesCollection, time.secondsUnits);
        
        if (time.secondsUnits === 0) {
            (time.secondsDozens < 5) ? time.secondsDozens++ : time.secondsDozens = 0;
            setItemImage('seconds__dozens', imagesCollection, time.secondsDozens);

            if (time.secondsDozens === 0) {
                (time.minutesUnits < 9) ? time.minutesUnits++ : time.minutesUnits = 0;
                setItemImage('minutes__units', imagesCollection, time.minutesUnits);

                if (time.minutesUnits === 0) {
                    (time.minutesDozens < 5) ? time.minutesDozens++ : time.minutesDozens = 0;
                    setItemImage('minutes__dozens', imagesCollection, time.minutesDozens);

                    if (time.minutesDozens === 0) {
                        (time.hoursUnits < 9) ? time.hoursUnits++ : time.hoursUnits = 0;
                        setItemImage('hours__units', imagesCollection, time.hoursUnits); 

                        if (time.hoursUnits === 0) {
                            (time.hoursDozens < 2) ? time.hoursDozens++ : time.hoursDozens = 0;
                            setItemImage('hours__dozens', imagesCollection, time.hoursDozens); 
                        }

                        if (time.hoursDozens === 2 && time.hoursUnits === 4) {
                            time.hoursUnits = 0;
                            time.hoursDozens = 0;
                            setItemImage('hours__units', imagesCollection, time.hoursUnits); 
                            setItemImage('hours__dozens', imagesCollection, time.hoursDozens); 
                        }
                    }
                }
            }
        }
    }, 1000);*/
}