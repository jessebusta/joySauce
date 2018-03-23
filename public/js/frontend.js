
console.log('js linked');
// parsed user object on login
var userObject = JSON.parse(window.sessionStorage.getItem('data'));


// pulls intrests from sql and creates buttons on dashboard page.
function getInterests() {
  $.get('/api/allInterests', function(data){
    var interestsArray = [];
    for (var i = 0; i < data.length; i++) {
      interestsArray.push(data[i].Interests_name)
    }
    console.log(interestsArray);
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





// createInterestButtons();
// function createProfileInfo() {
//     $("#additional").empty();
//     for (let j = 0; j < profileArray.length; j++) {
//         var profilePane = $("<div>");
//         profilePane.addClass('profile-info');
//         profilePane.attr('data-profile', profileArray[j]);
//         profilePane.text(profileArray[j]);
//         $("#additional").append(profilePane);
//     }
// };
// createProfileInfo();
// function displayPostInfo() {
//     $('#small-pane').empty();
//     for (let i = 0; i < postArray.length; i++) {
//         var postPane = $("<div>");
//         postPane.addClass('post-info');
//         postPane.attr('data-post', postArray[i]);
//         postPane.text(postArray[i]);
//         $('#small-pane').append(postPane);
//     }
// }
// displayPostInfo();
// var email = "joysauce@gmail.com";
// var username = "Joy Sauce Project Contributors";
// $(".username").text(username);
// $(".email").text(email);
