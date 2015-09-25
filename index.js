	var app = angular.module('myApp', []);

	app.controller('personCtrl', function($scope) {

	    $scope.myVar = false;
		$scope.result = '';
	    var nameDisplay = null;
	    var nameResult = null;
	    var filtered = [];

	    $scope.toggle = function() {
	        $scope.myVar = !$scope.myVar;
	        $scope.nameDisplay = $scope.firstName;
	    }

		$scope.draw = function(){
			switch(count){
			case 1:
				$scope.drawBase();
				break;
			case 2:
				$scope.drawPiller();
				break;
			case 3:
				$scope.drawRode();	
				break;
			case 4:
				$scope.drawHanging();	
				break;
			case 5:
				$scope.drawCircle();
				break;
			case 6:
				$scope.drawBody();	
				break;
			case 7:
				$scope.drawLeftHand();
				break;
			case 8:
				$scope.drawRightHand();
				break;
			case 9:
				$scope.drawLeftLeg();
				break;
			case 10:
				$scope.drawRightLeg();
				break;
			}

		};

		$scope.drawBase = function(){
		  var c = document.getElementById("myCanvas");
	      var ctx = c.getContext("2d");
		  ctx.beginPath();
	      ctx.moveTo(20, 550);
	      ctx.lineTo(250, 550);
	      ctx.stroke();

		}
		
		$scope.drawPiller = function(){
		  var c = document.getElementById("myCanvas");
	      var ctx = c.getContext("2d");
		  ctx.beginPath();
	      ctx.moveTo(130, 550);
	      ctx.lineTo(130, 100);
	      ctx.stroke();

		}

		$scope.drawRode = function(){
			var c = document.getElementById("myCanvas");
			var ctx = c.getContext("2d");
			ctx.beginPath();
			ctx.moveTo(130, 100);
			ctx.lineTo(400, 100);
			ctx.stroke();
		}

		$scope.drawHanging = function(){
		  var c = document.getElementById("myCanvas");
	      var ctx = c.getContext("2d");
		  ctx.beginPath();
	      ctx.moveTo(400, 100);
	      ctx.lineTo(400, 150);
	      ctx.stroke();
		}

		$scope.drawCircle = function(){
		  var c = document.getElementById("myCanvas");
	      var ctx = c.getContext("2d");
		  ctx.beginPath();
	      ctx.moveTo(400,150);
	      ctx.arc(400,200,50,0,2*Math.PI);
	      ctx.stroke();
		}

		$scope.drawBody = function(){
		  var c = document.getElementById("myCanvas");
	      var ctx = c.getContext("2d");
		  ctx.beginPath();
	      ctx.moveTo(400,250);
	      ctx.lineTo(400, 450);
	      ctx.stroke();
		}

		$scope.drawLeftHand = function(){
		  var c = document.getElementById("myCanvas");
	      var ctx = c.getContext("2d");
		  ctx.beginPath();
	      ctx.moveTo(400,300);
	      ctx.lineTo(350, 350);
	      ctx.stroke();
		}

		$scope.drawRightHand = function(){
		  var c = document.getElementById("myCanvas");
	      var ctx = c.getContext("2d");
		  ctx.beginPath();
	      ctx.moveTo(400,300);
	      ctx.lineTo(450, 350);
	      ctx.stroke();
		}

		$scope.drawLeftLeg = function(){
		  var c = document.getElementById("myCanvas");
	      var ctx = c.getContext("2d");
		  ctx.beginPath();
	      ctx.moveTo(400,450);
	      ctx.lineTo(350, 500);
	      ctx.stroke();
		}

		$scope.drawRightLeg = function(){
		  var c = document.getElementById("myCanvas");
	      var ctx = c.getContext("2d");
		  ctx.beginPath();
	      ctx.moveTo(400,450);
	      ctx.lineTo(450, 500);
	      ctx.stroke();
		}

	    $scope.next = function(){
			var matchedWord = [];
			var mw = 0;
			var count = 0;
			var guess = $scope.personName || '';
			var wholeString = $scope.nameDisplay || '';
				
			if (wholeString.indexOf(guess) >= 0) {
				var msg1 = "You have entered " + guess + " Matched \n";
				$scope.result += '\n' + msg1;
				matchedWord.push(guess);
				mw++;
			}else{
				var msg2 = "You have entered " + guess + " Missed \n";
				$scope.result += '\n' + msg2;
				count++;
				if(count == 10){
					var msg3 = 'done with all attemepred';
					$scope.result += '\n' + msg3;
					$scope.draw();
					return;
				}
			}		
	    }
	});
