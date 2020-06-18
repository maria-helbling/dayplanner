let weekday = moment().format('dddd');
let day = moment().format('Do');
let month = moment().format('MMMM');
let year = moment().format('YYYY')
let hour = moment().format('hA')

let past = true;
let present = false;

//Check for stored tasks
let storedTasks= JSON.parse(localStorage.getItem('taskList'))
if (!storedTasks) {
    storedTasks = {
        0: "",
        1: "I work!",
        2: "",
        3: "",
        4: "Yay, me too!!",
        5: "",
        6: "",
        7: "",
        8: "",
        9: ""
    }
}
// day etc printed on top of page
$('#currentDay').text(`${weekday}, ${day} ${month} ${year}`);

// write all hourblocks
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
    //add the text area with stored tasks if any
    let textSpace = $(`<textarea class="col-10 description" data-index="${i}">`)
    textSpace.text(storedTasks[i])
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
    //TODO: add button picture change
    let btn = $(`<button class="col-1 btn saveBtn" data-index="${i}">`)
    if (storedTasks[i].length){
        btn.append(`<i class="fas fa-lock">`)
    } else {
        btn.append(`<i class="fas fa-unlock-alt">`)
    }
    thisRow.append(btn)
}



//TODO: read to-dos from storage
//TODO: read input from user
//TODO: save to storage if button clicked
