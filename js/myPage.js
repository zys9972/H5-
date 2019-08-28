$(function () {
    var H = $(window).height(); // 当前屏幕的高度
    var flag = false;
    $("#fullpage").fullpage({
        navigation: true,
        scrollingSpeed: 1200,
        // 回调函数滚动到第二屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
        afterLoad: function (anchorLink, index) {
            if (index == 2 && flag == false) {
                $(".search").show().animate({"right": 370}, 1200, "easeOutBack", function () {
                    // 方块走进来，沙发2个字显示
                    $(".search-words").animate({"opacity": 1}, 500, function () {
                        $(".search").hide();
                        // 图片 往右上角， 缩小
                        $(".search-small").show().animate({
                            "height": 30,
                            "right": 250,
                            "bottom": 452
                        }, 1200, function () {
                            flag = true;
                        });
                        // 同时 沙发图片 变大
                        $(".sofas").show().animate({"height": 220}, 1200)
                        // 同时 白色文字渐渐的显示出来
                        $(".words-02").animate({"opacity": 1}, 500)
                    });
                });
            }
            ;
        },
        // 刚开始滚动屏幕就触发的回调函数 onLeave
        //index 是离开的“页面”的序号，从1开始计算；nextIndex 是滚动到的“页面”的序号，从1开始计算；
        //direction 判断往上滚动还是往下滚动，值是 up 或 down
        onLeave: function (index, nextIndex, direction) {
            //第二屏-第三屏
            //flag == true的判断是为了等第二屏结束，在执行第三屏
            if (index == 2 && nextIndex == 3 && flag == true) {
                //沙发显示，并移动
                $(".coffe-sofa").show().animate({"bottom": -(H - 250), "width": 207, "left": 260}, 2000, function () {
                    $(".img-01-a").animate({"opacity": 1}, 300, function () {
                        $(".btn-01-a").animate({"opacity": 1}, 300);
                    })
                });
                //白色盒子显示并遮挡
                //$(".white-box").show();
            }
            ;
            //第三屏-第四屏
            if (index == 3 && nextIndex == 4) {
                $(".coffe-sofa").hide();
                $(".x-sofa").show().animate({"bottom": -(H - 170), "left": 245}, 2000, function () {
                    $(".x-sofa").hide();
                    $(".sofa04").show();
                    $(".car").animate({"left": "150%"}, 4000, "easeInElastic", function () {
                        $(".note").show()
                        $(".note-img,.words04-a").animate({"opacity": 1}, 1000)
                    })
                })
            }
            ;
            if (index == 4 && nextIndex == 5) {
                //小手上来
                $(".hand-05").animate({"bottom": 0}, 1000, function () {
                    //鼠标出现
                    $(".mouse-05-a").show();
                    //沙发掉下
                    $(".t1f-05").show().animate({"bottom": 70}, 800, function () {
                        $(".order-05").animate({"bottom": 390}, function () {
                            $(".words-05").addClass("words-05-a");
                        })
                    })
                })
            }
            ;
            if (index == 5 && nextIndex == 6) {
                $(".t1f-05").animate({"bottom": -(H - 500), "left": "40%", "width": 65}, 1500, function () {
                    $(".t1f-05").hide()
                });
                $(".box-06").animate({"left": "38%"}, 1500, function () {
                    $(".box-06").animate({"bottom": 40}, 800, function () {
                        $(".box-06").hide();
                        //移动背景图片，相当于车子在移动
                        $(".s6").animate({"backgroundPositionX": "100%"}, 3000, function () {
                            $(".boy").animate({"height": 305, "bottom": 116}, 1000, function () {
                                $(this).animate({"right": 500}, 500, function () {
                                    // 门显示出来
                                    $(".door").animate({"opacity": 1}, 200, function () {
                                        // 女士显示出来
                                        $(".girl").show().animate({"right": 350, "height": 300}, 500, function () {
                                            $(".pop-07").show();
                                            //$(".next").fadeIn();
                                        })
                                    });
                                });
                            });
                        })
                        $(".words-06-a").show().animate({"left": "30%"},2000, "easeOutElastic");
                        //
                        $(".pop-06").show();

                    })
                })
            };
            if (index == 6 && nextIndex == 7) {
                setTimeout(function(){
                    $(".star").animate({"width":120},1000,function(){
                        $(".good-07").show();
                    })
                },1200)
            };
            //第八屏动画
            $(".beginShoping").hover(function() {
                $(".btn-08-a").toggle();  //  toggle  显示和隐藏的切换
            });
            // 大手跟随鼠标移动
            $(document).mousemove(function(event) {
                var x = event.pageX-$(".hand-08").width() / 2;
                //鼠标必须要比手高一点
                var y = event.pageY+8;
                // 手的top值不能小于这个大小minY
                var minY = H - 449;
                //限制手的高度
                if(y < minY ) {
                    y = minY;
                }
                $(".hand-08").css({"left": x, "top": y});
            });

            // 当我们点击 再来一次的 时候， 分两步进行
            $(".again").click(function(event) {
                // 1. 返回第1屏幕
                $.fn.fullpage.moveTo(1);n
            });

        },


    });
});
