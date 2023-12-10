
function hourColour() {

}

function updateTime() {
    const dateElement = $('#date');
    const timeElement = $('#time');
    const currentDate = dayjs().format('dddd, MMMM D, YYYY');
    const currentTime = dayjs().format('hh:mm:ss A');
    dateElement.text(currentDate);
    timeElement.text(currentTime);
}



function timeContainerEntry() {

}

function timeContainerColor() {

}

function saveButton() {

}

setInterval(updateTime, 1000);

