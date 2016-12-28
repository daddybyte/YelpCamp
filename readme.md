#Add Mongoose
* Install and configure Mongoose
* Setup campground model
* Use campground model inside of our routes



#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template
* 

RESTful Routes

name       url           verb         desc.
==========================================
Index  /dogs GET Display a list of all dog
NEW    /dogs/new GET  Displays form to make a new dog
CREATE  /dogs   POST Add new dog to DB
SHOW    /dogs/:id GET Shows info about one dog 

INDEX    /campgounds
NEW      /campgounds/new
CREATE   /campgounds
SHOW     /campgounds/:id

NEW      campgounds/:id/comments/new   GET
CREATE   campgounds/:id/comments       POST

##Auth Pt. 1 - Add User Model
*Install all packages needed for auth 
*Define User model

##Auth Pt. 2 - Register
*Configure Passport
*Add register routes
*Add register template

##Auth Pt. 3 - Login
*Add login routes
*Add login template

##Auth Pt. 4 - Logout/Navbar
*Add logout route
*Prevent user from adding a comment if not signed in
*Add links to navbar
*Show/hide auth links correctly

##Auth Pt. 5 - Show/Hide Links
*Show/hide auth links in navbar correctly

##Refactor The Routes
*Use Express router to reorganize all routes

##Users + Comments
*Associate users and comments
*Save author's name to a comment automatically

##Editing Campgrounds
*Add Method-Override
*Add Edit Route for Campgrounds
*Add Link to Edit Page
*Add Update Route

##Deleting Campgrounds
*Add Destroy Route
*Add Delete button

Campground Destroy Route: /campgounds/:id
Comment Destroy Route:    /campgounds/:id/comments/:comment_id

##Authorization
*User can only edit his/her campgounds
*User can only delete his/her campgrounds
*Hide/Show edit and delete buttons
*Refactor Middleware

##Adding in Flash
*Demo working version
*Install and configure connect-flash
*Add bootstrap alerts to header