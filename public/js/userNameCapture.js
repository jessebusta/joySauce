


    var userObject ={};

    $("body").on("click",".userNameCapture", function() {

        var email = $("#signin-email").val().trim();

        function getUserName() {

          var queryUrl = '/api/user/' + email;
          $.ajax({
            url: queryUrl,
            type: 'GET',
            success: function(res) {
              console.log(res);
             var localStorageUser =  window.sessionStorage.setItem('data', JSON.stringify(res));
              userObject = JSON.parse(localStorageUser);
            }
        });
        };

        getUserName();
    });
