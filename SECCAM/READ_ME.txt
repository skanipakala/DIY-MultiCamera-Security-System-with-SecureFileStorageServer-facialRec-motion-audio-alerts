# Smart-Security-System-with-Flask-Server-Streaming-Filehost
* Primarily using openCV and Flask module to create a LAN server that will stream multiple USB camera live feeds, while allowing user to download motion triggered footage directly from any device on the network. 
* Using JQuery JS in the backend to allow download links to .mp4 files

## READ THIS FIRST:
* Put all downloaded files into folder called 'SECCAM'
* USB camera 1 will be used for outdoor monitoring. It will record 10 second clips when motion detected.
* USB camera 2 will be used for indoor motion detection. If motion detected, it will take pictures and store them in 'images' folder
* Flask server will stream both camera feeds and filehost .mp4 files of camera 1 from 'static' folder
* There are .mp3 files that will play to alert intruders and update users on system status

## STEP 1: pip install the following modules:
* opecv-python
* opencv-contrib
* flask
* json
* time
* datetime

## STEP 2: Modify code to your needs:
* Change file path in lines 97, 98, 130, 139
* Change IP address to yours at bottom of 'securityCamera.py' file

* Change IP address to yours in 'get_json.js' inside 'static' folder
* Change file paths in 'get_json.js' inside 'static' folder

## STEP 3: connect up to 2 usb cameras and run 'cameraServer.py'
* Open browser, go to http://[ip address]:[portnumber] to see live feed and access server files

## STEP 4 (OPTIONAL): Haar classifers
* Comment lines 21/22 depending on what haar classifier you want to use for USB camera #2

## STEP 5 (OPTIONAL): Access files outside of LAN
* Download 'Google backup & sync' and sync folder to google drive automatically

# Enjoy and contact me if there are any errors/questions! :)
