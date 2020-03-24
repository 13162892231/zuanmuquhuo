var wxName = "贝尔君";
var shareTitle = "荒野求生之钻木取火，你敢挑战，我就敢免费送！";
var shareImg = "http://ufirefly.com/h5/ssss/Asset/Images/head_1.png";
var sharecontent = "最近很火的一个游戏";

var startpoint = {};
var lastpoint = {};
var index = 0;
var intervalIndex = 1
var ishas = false;
var speed = 0;
var isspeed = true;
var speedInterval = null;
var speedTime = null;
var timeIndex = 20;
var intervalOne = null;
var indexTime = 0
var intervalOver = false;
var gametime = null;
var setIntervaltime = null;

Zepto(function($) {
    var audioPaused = true;

    document.onreadystatechange = subSomething;

    function subSomething() {
        if (document.readyState == 'complete')
            var comm = new Comm();
        comm.sharepage(comm);

        $(".loader").hide();

    }


});
var Comm = function() {
    this.sharepage = function(comm) {
        comm.getMessage();
        comm.award();
        if (GetQueryString("type") != null) {
            $(".sharePage").show();
            var shareScore = parseFloat(GetQueryString("score")).toFixed(2);
            var name = GetQueryString("name");
            if (0 < shareScore && shareScore <= 4) {
                $(".share_1").show();
                $(".share_1").find(".name").text(name);
                $(".share_1").find(".time").text(shareScore);

            } else if (4 < shareScore && shareScore <= 6) {
                $(".share_2").show();
                $(".share_2").find(".name").text(name);
                $(".share_2").find(".time").text(shareScore);

            } else if (6 < shareScore && shareScore <= 8) {
                $(".share_3").show();
                $(".share_3").find(".name").text(name);
                $(".share_3").find(".time").text(shareScore);

            } else if (8 < shareScore && shareScore <= 20) {
                $(".share_4").show();
                $(".share_4").find(".name").text(name);
                $(".share_4").find(".time").text(shareScore);
            } else {
                $(".share_5").show();
                $(".share_5").find(".name").text(name);
                $(".share_5").find(".time").text("20");
            }
            $(".handOneLeft").removeClass("FlashingOneNormal");
            $(".handOneRight").removeClass("FlashingOneNormal");
            $(".handTwoRight").removeClass("FlashingTwoNormal");
            $(".handTwoLeft").removeClass("FlashingTwoNormal");

            $(".handOneLeftFast").removeClass("FlashingOneFast");
            $(".handOneRightFast").removeClass("FlashingOneFast");
            $(".handTwoRightFast").removeClass("FlashingTwoFast");
            $(".handTwoLeftFast").removeClass("FlashingTwoFast");
            $("#goGame").click(function() {
                $(".gamePage").show();
                $(".sharePage").addClass("bounceOutLeft").addClass("animated");
                $(".content").show();
                $(".mask").show();
                $(".sharePage").bind("webkitAnimationEnd", function(e) {
                    $(".sharePage").removeClass("bounceOutLeft").removeClass("animated");
                    $(".sharePage").hide();
                    $(".startPage").hide();
                    $(".starttimethree").addClass("startMoveOne");
                    $(".starttimeTwo").addClass("startMoveTwo");
                    $(".starttimeOne").addClass("startMovethree");
                    $(".starttimefour").addClass("startMoveFour");
                    $(".starttimefour").bind("webkitAnimationEnd", function(e) {
                        comm.playGame();
                        $(".starttimethree").removeClass("startMoveOne");
                        $(".starttimeTwo").removeClass("startMoveTwo");
                        $(".starttimeOne").removeClass("startMovethree");
                        $(".starttimefour").removeClass("startMoveFour");
                        $(".mask").hide();
                        $(".left").addClass("iconAnimationleft");
                        $(".right").addClass("iconAnimationright");
                        $(".barContent img").addClass("barmove");
                    });
                });
            });
        } else {
            $(".content").show();
            comm.startpage();
        }
    }

    this.startpage = function() {
        //开始游戏事件
        $(".startPage").show();
        // $(".startPage .role").addClass("roleAnimation");
        // $(".startPage .begin").addClass("beginAnimation");
        // $(".startPage .theme").addClass("themeAnimation");

        $(".handOneLeft").removeClass("FlashingOneNormal");
        $(".handOneRight").removeClass("FlashingOneNormal");
        $(".handTwoRight").removeClass("FlashingTwoNormal");
        $(".handTwoLeft").removeClass("FlashingTwoNormal");

        $(".handOneLeftFast").removeClass("FlashingOneFast");
        $(".handOneRightFast").removeClass("FlashingOneFast");
        $(".handTwoRightFast").removeClass("FlashingTwoFast");
        $(".handTwoLeftFast").removeClass("FlashingTwoFast");

        $("#startBtu").click(function() {
            $(".startPage").addClass("bounceOutLeft").addClass("animated");
            $(".mask").show();
            $(".startPage").unbind("webkitAnimationEnd");
            $(".startPage").bind("webkitAnimationEnd", function(e) {
                $(this).removeClass("bounceOutLeft");
                $(this).removeClass("animated");
                $(this).hide();

                $(".starttimethree").addClass("startMoveOne");
                $(".starttimeTwo").addClass("startMoveTwo");
                $(".starttimeOne").addClass("startMovethree");
                $(".starttimefour").addClass("startMoveFour");

                $(".starttimefour").unbind("webkitAnimationEnd");
                $(".starttimefour").bind("webkitAnimationEnd", function(e) {
                    var comm = new Comm();
                    comm.playGame();
                    $(".starttimethree").removeClass("startMoveOne");
                    $(".starttimeTwo").removeClass("startMoveTwo");
                    $(".starttimeOne").removeClass("startMovethree");
                    $(".starttimefour").removeClass("startMoveFour");
                    $(".mask").hide();
                    $(".left").addClass("iconAnimationleft");
                    $(".right").addClass("iconAnimationright");
                    $(".barContent img").addClass("barmove");
                });
            });
            $(".gamePage").show();
        });
    }

    this.playGame = function() {
        //主要游戏流程
        startpoint = {};
        lastpoint = {};
        index = 0;
        intervalIndex = 1
        ishas = false;
        speed = 0;
        isspeed = true;
        speedInterval = null;
        speedTime = null;
        timeIndex = 20;
        intervalOne = null;
        indexTime = 0;
        intervalOver = false;
        gametime = null;

        //记录用时
        clearInterval(intervalOver);
        intervalOver = setInterval(function() {
            if (indexTime >= 2000) {
                indexTime = 2000;
                clearInterval(intervalOver);
            } else { indexTime++; }
        }, 10);
        //倒计时时间
        clearInterval(setIntervaltime);
        setIntervaltime = setInterval(function() {
            if (timeIndex < 0) {
                clearInterval(setIntervaltime);
                $("#text").text("20");
            } else {
                timeIndex--;
                $("#text").text(timeIndex);
            }
        }, 1000);

        //计时器，现在是20秒
        clearTimeout(gametime);
        gametime = setTimeout(function() {
            $(".failure").find(".name").text(wxName);
            $(".failure").find(".time").text("20");

            $(".mask").show();
            $(".failure").addClass("disy").addClass("bounceInLeft").addClass("animated");
            $(".failure").show();
            $(".share_5").show();
            $(".share_5").find(".name").text(wxName);
            $(".share_5").find(".time").text("20");
            $(".prizeText_5").show();
            shareTitle = wxName + "用20秒取火成功，荒野生存率0%！就这么不幸地被贝爷抓到了！";
            sharecontent = "荒野求生之钻木取火，你敢挑战，我就敢免费送！";
            clearclass();
            $(".left").removeClass("iconAnimationleft");
            $(".right").removeClass("iconAnimationright");
            $(".barContent img").removeClass("barmove");
            $("#text").text("20");
            clearTimeout(gametime);
        }, 20000);

        //触屏开始
        $('.leftRight').unbind("touchstart");
        $('.leftRight').bind("touchstart", function(e) {
            e.preventDefault();
            if (e.targetTouches.length > 1 || e.scale && e.scale !== 1) return;
            var touch = e.targetTouches[0];
            // 获取手指坐标
            startpoint = { x: touch.pageX, y: touch.pageY, time: +new Date };
            sss();
        });

        //触屏移动
        $('.leftRight').unbind("touchmove");
        $('.leftRight').bind("touchmove", function(e) {
            e.preventDefault();
            if (e.targetTouches.length > 1 || e.scale && e.scale !== 1) return;
            var touch = e.targetTouches[0];
            //获取滑动距离
            lastpoint = { x: touch.pageX - startpoint.x, y: touch.pageY - startpoint.y };
            //速度判断
            if (isspeed) {
                isspeed = false;
                speedInterval = setInterval(function() {
                    speed = index - speed;
                    $("#speed").text(speed);
                    clearclass();
                    if (speed > 3) {
                        //快速
                        $(".handOneLeft").hide();
                        $(".handOneRight").hide();
                        $(".handTwoRight").hide();
                        $(".handTwoLeft").hide();
                        $(".handOneLeftFast").show();
                        $(".handOneRightFast").show();
                        $(".handTwoRightFast").show();
                        $(".handTwoLeftFast").show();
                        $(".woodOne").addClass("woodmoveOneFast");
                        $(".woodTwo").addClass("woodmoveTwoFast");
                        $(".woodThree").addClass("woodmoveThreeFast");
                        $(".woodFour").addClass("woodmoveFourFast");
                    } else if (speed <= 3) {
                        //慢速
                        $(".handOneLeft").show();
                        $(".handOneRight").show();
                        $(".handTwoRight").show();
                        $(".handTwoLeft").show();
                        $(".handOneLeftFast").hide();
                        $(".handOneRightFast").hide();
                        $(".handTwoRightFast").hide();
                        $(".handTwoLeftFast").hide();
                        $(".woodOne").addClass("woodmoveOneNormal");
                        $(".woodTwo").addClass("woodmoveTwoNormal");
                        $(".woodThree").addClass("woodmoveThreeNormal");
                        $(".woodFour").addClass("woodmoveFourNormal");
                    }
                    speed = index;
                }, 1000);
            }
            //累加次数
            if (Math.abs(lastpoint.x) > 50) {
                if (!ishas) {
                    index++;
                    if (index > 10) {

                        $(".smoke").addClass("Flashingdan");
                        // $(".headtwo").addClass("Flashingdan");
                    }
                    if (index > 30) {

                        $(".left").removeClass("iconAnimationleft");
                        $(".right").removeClass("iconAnimationright");
                        $(".barContent img").removeClass("barmove");
                        $("#text").text("20");
                        index = 0;
                        // $(".headthree").addClass("Flashingdan");
                        $(".fire").addClass("Flashingdan");
                        $(".smoke").removeClass("Flashingdan");

                        clearInterval(intervalOver);
                        clearInterval(setIntervaltime);
                        clearTimeout(gametime);
                        indexTime = (indexTime / 100).toFixed(2);
                        selectText(indexTime, wxName);
                        $(".success").find("p").find(".name").text(wxName);
                        $(".success").find("p").find(".time").text(indexTime);

                        $(".fire").unbind("webkitAnimationEnd");
                        $(".fire").bind("webkitAnimationEnd", function(e) {
                            $(".success").show();
                            $(".mask").show();
                            $(".failure").removeClass("disy").removeClass("bounceInLeft").removeClass("animated");
                            $(".success").addClass("disy").addClass("bounceInDown").addClass("animated");
                            $(".failure").hide();
                            clearclass();
                        });
                    }
                }
                ishas = true;
            } else { ishas = false; }
        });
        //手势离开
        $('.leftRight').unbind("touchend");
        $('.leftRight').bind("touchend", function(e) {
            ishas = false;
            isspeed = true;
            clearInterval(speedInterval);
            clearclass();

            $(".handOneLeft").removeClass("FlashingOneNormal");
            $(".handOneRight").removeClass("FlashingOneNormal");
            $(".handTwoRight").removeClass("FlashingTwoNormal");
            $(".handTwoLeft").removeClass("FlashingTwoNormal");

            $(".handOneLeftFast").removeClass("FlashingOneFast");
            $(".handOneRightFast").removeClass("FlashingOneFast");
            $(".handTwoRightFast").removeClass("FlashingTwoFast");
            $(".handTwoLeftFast").removeClass("FlashingTwoFast");

            $(".handOneLeft").show();
            $(".handOneRight").show();
            $(".handTwoRight").show();
            $(".handTwoLeft").show();

            $(".handOneLeftFast").hide();
            $(".handOneRightFast").hide();
            $(".handTwoRightFast").hide();
            $(".handTwoLeftFast").hide();

        });
        // 再玩一次点击事件
        $(".playAgain").unbind("click");
        $(".playAgain").click(function() {
            clearInterval(speedInterval);
            $(".share_1").hide();
            $(".share_2").hide();
            $(".share_3").hide();
            $(".share_4").hide();
            $(".share_5").hide();

            $(".personOne").hide();
            $(".persontwo").hide();
            $(".personthree").hide();
            $(".personfour").hide();

            $(".prizeText_1").show();
            $(".prizeText_2").show();
            $(".prizeText_3").show();
            $(".prizeText_4").show();
            $(".prizeText_5").show();
            clearclass();
            //移除手动画
            $(".handOneLeft").removeClass("FlashingOneNormal");
            $(".handOneRight").removeClass("FlashingOneNormal");
            $(".handTwoRight").removeClass("FlashingTwoNormal");
            $(".handTwoLeft").removeClass("FlashingTwoNormal");
            $(".handOneLeftFast").removeClass("FlashingOneFast");
            $(".handOneRightFast").removeClass("FlashingOneFast");
            $(".handTwoRightFast").removeClass("FlashingTwoFast");
            $(".handTwoLeftFast").removeClass("FlashingTwoFast");
            //手正常显示
            $(".handOneLeft").show();
            $(".handOneRight").show();
            $(".handTwoRight").show();
            $(".handTwoLeft").show();
            //手快速消失
            $(".handOneLeftFast").hide();
            $(".handOneRightFast").hide();
            $(".handTwoRightFast").hide();
            $(".handTwoLeftFast").hide();

            $(".failure").removeClass("disy").removeClass("bounceInLeft").removeClass("animated");
            $(".success").removeClass("disy").removeClass("bounceInDown").removeClass("animated");
            $(".failure").hide();
            $(".success").hide();

            $(".smoke").removeClass("Flashingdan");
            $(".fire").removeClass("Flashingdan");
            // $(".headtwo").removeClass("Flashingdan");
            // $(".headthree").removeClass("Flashingdan");

            $(".starttimethree").addClass("startMoveOne");
            $(".starttimeTwo").addClass("startMoveTwo");
            $(".starttimeOne").addClass("startMovethree");
            $(".starttimefour").addClass("startMoveFour");

            $(".starttimefour").unbind("webkitAnimationEnd");
            $(".starttimefour").bind("webkitAnimationEnd", function(e) {
                var comm = new Comm();
                comm.playGame();
                $(".starttimethree").removeClass("startMoveOne");
                $(".starttimeTwo").removeClass("startMoveTwo");
                $(".starttimeOne").removeClass("startMovethree");
                $(".starttimefour").removeClass("startMoveFour");
                $(".mask").hide();
                $(".left").addClass("iconAnimationleft");
                $(".right").addClass("iconAnimationright");
                $(".barContent img").addClass("barmove");
            });
        });
        // 去领奖点击事件
        $(".goAward").click(function() {
            $(".awardPage").show();
            $(".gamePage").addClass("bounceOutDown").addClass("animated");
            $(".success").removeClass("disy").removeClass("bounceInDown").removeClass("animated");
            $(".failure").removeClass("disy").removeClass("bounceInDown").removeClass("animated");
            $(".failure").hide();
            $(".success").hide();
            $(".mask").hide();
            $(".gamePage").bind("webkitAnimationEnd", function(e) {
                $(this).removeClass("bounceOutDown");
                $(this).removeClass("animated");
                $(this).hide();
            });
        });
    }

    this.award = function() {
        // 获取验证码点击事件
        $(".getcode").click(function() {
            //接口获取验证手机验证码
            $.ajax({
                async: false,
                url: "http://wxfw.ufirefly.com/Api/GetSignature?url=" + href,
                type: "get",
                dataType: "jsonp",
                jsonp: 'jsoncallback',
                data: null,
                contentType: "application/json;utf-8",
                success: function(data) {


                }
            });
        });

        //$("#goShare").click(function(){
        //    //接口校验手机验证码，获取商品邀请码
        //    $.ajax({
        //        async: false,
        //        url: "http://wxfw.ufirefly.com/Api/GetSignature?url="+href,
        //        type: "get",
        //        dataType:"jsonp",
        //        jsonp: 'jsoncallback', 
        //        data: null, 
        //        contentType: "application/json;utf-8", 
        //        success: function (data) {
        //            //校验成功后转页面
        //            $(".awardPage").addClass("bounceOutUp").addClass("animated");
        //            removeAnimate(".awardPage",["bounceOutUp","animated"]);
        //            //获取商品邀请码赋值
        //            //目前页面还没有做,写下怎么获取即可
        //        }
        //    });
        //});

        // 领取奖品点击事件
        $(".acceptprize").click(function() {
            $(".codePage").show();
            $(".awardPage").addClass("bounceOutUp").addClass("animated");
            document.documentElement.scrollTop = document.body.scrollTop = 0;
            $(".awardPage").bind("webkitAnimationEnd", function(e) {
                $(this).removeClass("bounceOutUp");
                $(this).removeClass("animated");
                $(this).hide();
            });

        });

    }

    this.getMessage = function() {
        var code = GetQueryString('code');
        $.ajax({
            async: false,
            url: "http://wxfw.ufirefly.com/Api/GetWeiXinUserInfo?code=" + code,
            type: "get",
            dataType: "jsonp",
            jsonp: 'jsoncallback',
            data: null,
            contentType: "application/json;utf-8",
            success: function(data) {
                wxName = data.nickname;
            }
        });
    }
}
var clearclass = function() {
    $(".woodOne").removeClass("woodmoveOneLow");
    $(".woodTwo").removeClass("woodmoveTwoLow");
    $(".woodThree").removeClass("woodmoveThreeLow");
    $(".woodFour").removeClass("woodmoveFourLow");

    $(".woodOne").removeClass("woodmoveOneNormal");
    $(".woodTwo").removeClass("woodmoveTwoNormal");
    $(".woodThree").removeClass("woodmoveThreeNormal");
    $(".woodFour").removeClass("woodmoveFourNormal");

    $(".woodOne").removeClass("woodmoveOneFast");
    $(".woodTwo").removeClass("woodmoveTwoFast");
    $(".woodThree").removeClass("woodmoveThreeFast");
    $(".woodFour").removeClass("woodmoveFourFast");
}


//移除动画事件
var removeAnimate = function(tagName, classArrey) {
    $(tagName).bind("webkitAnimationEnd", function(e) {
        for (var i = 0; i < classArrey.Length; i++) {
            $(tagName).removeClass(classArrey[i]);
        }
        $(tagName).addClass("disn");
    });
}

function GetQueryString(name) {
    var str = "";
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    try {
        str = decodeURI(r[2]);
    } catch (err) {
        str = "";
    }
    if (r == null) { return null; } else {
        return str;
    }
}

var selectText = function(successTime, weixinName) {
    if (0 < successTime && successTime <= 4) {
        $(".personOne").show();
        $(".share_1").show();
        $(".share_1").find(".name").text(weixinName);
        $(".share_1").find(".time").text(successTime);
        $(".prizeText_1").show();
        shareTitle = weixinName + "用" + successTime + "秒取火成功，荒野生存率100%！要做酋长，除了你没谁了！";
    } else if (4 < successTime && successTime <= 6) {
        $(".persontwo").show();
        $(".share_2").show();
        $(".share_2").find(".name").text(weixinName);
        $(".share_2").find(".time").text(successTime);
        $(".prizeText_2").show();
        shareTitle = weixinName + "用" + successTime + "秒取火成功，荒野生存率80%！能力强，颜值高，已被酋长看中！你有戏哦～";
    } else if (6 < successTime && successTime <= 8) {
        $(".personthree").show();
        $(".share_3").show();
        $(".share_3").find(".name").text(weixinName);
        $(".share_3").find(".time").text(successTime);
        $(".prizeText_3").show();
        shareTitle = weixinName + "用" + successTime + "秒取火成功，荒野生存率60%！这实力，百兽都要封你为王啊！";
    } else if (8 < successTime && successTime <= 20) {
        $(".personfour").show();
        $(".share_4").show();
        $(".share_4").find(".name").text(wxName);
        $(".share_4").find(".time").text(successTime);
        $(".prizeText_4").show();
        shareTitle = wxName + "用" + successTime + "秒取火成功，荒野生存率17%！被抓去做了部落的储备粮，能滋润几天。";
    } else {
        $(".personfour").show();
        $(".share_5").show();
        $(".share_5").find(".name").text(weixinName);
        $(".share_5").find(".time").text(successTime);
        $(".prizeText_4").show();
        shareTitle = weixinName + "用20秒取火成功，荒野生存率0%！就这么不幸地被贝爷抓到了！";
    }
    sharecontent = "荒野求生之钻木取火，你敢挑战，我就敢免费送！";

}

var sss = function() {
    $(".handOneLeft").addClass("FlashingOneNormal");
    $(".handOneRight").addClass("FlashingOneNormal");
    $(".handTwoRight").addClass("FlashingTwoNormal");
    $(".handTwoLeft").addClass("FlashingTwoNormal");

    $(".handOneLeftFast").addClass("FlashingOneFast");
    $(".handOneRightFast").addClass("FlashingOneFast");
    $(".handTwoRightFast").addClass("FlashingTwoFast");
    $(".handTwoLeftFast").addClass("FlashingTwoFast");

    $(".woodOne").addClass("woodmoveOneNormal");
    $(".woodTwo").addClass("woodmoveTwoNormal");
    $(".woodThree").addClass("woodmoveThreeNormal");
    $(".woodFour").addClass("woodmoveFourNormal");
}