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

function synchronize(imagesCollection) {
    const time = [
        { 
            key: 'secondsUnits', 
            value: Math.floor(new Date().getSeconds() % 10), 
            maxValue: 9 
        },
        { 
            key: 'secondsDozens', 
            value: Math.floor(new Date().getSeconds() / 10), 
            maxValue: 5  
        },
        { 
            key: 'minutesUnits', 
            value: Math.floor(new Date().getMinutes() % 10), 
            maxValue: 9 
        },
        { 
            key: 'minutesDozens', 
            value: Math.floor(new Date().getMinutes() / 10), 
            maxValue: 5 
        },
        { 
            key: 'hoursUnits', 
            value: Math.floor(new Date().getHours() % 10), 
            maxValue: 9 
        },
        { 
            key: 'hoursDozens', 
            value: Math.floor(new Date().getHours() / 10), 
            maxValue: 2 
        },
    ]

    for (let i = 0; i < time.length; i++) {
        setItemImage(time[i].key, imagesCollection, time[i].value);
    }

    return time;
}