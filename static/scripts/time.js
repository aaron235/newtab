function updateDate() {
	window.currentDate = new Date();
}


function getTime() {
	var hours, minutes, seconds, meridiem;

	hours = window.currentDate.getHours();
	minutes = window.currentDate.getMinutes();
	seconds = window.currentDate.getSeconds();

	meridiem = "AM";
	if ( hours > 12 ) {
		hours -= 12;
		meridiem = "PM";
	}

	if ( minutes < 10 ) {
		minutes = '0' + minutes;
	}

	if ( seconds < 10 ) {
		seconds = '0' + seconds;
	}

	return hours + ":" + minutes + ":" + seconds + " " + meridiem;
}

var days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];

var months = [
	"January",
	"Feburary",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

function getDate() {
	var day, date, month, year;

	day = window.currentDate.getDay();
	date = window.currentDate.getDate();
	month = window.currentDate.getMonth() + 1;
	year = window.currentDate.getFullYear();

	dateStr = date.toString();
	if ( dateStr[dateStr.length - 1] == '0' ||
 	     dateStr[dateStr.length - 1] == '4' ||
	     dateStr[dateStr.length - 1] == '5' ||
	     dateStr[dateStr.length - 1] == '6' ||
	     dateStr[dateStr.length - 1] == '7' ||
	     dateStr[dateStr.length - 1] == '8' ||
	     dateStr[dateStr.length - 1] == '9' ) {
		dateStr += "<sup>th</sup>";
	} else if ( dateStr[dateStr.length - 1] == '1' ) {
		dateStr += "<sup>st</sup>";
	} else if ( dateStr[dateStr.length - 1] == '2') {
		dateStr += "<sup>nd</sup>";
	} else if ( dateStr[dateStr.length - 1] == '3' ) {
		dateStr += "<sup>rd</sup>";
	}

	day = days[day];
	month = months[month];

	return day + ", " + month + " " + dateStr + ", " + year;
}

function getSalutation() {
	var hour = window.currentDate.getHours();

	if ( hour >= 6 && hour <= 11 ) {
		return "Good morning!";
	} else if ( hour >= 12 && hour <= 17 ) {
		return "Good afternoon!";
	} else if ( hour >= 18 && hour <= 23 || hour == 0 ) {
		return "Good evening!";
	} else {
		return "Go to sleep.";
	}
}

function updateDateInfo() {
	document.getElementById( 'salutation' ).innerHTML = getSalutation();
	document.getElementById( 'time' ).innerHTML = getTime();
	document.getElementById( 'date' ).innerHTML = getDate();
}

window.onload = function() {
	updateDate();
	updateDateInfo();

	window.setInterval( updateDate, 500 );
	window.setInterval( updateDateInfo, 500 );
};
