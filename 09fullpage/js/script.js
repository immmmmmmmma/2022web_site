$("#fullpage").fullpage({
    menu:".navbar",
    anchors:["1st","2nd","3rd","4th","5th"],
    navigation:true,
    navigationPosition:"fp-right",
    navigationTooltips:["first","second","third","forth","fifth"],
    responsiveWidth:900,
    afterLoad:function(anchorslink,index){
        console.log(anchorslink,index);
        if(index == 1){
            $(".page1 .txtWrap").addClass("move")
        }else{
            $(".page1 .txtWrap").removeClass("move")
        }
        if(index == 2){
            $(".page2 .txtWrap").addClass("move")
        }else{
            $(".page2 .txtWrap").removeClass("move")
        }
        if(index == 3){
            $(".page3 .wrap").addClass("move")
        }else{
            $(".page3 .wrap").removeClass("move")
        }
        if(index == 4){
            $(".page4 .txtWrap").addClass("move")
        }else{
            $(".page4 .txtWrap").removeClass("move")
        }
        if(index == 5){
            $(".page5 .txtWrap").addClass("move")
        }else{
            $(".page5 .txtWrap").removeClass("move")
        }
    }
})

