# Timer for Websites That Steal Your Time

This project helps to control time was spent on Habrahabr and Geektimes sites. It requires special extension for Chrome browser.

# Installing

Install extension for Chrome browser [Custom JavaScript for websites](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija).

Open configuration of [cjs](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija) browser extension on the site you want to controll. Click on the link "your own external scripts", add path 

	https://github.com/dmigach/34_timemachine/blob/master/index.js
	
Don`t forget to press "enable cjs for this host" to enable custom JS.

## How it works

After pressing 'Save' page will reload and you will see timer in upper left corner set up on 5 minutes.

 After 5 minutes will pass, alert window that ought to stop you from procrastination will show up. Alert will show up every 30 seconds.
 
 You can navigate website and timer will still save the state within one session.

## Support

In case of any difficulties or questions please contact <dmitrygach@gmail.com>.
