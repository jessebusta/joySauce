

var titleInput = $('#title');
var userObject = JSON.parse(window.sessionStorage.getItem('data'));
var bodyInput = $('#body');

var buttonAttr

var targetMeetup = $(".meetupInfo");


$('body').on('click', '.meetups-button', function() {
  targetMeetup.empty();
  buttonAttr = $(this).attr("data-Meetups");
  console.log(buttonAttr);
  upsertMeetup();

});



function upsertMeetup(){
  var url = '/api/meetupInfo/' + buttonAttr;
  console.log(url);
  $.get(url, function(data) {
    console.log("this is the response   " + data.username);
    console.log("this is the response   " + data.title);
    console.log("this is the response   " + data.body);

    var meetupTitle = $("<h2>");

    meetupTitle.addClass("bg bg-info text-white p-3")

    meetupTitle.html(data.title);

    var meetupBody = $('<p>');

    meetupBody.html(data.body);

    var meetupUser = $("<h4>");

    meetupUser.addClass("bg bg-info text-white p-3")

    meetupUser.html(data.username);

    targetMeetup.append(meetupTitle);
    targetMeetup.append(meetupBody);
    targetMeetup.append(meetupUser);


  });
}
