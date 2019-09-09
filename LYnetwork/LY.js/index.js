/*  导航栏双态按钮  */ 
$("#content>ul.aa").click(function(e){
    var $a=$(e.target);
    if($a.is(".nav-link")){
      $a.addClass("act-a");
      $a.parent().siblings().children().removeClass("act-a");
    }
  })


/*   title动画效果   */
  $(window).load(function(){
    $("div.title").addClass("aav")
})

    
