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