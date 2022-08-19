new Swiper('.swiper',{
    slidesPerView: 4,
    spaceBetween: 30,
    // loop:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
        
    }
})


$(".menu>li>a").click(function(e){
    e.preventDefault();

    
    $(".menu>li>a").parent().find(".submenu").hide()

    if( $(this).hasClass("active")){
        $(".menu>li>a").removeClass("active");

    }else{
        $(this).parent().find(".submenu").show();

        $(".menu>li>a").removeClass("active"); 
        $(this).addClass("active");
    }

})