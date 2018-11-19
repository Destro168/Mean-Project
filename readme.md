# MEAN Project!

This is the **MEAN Project** built with the latest versions of Mongoose, ExpressJS, AngularJS and Node.js. This project demonstrates techniques and best practices that display the viability of the **MEAN** stack.

# Usage

* Make sure MongoDB is installed. If it isn't, then install it.
* Make sure to edit 'start-mongo-server.bat' to have a proper path for your data/db folders, assuming that they are not in the default location.
* Click 'start-mongo-server.bat' to start the database.
* Click 'start-node-server.bat' to start the web server.
* Open index.html in any browser to have the web page display.

# MEAN Stack Components:

## AngularJS

* Forms the foundation of the website.
* Uses intelligent layout to separate client and server files into two main folders.
* Uses Components to organize code in an optimized manner similar to Angular 2 Components.
* Handles all front-end display and logic (view and controller).

## Node.js

* Software technology that enables the hosting of a web server.
* Uses written ExpressJS and MongooseJS code to define operations.

## ExpressJS

* Javascript library that reduces boilerplate code necessary to perform Node.js operations.
* Fundamentally acts as an EventListener that executes certain actions upon receiving incoming requests.
* Returns response data to requests.
* Calls mongoose functions to interface with the database.

## Mongoose

* Javascript library that reduces boilerplate code necessary to connect to and interface with MongoDB.
* Replaces the need for 'MangoClient', the mongoDB javascript driver.
* Performs CRUD operations on the database.
