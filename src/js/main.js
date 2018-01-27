$(window).load(function () {
	$('.flexslider').flexslider({
		animation: "slide",
		animationLoop: true,
		itemWidth: 301,
		itemMargin: 82
	});

	$(function () {
		$(".tabs-girl").tabs({
			active: 0
		});
		$(".tabs-boy").tabs({
			active: 0
		});
		$(".tabs-newborns").tabs({
			active: 0
		});
		$(".tabs-accessories").tabs({
			active: 0
		});
	});
});