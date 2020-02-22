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
        hours: {
            dozens: getTimeItem('hours', 'dozens'),
            units: getTimeItem('hours', 'units')
        },
        minutes: {
            dozens: getTimeItem('minutes', 'dozens'),
            units: getTimeItem('minutes', 'units')
        },
        seconds: {
            dozens: getTimeItem('seconds', 'dozens'),
            units: getTimeItem('seconds', 'units')
        }
    }

    setItemImage('seconds__units', imagesCollection, time.seconds.units);
    setItemImage('seconds__dozens', imagesCollection, time.seconds.dozens);
    setItemImage('minutes__units', imagesCollection, time.minutes.units);
    setItemImage('minutes__dozens', imagesCollection, time.minutes.dozens);
    setItemImage('hours__units', imagesCollection, time.hours.units);
    setItemImage('hours__dozens', imagesCollection, time.hours.dozens);

    return time;
}