
function updateTime() {
    const dateElement = $('#date');
    const timeElement = $('#time');
    const currentDate = dayjs().format('dddd, MMMM D, YYYY');
    const currentTime = dayjs().format('hh:mm:ss A');
    dateElement.text(currentDate);
    timeElement.text(currentTime);
}

$(".time-block").each(function(){
    var hourKey=$(this).attr("id")
    var currentHour=dayjs().hour()
    //var currentHour = 10
    var rowHour=parseInt(hourKey)
    console.log(currentHour,rowHour)
    if(currentHour > rowHour) {
        $(this).children("textarea").addClass("past");
    } else if(currentHour === rowHour) {
        $(this).children("textarea").addClass("present");
    } else {
        $(this).children("textarea").addClass("future");
    }
    $(this).children("textarea").val(localStorage.getItem(hourKey))
})

$(".saveBtn").click(function(){
    var hourKey = $(this).siblings(".col-8").attr("id")
    var hourValue = $(this).siblings(".col-8").val()
    localStorage.setItem(hourKey,hourValue)
}) 

setInterval(updateTime, 1000);

