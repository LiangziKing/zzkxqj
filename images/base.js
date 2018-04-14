/**
 * Created by LY on 2016/11/23.
 */
$(function(){
	$(".head-nav li").not(".nosub").each(function(i){
		$(this).find("a").hover(function(){
			$(".subnav").eq(i).addClass("subnav-active").siblings().removeClass("subnav-active");
		},function(){
			$(".subnav").eq(i).removeClass("subnav-active");
		});
	});
	$(".subnav").hover(function(){
		$(this).addClass("subnav-active");
	},function(){
		$(this).removeClass("subnav-active");
	});
	$(".tabnav").each(function(i){
		var navId = "tabNav"+i,
			contId = "tabCont"+i;
		$(this).attr("id",navId);
		$(".tabcont").eq(i).attr("id",contId);
		$("#"+navId).children(":not('.n')").on("click",function(){
			var index = $(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			$("#"+contId).children().eq(index).fadeIn().siblings().hide();
			return false;
		});
		$("#"+contId).children(":not(:first)").hide();
	});
	$(".select span").click(function(){
		if($(this).parent().hasClass("active")){
			$(this).parent().removeClass("active");
		}else{
			$(this).parent().addClass("active");
		}
	});
	$(".select li").click(function(){
		$(this).parents(".select").removeClass("active").find("span").text($(this).text());
	});

	$("#gotopBtn").click(function(){
		$("html,body").animate({scrollTop:0},200);
		return false;
	});

	$(".radio-list label").click(function(){
		var $this = $(this);
		$this.addClass("active").parents(".form-group").siblings().find("label").removeClass("active");
	});
});