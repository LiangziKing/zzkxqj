/**
 * 底部预约浮层
 * @author zhaochengju
 */
$(function () {
    "use strict";
    var FooterRES = {
        config: {
            // 配置参数
            imageBasePath: "",
            popTemplate: function () {
              
              
                return $(
						   
						 
						 "<div class='fixeFooter'>" +
                  
					"<div><div><img src='" + this.imageBasePath + "/images/bottom-bar-1.png'>" +
                   
                    "</div><div>" +
					"<form action='/plus/diybottom.php' method='post' enctype='multipart/form-data'><input type='hidden' name='action' value='post' />" +
						   
						   
"<input type='hidden' name='diyid' value='2' />" +
"<input type='hidden' name='do' value='2' />" +

 "<div class='bd'><div class='bd1'>" +

"<input type='text' placeholder='请输入您的称呼' class='userName' name='contact'>" +
					
                    "<input type='text' placeholder='请输入您的手机号码' class='mobile' name='phone'>" +
					
					
					 "</div>" +
					  "<div class='bd2'>" +
					
					  "<input type='text' placeholder='请输入您的楼盘' class='mobile' name='addr'>" +
					  
					    "<input type='text' placeholder='请输入您的房屋面积' class='mobile' name='area'>" +
					 "</div></div>" +
					
					 "<input type='hidden' value='底部报价' class='mobile' name='shejishi'>" +
					
					"<input type='hidden' name='dede_fields' value='contact,text;sex,radio;phone,text;addr,text;area,text;cost,text;unit,text;dstyle,text;shejishi,text;content,multitext;dtime,text;tijiaoshijian,text' />" +
"<input type='hidden' name='dede_fieldshash' value='3571ac5a9270c7a7a15f2c0cda47dce2' />" +
 
					"<div class='bd3'>" +
                    "<input type='submit' value='获取报价' class='button'>" +
					 "</div>" +
					 "<div class='bd4'><p>免费电话报价</p><span>400-0000-000</span></div>" +
					
                    "<img class='fixeFooterEsc' src='" + this.imageBasePath + "/images/fixe_footer_1.png'>" +
                    "</div></div></div>");
            },
            btnTemplate: function () {
                return $("<div class='fixeFooterOn'><p>获取报价</p></div>");
            }
        },
        show: function () {
            // 显示预约浮层
            var current = $(document).scrollTop(), height = 660;
            $('.fixeFooter,.fixeFooterOn').remove();
            var popTemplate = this.config.popTemplate();
            $('body').append(popTemplate);
            if (current < height) {
                popTemplate.stop().animate({
                    'bottom': '-135px'
                });
            } else {
                popTemplate.stop().animate({
                    'bottom': '0px'
                });
            }
            popTemplate.find('.fixeFooterEsc').click(function () {
                FooterRES.hide();
                _paq.push(['trackEvent', 'Clicked', '底部浮层', '关闭按钮']);
            });
            // 预约操作
            popTemplate.find('input:button').click(function () {
                alert($.reservation(popTemplate.find('.userName').val(), popTemplate.find('.mobile').val(), function () {
                    _paq.push(['trackEvent', 'Clicked', '底部浮层', '预约按钮']);
                }))
            })
        },
        hide: function () {
            // 隐藏预约浮层
            var current = $(document).scrollTop(), height = 660;

            $('.fixeFooter').stop().animate({
                'bottom': '-135px'
            });
            $('.fixeFooterOn').stop().animate({
                'opacity': '0'
            });

            setTimeout($('.fixeFooter,.fixeFooterOn').remove(), 1000);

            var btnTemplate = this.config.btnTemplate();
            $('body').append(btnTemplate);
            if (current < height) {
                btnTemplate.fadeTo().stop().animate({
                    'opacity': '0'
                });
            } else {
                btnTemplate.fadeTo().stop().animate({
                    'opacity': '1'
                });
            }
            btnTemplate.click(function () {
                FooterRES.show();
            });
        }
    };
    FooterRES.show();
    $(window).scroll(function () {
        var current = $(document).scrollTop(), height = 660;
        if (current < height) {
            $('.fixeFooter').stop().animate({
                'bottom': '-135px'
            });
            $('.fixeFooterOn').stop().animate({
                'opacity': '0'
            });
        } else {
            $('.fixeFooter').stop().animate({
                'bottom': '0px'
            });
            ;
            $('.fixeFooterOn').stop().animate({
                'opacity': '1'
            });
            ;
        }
    })
});