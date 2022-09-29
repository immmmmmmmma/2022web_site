console.log("index");

$(".navbar>ul>li").hover(function(){
    $(this).addClass("on");
},function(){
    $(this).removeClass("on");
});
$(".fncUtil>li").hover(function(){
    $(this).addClass("on");
},function(){
    $(this).removeClass("on");
});

$(".navbarWrap").hover(function(){
    $(".black").show();
    $(".white").hide();
},function(){
    $(".white").show();
    $(".black").hide();
})

$(".navbarWrap").mouseenter(function(){
    $(".navbar>ul>li>a").css("color","#333");
    $(".fncUtil>li>a").css("color","#333");
})
$(".navbarWrap").mouseleave(function(){
    $(".navbar>ul>li>a").css("color","#fff");
    $(".fncUtil>li>a").css("color","#fff");
})
$(".navbarWrap").mouseenter(function(){
    $("#header").css("height","100px")
    $("#header").css("background-color","#fff")
})
$(".navbarWrap").mouseleave(function(){
    $("#header").css("height","initial")
    $("#header").css("background-color","initial")
})
// scroll 
$(window).scroll(function(){
    let srcollY = window.pageYOffset;

    if( scrollY > 300){
        $(".navbar>ul>li>a").css("color","#333");
        $(".fncUtil>li>a").css("color","#333");
        $("#header").css("height","100px");
        $("#header").css("background","#fff");
        $(".black").show();
        $(".white").hide();
    }else{
        $(".navbar>ul>li>a").css("color","#fff");
        $(".fncUtil>li>a").css("color","#fff");
        $("#header").css("height","initial");
        $("#header").css("background","initial");
        $(".black").hide();
        $(".white").show();
    }
    $(".scroll").html(parseInt(scrollY))
})




// toggle

$(".toggle").click(function(){
    $(".navbarClone").css("left",0);
    $(".overlay").show();
})
$(".close").click(function(){
    console.log("close")
    $(".navbarClone").css("left","-100%");
    $(".overlay").hide();
});


$(".navbar>ul").clone().appendTo(".mMenu")



// $("downBtn").click(function(){
//     teaData.sort(function(a,b){
//         return a.price - b.price;
//     });

//     let i=i++
//     document.writeln(JSON.stringify(teaData[i]) + '<br>')
    
// });
