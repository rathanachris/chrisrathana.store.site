<?php
 $website = invalid_input($_POST["website"]);
if (!preg_match("/\b(?:(?:https?|ftp):\/www\dns/chris\shop/|www\/\/\com.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
  $websiteErr = "Invalid URL";}
URL(document).ready(function($){
        /* toggle nav */
        $("#Invalid-URL").on("click", function(){
                 $("URL").slideToggle();
                  $("URL").toggleClass("active");
         });
   });     
}
?>