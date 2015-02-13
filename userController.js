var appModule=angular.module('myapp',[]);
		appModule.controller('userController', function($scope){
			
			$scope.sortorder='user';

			$scope.users=[
			{user:'user1', vote:0,profession:'teacher'  ,badges:1 },
			{user:'deepak', vote:0 ,profession:'consultant',badges:2},
			{user:'kiran', vote:0,profession:'doctor',badges:1},
			{user:'deepak', vote:0,profession:'engineer',badges:3},
			{user:'deepika', vote:0,profession:'hr',badges:4}];

			$scope.voteUp=function(user){
				user.vote++;
			};
			$scope.voteDown=function(user){
				user.vote--;
			};
		});

		appModule.filter('badge',function(){
			return function(badges){
				switch(badges){
					case 1:
					return "starter";
					case 2:
					return "mediater";
					case 3:
					return "achiever";
					case 4:
					return "topper";
				}
			}
		});