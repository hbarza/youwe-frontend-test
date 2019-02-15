<p align="center">
    <h1 align="center">CODNITIVE</h1>
    <h2 align="center">Youwe Frontend Test</h2>
    <br>
</p>

This repository is for Youwe frontend assessment

You can find a live version of test application on this address:
[http://youwe.fe.cooode.run/](http://youwe.fe.cooode.run/)

### Test A: HTML Templates (mandatory)
This assignment concerns a social intranet for our client CuraNu. Make html templates from the supplied
designs. The design will be delivered on desktop format. The Templates will also have to be viewable on
the tablet and the mobile phone.

The contact form must be validated, the form may not be sent before all fields have been filled in
correctly. The data does not have to be sent to somewhere.

You may use the following technologies: HTML, CSS (SASS) and Javascript. When setting up the HTML you
do not have to use frameworks like Bootstrap or Foundation.

You can find template files in `resources` directory.

### Test B: Accordion (mandatory)
In the design an accordion is placed at the top left of the homepage. You can use jQuery, underscore or other libraries, as long as the functionality of accordion works 100% customization.
Conditions:
1. Clicking on the head of a closed block causes the block to open and
the text below will become visible. Folding the block open must animate.
2. Clicking on the head of an open block closes the block. Closing the block
Must also animate.
3. Make sure that when you click on the head of a closed block, that you have to change (earlier)
the open blocks that are closed. This must be an option that can be turned on or of
when creating the object.
4. Make an option that ensures that the first block is open when initiating. This must
an option that can be turned on or of when creating the object.

I wrote this test with vanilla javascript as well.

DIRECTORY STRUCTURE
-------------------

      app/                contains all blocks html files
      assets/             contains all css, js, fonts and images of template 
      resources/          contains assessment design and needed files 


REQUIREMENTS
------------

The minimum requirement by this project:
* PHP
* Nginx


INSTALLATION
------------

### Installation

Just clone repository to your webserver public dirctory and configure server to have access to pages.


CONFIGURATION
-------------

### Web Server
You should make a copy from `nginx-local.conf-SMPL` to `nginx-local.conf` and config `server_name`, `root` and `fastcgi_pass` options as you need, if you are using nginx web server.


**NOTES:**
- For access to contact form page you must go to `/contact.php` address (Example: http://curanu.loc/contact.php)
