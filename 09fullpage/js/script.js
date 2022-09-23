
$("#fullpage").fullpage({
    anchors:["1st","2nd","3rd","4th","5th"],
    navigation:true,
    navigationPosition:"fp-right",
    navigationTooltips:["first","second","third","forth","fifth"],
    responsiveWidth:900,
    afterLoad:function(anchorslink,index){
        console.log(anchorslink,index);
        if(index == 1){

            // $("body").css("background","rgb(0,68,56)")
            $(window).resize(function(){ 
                if (window.innerWidth > 760) { 
                    $("h2").css("color","#fff").css("font-size","72px")
                    $("p").css("color","#577e77").css("font-size","72px").css("line-height","100px").css("letter-spacing","18px")
                } else {
                    $("h2").css("color","#fff").css("font-size","36px")
                    $("p").css("color","#577e77").css("font-size","32px").css("line-height","50px").css("letter-spacing","18px")
                }
                }).resize();
            $(".page1").addClass("move")
            $(".page1 .wrap").addClass("move")
            $(".btn_detail").hover(function(){
                $(".btn_detail").css("color","rgb(0,68,56)")
            },function(){
                $(".btn_detail").css("color","#fff")
            })
        }else{
            $(".page1").removeClass("move")
            $(".page1 .wrap").removeClass("move")
        }

        if(index == 2){         

            // $("body").css("background","rgb(248,232,193)")
            $(window).resize(function(){ 
                if (window.innerWidth > 760) { 
                    $("h2").css("color","#bca261")
                    $("p").css("color","#333").css("font-size","36px").css("line-height","54px").css("letter-spacing","initial")
                    
                } else {
                    $("h2").css("color","#bca261")
                    $("p").css("color","#333").css("font-size","18px").css("line-height","50px").css("letter-spacing","initial")
                }
                }).resize();
            $(".page2").addClass("move")
            $(".page2 .wrap").addClass("move")
            $(".btn_detail").hover(function(){
                $(".btn_detail").css("color","rgb(248,232,193)")
            },function(){
                $(".btn_detail").css("color","#fff")
            })
        }else{
            $(".page2").removeClass("move")
            $(".page2 .wrap").removeClass("move")
        }

        if(index == 3){

            // $("body").css("background","rgb(149,150,106)")
            $("h2").css("color","#fff")
            $("p").css("color","#fff")
            $(".page3").addClass("move")
            $(".page3 .wrap").addClass("move")
            $(".btn_detail").hover(function(){
                $(".btn_detail").css("color","rgb(149,150,106)")
            },function(){
                $(".btn_detail").css("color","#fff")
            })
        }else{  
            $(".page3").removeClass("move")
            $(".page3 .wrap").removeClass("move")
        }

        if(index == 4){
            // $("body").css("background","rgb(148,118,94)")
            $(".page4").addClass("move")
            $(".page4 .wrap").addClass("move")
            $(".btn_detail").hover(function(){
                $(".btn_detail").css("color","rgb(148,118,94)")
            },function(){
                $(".btn_detail").css("color","#fff")
            })
            // $("h2").css("color","#fff")
            // $("p").css("color","#fff")
        }else{
            $(".page4").removeClass("move")
            $(".page4 .wrap").removeClass("move")
        }

        if(index == 5){
            // $("body").css("background","rgb(27,40,76)")
            $(".page5").addClass("move")
            $(".page5 .wrap").addClass("move")
            $(".btn_detail").hover(function(){
                $(".btn_detail").css("color","rgb(27,40,76)")
            },function(){
                $(".btn_detail").css("color","#fff")
            })
            // $("h2").css("color","#fff")
            // $("p").css("color","#fff")

        }else{
            $(".page5").removeClass("move")
            $(".page5 .wrap").removeClass("move")
        }
    }
});


$(".button").click(function(){
    $(".button").addClass("active")
    $(".btn-close").addClass("active")
});
$(".btn-close").click(function(){
    $(".button").removeClass("active")
    $(".btn-close").removeClass("active")
});


$(".login").click(function(){
    $(".popup").show();
    console.log("in")
});
$(".login-close").click(function(){
    $(".popup").fadeOut();
    console.log("out")
});

$(".btnForm").hover(function(){
    $(".btnForm a span").css("color","#fff")
},function(){
    $(".btnForm a span").css("color","#333")
})



// $(".btn_detail").hover(function(){
//     $(".btn_detail").css("color","#fff");
// },function(){
//     $(".btn_detail:before").css("color","");
// })


