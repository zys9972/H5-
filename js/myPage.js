$(function () {
    var H = $(window).height(); // ��ǰ��Ļ�ĸ߶�
    var flag = false;
    $("#fullpage").fullpage({
        navigation: true,
        scrollingSpeed: 1200,
        // �ص������������ڶ�����Ļص����������� anchorLink �� index ����������anchorLink ��ê���ӵ����ƣ�index ����ţ���1��ʼ����
        afterLoad: function (anchorLink, index) {
            if (index == 2 && flag == false) {
                $(".search").show().animate({"right": 370}, 1200, "easeOutBack", function () {
                    // �����߽�����ɳ��2������ʾ
                    $(".search-words").animate({"opacity": 1}, 500, function () {
                        $(".search").hide();
                        // ͼƬ �����Ͻǣ� ��С
                        $(".search-small").show().animate({
                            "height": 30,
                            "right": 250,
                            "bottom": 452
                        }, 1200, function () {
                            flag = true;
                        });
                        // ͬʱ ɳ��ͼƬ ���
                        $(".sofas").show().animate({"height": 220}, 1200)
                        // ͬʱ ��ɫ���ֽ�������ʾ����
                        $(".words-02").animate({"opacity": 1}, 500)
                    });
                });
            }
            ;
        },
        // �տ�ʼ������Ļ�ʹ����Ļص����� onLeave
        //index ���뿪�ġ�ҳ�桱����ţ���1��ʼ���㣻nextIndex �ǹ������ġ�ҳ�桱����ţ���1��ʼ���㣻
        //direction �ж����Ϲ����������¹�����ֵ�� up �� down
        onLeave: function (index, nextIndex, direction) {
            //�ڶ���-������
            //flag == true���ж���Ϊ�˵ȵڶ�����������ִ�е�����
            if (index == 2 && nextIndex == 3 && flag == true) {
                //ɳ����ʾ�����ƶ�
                $(".coffe-sofa").show().animate({"bottom": -(H - 250), "width": 207, "left": 260}, 2000, function () {
                    $(".img-01-a").animate({"opacity": 1}, 300, function () {
                        $(".btn-01-a").animate({"opacity": 1}, 300);
                    })
                });
                //��ɫ������ʾ���ڵ�
                //$(".white-box").show();
            }
            ;
            //������-������
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
                //С������
                $(".hand-05").animate({"bottom": 0}, 1000, function () {
                    //������
                    $(".mouse-05-a").show();
                    //ɳ������
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
                        //�ƶ�����ͼƬ���൱�ڳ������ƶ�
                        $(".s6").animate({"backgroundPositionX": "100%"}, 3000, function () {
                            $(".boy").animate({"height": 305, "bottom": 116}, 1000, function () {
                                $(this).animate({"right": 500}, 500, function () {
                                    // ����ʾ����
                                    $(".door").animate({"opacity": 1}, 200, function () {
                                        // Ůʿ��ʾ����
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
            //�ڰ�������
            $(".beginShoping").hover(function() {
                $(".btn-08-a").toggle();  //  toggle  ��ʾ�����ص��л�
            });
            // ���ָ�������ƶ�
            $(document).mousemove(function(event) {
                var x = event.pageX-$(".hand-08").width() / 2;
                //������Ҫ���ָ�һ��
                var y = event.pageY+8;
                // �ֵ�topֵ����С�������СminY
                var minY = H - 449;
                //�����ֵĸ߶�
                if(y < minY ) {
                    y = minY;
                }
                $(".hand-08").css({"left": x, "top": y});
            });

            // �����ǵ�� ����һ�ε� ʱ�� ����������
            $(".again").click(function(event) {
                // 1. ���ص�1��Ļ
                $.fn.fullpage.moveTo(1);n
            });

        },


    });
});
