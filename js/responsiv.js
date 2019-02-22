$(function (){
    isNabBarHidden = true;
   $('#nav_bar_menu_icon').click(function (){
       if(isNabBarHidden){
           $('body > header .header_nav_bar .nav_bar').show();
           isNabBarHidden = false;
       }
        else{
            $('body > header .header_nav_bar .nav_bar').hide();
           isNabBarHidden = true
        }
   });
});