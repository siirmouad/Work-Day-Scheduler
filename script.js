//DATE AND TIME CODE

$(document).ready(function () {
  //Create function that will shows today's time and date on the Jumbotron
  function dateTime() {
    setInterval(function () {
      //got the function from https://momentjs.com/
      var currentday = moment().format("MMMM Do YYYY, h:mm:ss a");
      $("#currentDay").text(currentday);
    }, 1000); //in millisecond
  }
  //calling the dateTime function
  dateTime();

  var workHours = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ];
  //creating a forloop to go over the hours and create the rows and the save buttons.
  //the FOreach is the create element for the element in the workHours Array
  workHours.forEach(function (time, text) {
    var startTime = [];
    //Push the hour to the end of the Array
    startTime.push(moment().hour(time).format("h A")); //display time in AM.PM format
    // console.log(p(startTime));
    console.log(moment().hour());

    //create the rows and elements using jQuery
    var row = $("<div></div>").addClass("row time-block");
    var hour = $("<div></div>").addClass("hour col-2").text(time);
    var description = $("<textarea></textarea>")
      .addClass("description col-8")
      .text(text);

    var button = $("<button></button>").addClass("saveBtn col-2");
    var icon = $("<i></i>").addClass("fas fa-save");

    //appending the Button to the Icon
    button.append(icon);
    //Appending everything else to the Row
    row.append(hour, description, button);
    //Append the Rows to the container class from the HTML
    $(".container").append(row);
    $(".saveBtn").click(function () {
      var time = $(this).siblings("hour").val();
      // console.log(time);
      var input = $(this).siblings("description").children("textarea").text();
      console.log(input);
      localStorage.setItem(time, input);
    });
  });
});
