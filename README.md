Service-Manager
===============

Web service manager for all your local gadgets such as RPi, SickBeard, SABnzbd, CouchPotato etc. It is design to allow you to open 1 page where you can view all of your services kinda like bookmarks. Every page stays loaded and loads in the background so you can switch back and forth. This will need to be loaded onto your local server to be able to run it (or you can use it locally on your computer without the need for MAMP at this stage).


This is still in the very early stages of development, so please feel free to help.


INSTRUCTIONS
============

1. Change the src=“”; within the iframes to your required url of your service you wish to use. e.g. src=“http://192.168.2.3:8080”;

You can add as many iframes as you wish. Currently I have setup 5 + a setting page for future development (not currently working).

2. If you add more than the current 5 iframes you will have to add more jquery code within the site.js file. 

Just copy the previous one and change accordingly.

Additionally, you will need to add some css for the blue active bar to move to the correct location (this will not be done like this in the future - I will do it differently). To do this add another class to the style.css page for each additional iframe e.g. 
.act-btn-5 {
	top:288px;
} 
except change the 5 to the next number of iframe e.g. 6,7,8 (make sure you also reflect this change in the ID of the html iframe in which has been copyed) etc.

