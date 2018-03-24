console.log('js linked');
// parsed user object on login
var userObject = JSON.parse(window.sessionStorage.getItem('data'));


// pulls intrests from sql and creates buttons on dashboard page.
function getInterests() {
  $.get('/api/allInterests', function(data) {
    var interestsArray = [];
    for (var i = 0; i < data.length; i++) {
      interestsArray.push(data[i].Interests_name)
    }
    console.log('this is the interest array' + interestsArray);
    var profileArray = ['test', 'data', 'profile'];
    var postArray = ['post', 'test', 'content'];

    function createInterestButtons() {
      $("#interest-button-div").empty();
      for (let i = 0; i < interestsArray.length; i++) {
        var interestButton = $("<button>");
        interestButton.addClass('interest-button');
        interestButton.attr('data-interest', interestsArray[i]);
        interestButton.text(interestsArray[i]);
        $("#interest-button-div").append(interestButton)
      }
    };
    createInterestButtons();
  });
};

getInterests();


// display userName and display on dashboard;

function displayUserNameDash() {
  console.log(userObject);
  $('#userNameDisplay').html("Welcome " + userObject.username);
}

displayUserNameDash();
//


function getMyMeetups() {
  var url = '/api/createdMeetups/' + userObject.username;
  console.log(url);
  var myMeetupsArray = [];

  $.get(url, function(data) {
    for (var i = 0; i < data.length; i++) {
      myMeetupsArray.push(data[i].title)
      console.log(data[i].title);
    };
    myMeetupsList();
  });

  console.log('this is mymeetups array ' + myMeetupsArray);

  function myMeetupsList() {
    $("#myMeetupsItems").empty();
    var myMeetupsUL = $("<ul>");
    for (let i = 0; i < myMeetupsArray.length; i++) {
      var myMeetupsLI = $("<li>");
      var myMeetupsButton = $("<button>");
      myMeetupsButton.addClass('meetups-button m-2 btn btn-info');
      myMeetupsButton.attr('id', 'meetID' + i);
      myMeetupsButton.attr('data-Meetups', myMeetupsArray[i]);
      myMeetupsButton.text(myMeetupsArray[i]);
      myMeetupsLI.append(myMeetupsButton);
      myMeetupsUL.append(myMeetupsLI);
      $("#myMeetupsItems").append(myMeetupsUL);
    }
  };
  console.log("this is the end!");
}

getMyMeetups();

function getAllMeetups() {
  var url = '/api/createdMeetups/';
  console.log(url);
  var allMeetupsArray = [];

  $.get(url, function(data) {
    for (var i = 0; i < data.length; i++) {
      allMeetupsArray.push(data[i].title)
      console.log(data[i].title);
    };
    allMeetupsList();
  });

  console.log('this is mymeetups array ' + allMeetupsArray);

  function allMeetupsList() {
    $("#allMeetupsItems").empty();
    var myMeetupsUL = $("<ul>");
    for (let i = 0; i < allMeetupsArray.length; i++) {
      var myMeetupsLI = $("<li>");
      var myMeetupsButton = $("<button>");
      myMeetupsButton.addClass('meetups-button m-2 btn btn-info');
      myMeetupsButton.attr('id', 'meetID' + i);
      myMeetupsButton.attr('data-Meetups', allMeetupsArray[i]);
      myMeetupsButton.text(allMeetupsArray[i]);
      myMeetupsLI.append(myMeetupsButton);
      myMeetupsUL.append(myMeetupsLI);
      $("#allMeetupsItems").append(myMeetupsUL);
    }
  }
}

  getAllMeetups();
