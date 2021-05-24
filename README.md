# DIY-MultiCamera-Security-System-with-SecureFileStorageServer-facialRec-motion-audio-alerts
Using Python Flask backend and with HTML/JS/CSS frontend. Able to efficiently handle multiple camera streams using threading. Also has a built in file storage server, so you can quickly upload files to share among family members. Revamped UI to look like professional security software.

# Overview:
* Primarily using openCV and Flask module to create a LAN server that will stream multiple USB camera live feeds, while allowing user to download motion triggered footage directly from any device on the network. Also has a built in file server so you can upload any file from any device on the network. This is to help family members quickly share files.
* Using JQuery JS in the backend to allow download links to .mp4 files

![alt text](https://github.com/skanipakala/DIY-MultiCamera-Security-System-with-SecureFileStorageServer-facialRec-motion-audio-alerts/blob/main/home_screen.PNG)
![alt text](https://github.com/skanipakala/DIY-MultiCamera-Security-System-with-SecureFileStorageServer-facialRec-motion-audio-alerts/blob/main/server.PNG)
![alt text](https://github.com/skanipakala/DIY-MultiCamera-Security-System-with-SecureFileStorageServer-facialRec-motion-audio-alerts/blob/main/archive_image.PNG)



## Step1: Install all of these modules:
* From flask import Flask, render_template, Response, request, jsonify
* import cv2
* import threading
* from datetime import datetime
* import os
* import shutil
* import json
* import psutil
* from werkzeug.utils import secure_filename
* from gtts import gTTS

## STEP 2: Modify code to your needs:
* Change IP address in the START_SERVER.bat file
* Change IP address to yours in 'get_json.js' inside 'static' folder
* Change IP address to yours in 'index.html' inside 'templates' folder
* Change IP address to yours in 'familyserver.html' inside 'templates' folder
* Change IP address to yours in 'archive.html' inside 'templates' folder

## STEP 3: connect up to 2 usb cameras and run 'START_SERVER.bat'
* Open browser, go to http://[ip address]:[portnumber] to see live feed, access camera archives, and server files. You can also use the new better UI.

## CONTROLS:

* You can click on 'Camera Archive' to view .mp4 clips of recordings that were tripped by your camera
* You can click on 'Family Server' to view a Drag&Drop interface to quickly upload files and share with anyone on your network

* 'Indoor Security' switch ON (When you're not home) --> Will save pictures of anyfaces detected. Applies to Camera #2 only
* 'Indoor Security' switch OFF (When you're home) --> You can still preview live and will run facial detection, but will not save anything

* 'Outdoor Security' switch ON --> Will give audio alerts! Will also take ~10sec clips and save to server when motion is triggered 
* 'Outdoor Security' switch OFF --> Will block audio alerts! Will record any video, but you can still preview live

## STEP 4 (OPTIONAL): Haar classifers
* Comment lines 21/22 depending on what haar classifier you want to use for USB camera #2

## STEP 5 (OPTIONAL): Access files outside of LAN
* Download 'Google backup & sync' and sync folder to google drive automatically

# Enjoy and contact me if there are any errors/questions! :)
