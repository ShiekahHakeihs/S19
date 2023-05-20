function login() {
	username = prompt("Enter your Username");
	password = prompt("Enter your Password");
	role = prompt("Enter your Role");
	if (username == null || password == null || role == null) {
		alert("Error, something is wrong with your input. Please try again.")
	}
	else {
		switch(role) {
			case "admin": case"Admin":
				console.log(`Welcome back to the class portal, admin! ${username}`)
				break;
			case "teacher": case"Teacher":
				console.log(`Thank you for logging in, Teacher! ${username}`)
				break;
			case "student": case"Student":
				console.log(`Welcome to the class portal Student! ${username}`)
				break;
			default:
				console.log(`Role out of range. ${username}`);
				break;
		}
	}
}

login()

function gradeCalcu(int1, int2, int3, int4) {
	var sum = int1 + int2 + int3 + int4;
    var ave = sum / 4;

    ave = Math.round(ave);

	if (ave >= 96) {
		console.log(`Hello, student, your average is ${ave}. The letter equivalent is A+`);
	} else if (ave >= 90 && ave <= 95){
		console.log(`Hello, student, your average is ${ave}. The letter equivalent is A`);
	} else if (ave >= 85 && ave <= 89){
		console.log(`Hello, student, your average is ${ave}. The letter equivalent is B`);
	} else if (ave >= 75 && ave <= 84){
		console.log(`Hello, student, your average is ${ave}. The letter equivalent is C`);
	} else {
		console.log(`Hello, student, your average is ${ave}. The letter equivalent is F`);
	} 
}
var userNum = [];
for (var i = 1; i <=  4; i++) {
	var userInput = parseFloat(prompt(`Enter Number ${i}`));
	userNum.push(userInput)
}

gradeCalcu(userNum[0],userNum[1],userNum[2],userNum[3]);