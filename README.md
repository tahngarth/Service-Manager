# Service-Manager

Web service manager for all your local gadgets such as RPi, SickBeard, SABnzbd, CouchPotato etc. It is design to allow you to open 1 page where you can view all of your services kinda like bookmarks. Every page stays loaded and loads in the background so you can switch back and forth. This will need to be loaded onto your local server to be able to run it (or you can use it locally on your computer without the need for MAMP at this stage).


This is still in the very early stages of development, so please feel free to help with any modifiactions.

NOTE: ONLY TESTED ON GOOGLE CHROME
****

#### Security

Please keep in mind that Service Manager can be vulnerable to security issues depending on how you utilise it. For e.g if you setup SM accessible through WAN other people on the internet could gain access to your setup services and make changes to them. Additionally, if you store username & password within your URL to auto login to services, these people can then see these. We recommend you do not allow WAN access for SM until we have added security protection for this in the future. If you are a developer and wish to help with this please do. 

### Instructions
--

##### Getting it to work:

Change the url for each iframe. Currently, there are 5 iframes. To do this change the `src=“”` within the iframes to your required url of your service you wish to use. e.g. `src=“http://192.168.2.3:8080”`

##### Adding Username and Passwords to URL for auto login

If you wish to be auto logged into services you can do so by modifying your from the normal `src=“http:192.168.2.148:8080”` to `src="http://user:pass@localhost:8080/“`.

Keep in mind, this is a security issue if SM has WAN access. If it’s just on your LAN, then it’s fine.

##### Adding more iframes:

1. Copy & paste the last iframe 
e.g. `<iframe class="iframe-wrapper none" id="5-win" src="http://apple.com" frameborder="0"></iframe>`
change the id to the next number e.g. 6-win, 7-win, 8-win etc. 

2. Change the url as needed.

3. Copy & paste another button. E.g. 
```html
<!--------------button 6-------------------->
<a id="6-btn" href="#"><li class="icon" id="s-NEW-ID-ENTERED-HERE"></li></a>
		<div id="border-top"></div>
	 <div id="border-btm"></div>
```
4. Copy & paste another jquery function within the site.js file. This below will work for iframe/button 6.
e.g.
```
$(function() {
$('#6-btn').click(function() {
	$('#1-win').hide(true);
	$('#2-win').hide(true);
	$('#3-win').show(true);
	$('#settings-win').hide(true);
	$('#s-sab').removeClass('active-nav');	
	$('#s-sb').removeClass('active-nav');
	$('#s-cp').removeClass('active-nav');
	$('#s-hp').removeClass('active-nav');
	$('#s-mc').removeClass('active-nav');	
	$('#s-settings').removeClass('active-nav');
	$('#s-NEW-ID-ENTERED-HERE').addClass('active-nav');	
  });
});
```
5. Additionally, you will need to add 
`$(‘#s-NEW-ID-ENTERED-HERE').removeClass('active-nav’);`	
to every other function in the site.js file.


