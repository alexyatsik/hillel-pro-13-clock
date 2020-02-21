function createAndAppend(parent, tagName, content) {
    const tag = document.createElement(`${tagName}`);

    if (content) {
        tag.innerHTML = content;
    }

    parent.appendChild(tag);

    return parent.lastElementChild;
}

function setItemImage(itemId, imagesCollection, number) {
    const img = document.getElementById(itemId);
    img.setAttribute('src', imagesCollection[number].path);
    img.setAttribute('alt', imagesCollection[number].alt);
}

function getTimeItem(section, measurement) {
    switch (section) {
        case 'hours':
            return getRealHours(measurement);
        case 'minutes':
            return getRealMinutes(measurement);
        case 'seconds':
            return getRealSeconds(measurement);
    }
}

function getRealHours(measurement) {
    switch (measurement) {
        case 'units':
            return Math.floor(new Date().getHours() % 10);
        case 'dozens':
            return Math.floor(new Date().getHours() / 10);
    }
}

function getRealMinutes(measurement) {
    switch (measurement) {
        case 'units':
            return Math.floor(new Date().getMinutes() % 10);
        case 'dozens':
            return Math.floor(new Date().getMinutes() / 10);
    }
}

function getRealSeconds(measurement) {
    switch (measurement) {
        case 'units':
            return Math.floor(new Date().getSeconds() % 10);
        case 'dozens':
            return Math.floor(new Date().getSeconds() / 10);
    }
}

function synchronize(imagesCollection) {
    const time = {
        hoursDozens: getTimeItem('hours', 'dozens'),
        hoursUnits: getTimeItem('hours', 'units'),
        minutesDozens: getTimeItem('minutes', 'dozens'),
        minutesUnits: getTimeItem('minutes', 'units'),
        secondsDozens: getTimeItem('seconds', 'dozens'),
        secondsUnits: getTimeItem('seconds', 'units')
    }

    setItemImage('seconds__units', imagesCollection, time.secondsUnits);
    setItemImage('seconds__dozens', imagesCollection, time.secondsDozens);
    setItemImage('minutes__units', imagesCollection, time.minutesUnits);
    setItemImage('minutes__dozens', imagesCollection, time.minutesDozens);
    setItemImage('hours__units', imagesCollection, time.hoursUnits);
    setItemImage('hours__dozens', imagesCollection, time.hoursDozens);

    return time;
}