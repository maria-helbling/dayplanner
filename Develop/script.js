let weekday = moment().format('dddd');
let day = moment().format('Do');
let month = moment().format('MMMM');
let year = moment().format('YYYY')
let hour = moment().format('hA')
$('#currentDay').text(`${weekday}, ${day} ${month} ${year}`);
let storedTasks= localStorage.getItem('taskList')
// write all hourblocks
let past = true;
let present = false;
for (let i = 0; i < 9; i++) {
    let loopHour=moment().hour(i+9).format('hA')
    if (loopHour === hour) {
        past = false;
        present = true;
    }
    //add the entire row
    let thisRow = $(`<div class="row">`)
    $('.container').append(thisRow)
    //add the hour number
    let hourBlock = $(`<div class="col-1 hour" data-index="${i}">`)
    hourBlock.text(`${loopHour}`);
    thisRow.append(hourBlock)
    //add the text area
    let textSpace = $(`<textarea class="col-10 description" data-index="${i}">`)
    //add past presetn future color based on hour
    if (past) {
        textSpace.addClass('past')
    } else if (present) {
        textSpace.addClass('present')
        present=false;
    } else {
        textSpace.addClass('future')
    }
    thisRow.append(textSpace)
    //TODO: add button picture?
    thisRow.append(`<button class="col-1 btn saveBtn" data-index="${i}">`)
    
}



//TODO: read to-dos from storage
//TODO: read input from user
//TODO: save to storage if button clicked
