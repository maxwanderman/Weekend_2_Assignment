$(function(){

//Declaring global variables
var spaceOdessey = {};
var thereWillBeBlood = {};
var theCore = {};
var countOdessy = 0;
var countBlood = 0;
var countCore = 0;

//on.click for first movie
$("#2001").children().on('click', function(){
    //first if statement to fill in div with information from ajax request
    if(countOdessy === 0){
      //ajax request
    $.ajax({
      url: 'http://www.omdbapi.com/?t=2001&y=&plot=short&r=json',
      type: 'GET',
    }).done(function(response){
      console.log(response);
      spaceOdessey = response;
      //appending and hiding the movie information
      $("#2001").append("<h2>" + spaceOdessey.Title + "</h2>");
      $("#2001 h2").hide();
      $("#2001").append("<img src=\"" + spaceOdessey.Poster + "\">");
      $("#2001 img").hide();
      $("#2001").append("<li> Year: " + spaceOdessey.Year + "</li><li> Director: " + spaceOdessey.Director + "</li><li> IMBD Rating: " + spaceOdessey.imdbRating + "</li>");
      $("#2001 li").hide();
      $("#2001").append("<p>" + spaceOdessey.Plot + "</p>");
      $("#2001 p").hide();
      //jQuery animations to reveal
      $("#2001 h2").fadeIn(1000);
      $("#2001 img").delay(1000).fadeIn(1000);
      $("#2001 li").delay(2000).slideDown(400);
      $("#2001 p").delay(2000).slideDown(400);
      countOdessy++;
      });
    } else if(countOdessy % 2 === 1){
      //jQuery animations to hide
      $("#2001 p").slideUp(400);
      $("#2001 li").slideUp(400);
      $("#2001 img").delay(1000).fadeOut(400);
      $("#2001 h2").delay(2000).fadeOut(400);
      countOdessy++;
    } else {
      //jQuery animations to show again
      $("#2001 h2").fadeIn(1000);
      $("#2001 img").delay(1000).fadeIn(1000);
      $("#2001 li").delay(2000).slideDown(400);
      $("#2001 p").delay(2000).slideDown(400);
      countOdessy++;
      }
    });
    //on.click for second movie
  $("#Blood").children().on('click', function(){
    //first if statement to fill in div with information from ajax request
    if (countBlood === 0){
      //ajax request
    $.ajax({
      url: 'http://www.omdbapi.com/?t=There+will+be+blood&y=&plot=short&r=json',
      type: 'GET',
    }).done(function(response){
      console.log(response);
      thereWillBeBlood = response;
      //appending and hiding the movie information
      $("#Blood").append("<h2>" + thereWillBeBlood.Title + "</h2>");
      $("#Blood h2").hide();
      $("#Blood").append("<img src=\"" + thereWillBeBlood.Poster + "\">");
      $("#Blood img").hide();
      $("#Blood").append("<li> Year: " + thereWillBeBlood.Year + "</li><li> Director: " + thereWillBeBlood.Director + "</li><li> IMBD Rating: " + thereWillBeBlood.imdbRating + "</li>");
      $("#Blood li").hide();
      $("#Blood").append("<p>" + thereWillBeBlood.Plot + "</p>");
      $("#Blood p").hide();
      //jQuery animations to reveal
      $("#Blood h2").fadeIn(1000);
      $("#Blood img").delay(1000).fadeIn(1000);
      $("#Blood li").delay(2000).slideDown(400);
      $("#Blood p").delay(2000).slideDown(400);
      countBlood++;
      });
    } else if(countBlood % 2 === 1){
      //jQuery animations to hide
      $("#Blood p").slideUp(400);
      $("#Blood li").slideUp(400);
      $("#Blood img").delay(1000).fadeOut(400);
      $("#Blood h2").delay(2000).fadeOut(400);
      countBlood++;
    } else{
      //jQuery animations to show again
      $("#Blood h2").fadeIn(1000);
      $("#Blood img").delay(1000).fadeIn(1000);
      $("#Blood li").delay(2000).slideDown(400);
      $("#Blood p").delay(2000).slideDown(400);
      countBlood++;
    }

    });
    //on.click for third movie 
  $("#Core").children().on('click', function(){
    //first if statement to fill in div with information from ajax request
    if(countCore === 0){
      //ajax request
    $.ajax({
      url: 'http://www.omdbapi.com/?t=The+core&y=&plot=short&r=json',
      type: 'GET',
    }).done(function(response){
      console.log(response);
      theCore = response;
      //appending and hiding the movie information
      $("#Core").append("<h2>" + theCore.Title + "</h2>");
      $("#Core h2").hide();
      $("#Core").append("<img src=\"" + theCore.Poster + "\">");
      $("#Core img").hide();
      $("#Core").append("<li> Year: " + theCore.Year + "</li><li> Director: " + theCore.Director + "</li><li> IMBD Rating: " + theCore.imdbRating + "</li>");
      $("#Core li").hide();
      $("#Core").append("<p>" + theCore.Plot + "</p>");
      $("#Core p").hide();
      //jQuery animations to reveal
      $("#Core h2").fadeIn(1000);
      $("#Core img").delay(1000).fadeIn(1000);
      $("#Core li").delay(2000).slideDown(400);
      $("#Core p").delay(2000).slideDown(400);
      countCore++;
      });
    } else if(countCore % 2 === 1){
      //jQuery animations to hide
      $("#Core p").slideUp(400);
      $("#Core li").slideUp(400);
      $("#Core img").delay(1000).fadeOut(400);
      $("#Core h2").delay(2000).fadeOut(400);
      countCore++;
    } else {
      //jQuery animations to show again
      $("#Core h2").fadeIn(1000);
      $("#Core img").delay(1000).fadeIn(1000);
      $("#Core li").delay(2000).slideDown(400);
      $("#Core p").delay(2000).slideDown(400);
      countCore++;
    }
    });

















});
