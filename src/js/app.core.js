function clockInit() {
    const root = document.getElementById('clock');

    createBasement(root);
}

function createBasement(parent) {
    const hours = createAndAppend(parent, 'div');
    hours.dataset.section = 'hours';

    const minutes = createAndAppend(parent, 'div');
    minutes.dataset.section = 'minutes';

    const seconds = createAndAppend(parent, 'div');
    seconds.dataset.section = 'seconds';
}