/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	language: 'en',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'alert',
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'calendar',
			header: 'US Holidays',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'https://calendar.google.com/calendar/ical/veabri77bae3s6ceg1gi3ms2ig%40group.calendar.google.com/private-e14335aa75c42d2029875ca64920489d/basic.ics'
					}
				]
			}
		},
		{
			module: 'compliments',
			position: 'lower_third'
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Bergkamen',
				locationID: '2950344',  //ID from http://www.openweathermap.org
				appid: '095b7d88ccf1734103dc99d3d458773c'
			}
		},
		{
        module: 'MMM-Callmonitor-Current-Call',
        position: 'top_right',  // This can be any of the regions. Best results in left or right regions.
        header: "Active Calls", // This is optional
    },
		{
        module: 'MMM-FRITZ-Box-Callmonitor',
        position: 'top_right',  // This can be any of the regions. Best results in left or right regions.
        header: "Recent calls", // This is optional
        config: {
            // See 'Configuration options' for more information.
        }
    },
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
				location: 'Bergkamen',
				locationID: '2950344',  //ID from http://www.openweathermap.org
				appid: '095b7d88ccf1734103dc99d3d458773c'
			}
		},
		{
    module: "MMM-Fuel",
    position: "top_center",
    config: {
        api_key: "52fa0323-a9cb-f7ad-9553-82531ce44108",
        lat: 51.6158082,
        lng: 7.6429742,
        types: ["e5"],
      }
    },
		{
    module: 'MMM-Traffic',
    position: 'top_left',
    classes: 'dimmed medium', //optional, default is 'bright medium', only applies to commute info not route_name
    config: {
        api_key: 'AIzaSyAaecIO66_Ch2BbC8kYbH2KP7tI9YBE6ZE',
        mode: 'driving',
        origin: 'Oberadener Heide 15, Bergkamen, 59192',
        destination: 'universitaetsstrasse 140, Bochum, 44799',
        arrival_time: '0800', //optional, but needs to be in 24 hour time if used.
        route_name: 'Benjamin zur Arbeit',
        changeColor: true,
        showGreen: false,
        limitYellow: 5, //Greater than 5% of journey time due to traffic
        limitRed: 20, //Greater than 20% of journey time due to traffic
        traffic_model: 'pessimistic',
        interval: 120000 //2 minutes
    }
},
{
module: 'MMM-Traffic',
position: 'top_left',
classes: 'dimmed medium', //optional, default is 'bright medium', only applies to commute info not route_name
config: {
		api_key: 'AIzaSyAaecIO66_Ch2BbC8kYbH2KP7tI9YBE6ZE',
		mode: 'driving',
		origin: 'Oberadener Heide 15, Bergkamen, 59192',
		destination: 'Kreativ-allee, Hamm, 59069',
		arrival_time: '0800', //optional, but needs to be in 24 hour time if used.
		route_name: 'Yvonne zur Arbeit',
		changeColor: true,
		showGreen: false,
		limitYellow: 5, //Greater than 5% of journey time due to traffic
		limitRed: 20, //Greater than 20% of journey time due to traffic
		traffic_model: 'pessimistic',
		interval: 120000 //2 minutes
}
},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "Die Welt",
						url: "http://www.welt.de/?service=Rss"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
