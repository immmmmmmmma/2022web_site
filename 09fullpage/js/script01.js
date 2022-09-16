$("#fullpage").fullpage({
    anchors:["1st","2nd","3rd","4th","5th"],
    navigation:true,
    navigationPosition:"fp-right",
    navigationTooltips:["first","second","third","forth","fifth"],
    responsiveWidth:900,
    afterLoad:function(anchorslink,index){
        console.log(anchorslink,index);
        if(index == 1){
            $(".page1 .left").addClass("move1")
            $(".page1 .right").addClass("move2")
            $("body").css("background","rgb(0,68,56)")
            $("h2").css("color","#fff")
            $("p").css("color","#577e77").css("font-size","72px").css("line-height","100px").css("letter-spacing","18px")
            $(".page1 .wrap").addClass("move")
        }else{
            $(".page1 .left").removeClass("move1")
            $(".page1 .right").removeClass("move2")
            $(".page1 .wrap").removeClass("move")
        }

        if(index == 2){
            $(".page1 .left").addClass("move1")
            $(".page1 .right").addClass("move2")
            $("body").css("background","rgb(248,232,193)")
            $("h2").css("color","#bca261")
            $("p").css("color","#333").css("font-size","36px").css("line-height","54px").css("letter-spacing","initial")
            $(".page1 .wrap").addClass("move")
        }else{
            $(".page1 .left").removeClass("move1")
            $(".page1 .right").removeClass("move2")       
            $(".page1 .wrap").removeClass("move")
        }

        if(index == 3){
            $(".page1 .left").addClass("move1")
            $(".page1 .right").addClass("move2")
            $("body").css("background","rgb(149,150,106)")
            $("h2").css("color","#fff")
            $("p").css("color","#fff")
            $(".page1 .wrap").addClass("move")
        }else{
            $(".page1 .left").removeClass("move1")
            $(".page1 .right").removeClass("move2")       
            $(".page1 .wrap").removeClass("move")
        }

        if(index == 4){
            $(".page1 .left").addClass("move1")
            $(".page1 .right").addClass("move2")
            $("body").css("background","rgb(148,118,94)")
            $(".page1 .wrap").addClass("move")
            // $("h2").css("color","#fff")
            // $("p").css("color","#fff")
        }else{
            $(".page1 .left").removeClass("move1")
            $(".page1 .right").removeClass("move2")
            $(".page1 .wrap").removeClass("move")
        }

        if(index == 5){
            $(".page1 .left").addClass("move1")
            $(".page1 .right").addClass("move2")
            $("body").css("background","rgb(27,40,76)")
            $(".page1 .wrap").addClass("move")
            // $("h2").css("color","#fff")
            // $("p").css("color","#fff")
        }else{
            $(".page1 .left").removeClass("move1")
            $(".page1 .right").removeClass("move2")
            $(".page1 .wrap").removeClass("move")
        }
    }
})

