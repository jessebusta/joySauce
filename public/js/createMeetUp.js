var titleInput = $('#title');
var userObject = JSON.parse(window.sessionStorage.getItem('data'));
var bodyInput = $('#body');

$('body').on('click', '#createMeetSubmit', createMeetup);


function createMeetup(event) {

  event.preventDefault();

  if(!titleInput.val().trim()){
    return;
  }

  upsertMeetup({
    username: userObject.username,
    title: titleInput.val().trim(),
    body: bodyInput.val()
  });
}

function upsertMeetup(meetUpData){
  $.post('/api/createdMeetups', meetUpData).then();
}
