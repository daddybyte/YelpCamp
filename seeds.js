//error driven developement
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment  = require("./models/comment");

var data = [
    {
        name: "Kauai",
        image: "https://camping.ehawaii.gov/camping/resources/spc,resource,57846,p,2,null,KokeeCamp.jpg",
        description: "Fingerstache quinoa activated charcoal, sartorial mlkshk keffiyeh non put a bird on it vegan. Waistcoat tilde fugiat subway tile hoodie lyft. Ugh pariatur cred literally chartreuse enim. Hammock kinfolk humblebrag vaporware veniam. Helvetica viral neutra prism 3 wolf moon fanny pack."
    },
    {
        name: "Kauai2",
        image: "http://www.to-hawaii.com/kauai/beaches/images/lucywright/lucy_wright_beach_park.jpg",
        description: "Fingerstache quinoa activated charcoal, sartorial mlkshk keffiyeh non put a bird on it vegan. Waistcoat tilde fugiat subway tile hoodie lyft. Ugh pariatur cred literally chartreuse enim. Hammock kinfolk humblebrag vaporware veniam. Helvetica viral neutra prism 3 wolf moon fanny pack."
    },
    {
        name: "Kauai3",
        image: "https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/4/c/a/8/600_451879624.jpeg",
        description: "Fingerstache quinoa activated charcoal, sartorial mlkshk keffiyeh non put a bird on it vegan. Waistcoat tilde fugiat subway tile hoodie lyft. Ugh pariatur cred literally chartreuse enim. Hammock kinfolk humblebrag vaporware veniam. Helvetica viral neutra prism 3 wolf moon fanny pack."
    }
    
    ]
    

//clear the DB
function seedDB(){
  Campground.remove({}, function(err){
    if(err){
        console.log(err);
    }
    console.log("removed campgrounds!");
    //add a few campgrounds
  data.forEach(function(seed){
     Campground.create(seed, function(err, campground){
         if(err){
             console.log(err);
         } else {
             console.log("added a campground");
             //create a comment
            //callback
             Comment.create(
                 {
                 text: "This place is great, but I wish there was internet!!",
                 author: "Homer"
             
         }, function(err, comment) {
             if(err){
                 console.log(err);
             } else {
             campground.comments.push(comment);
             campground.save();
             console.log("Created new comment");
            }
         });
        }
      });
    });
  });
  
//   add comments
}


//this will send the above funcion out
module.exports = seedDB;
