(function(){
  var app = angular.module('leaderBoard', []);
  
  var email = localStorage.getItem("userEmail");
  
  var current_month = moment().endOf('month').format('MMMM YYYY');
  

  var leaderboard = {
    month: current_month,
    contributed_amount: 0,
    goal: 0,
    users: []
  };    

  app.controller("LeaderBoardController", ['$http', '$window', function($http, $window){
    this.leaderboard = leaderboard;
    
    $http.get('http://mov3it.herokuapp.com/api/new_leaderboard', {params: { "month" : current_month, "user_email" : email }}).success(function(data){
      leaderboard.goal = data.monthly_goal;
      leaderboard.contributed_amount = data.monthly_total_amount;
      leaderboard.users = data.leaderboard;
    });

    this.interactWith = function(user){
      console.log(user.interactable);
      if(user.interactable == 'active'){
        $http.post('http://mov3it.herokuapp.com/api/user/bump', {params: { "from_user_email": email , "to_user_email" : user.email }}).success(function(data){
          console.log("bumped");
        });
      }else if(user.interactable == 'inactive')
        $http.post('http://mov3it.herokuapp.com/api/user/nudge', {params: { "from_user_email": email , "to_user_email" : user.email }}).success(function(data){
          console.log("nudged");
        });
      };

    this.showProfile = function(user){
      $window.location.href = 'user_profile.html?email=' + user.email;
    };
  }]);
  
  app.directive("userList", function(){
    return {
      restrict: 'E',
      templateUrl: 'user-list.html'
    };
  });
  
})();
