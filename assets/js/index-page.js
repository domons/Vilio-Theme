$(function() {
	// big header chart
	var ctx = $('.header-chart canvas').get(0).getContext('2d'),
		gradient = ctx.createLinearGradient(50, 0, 0, 550);

	gradient.addColorStop(0, 'rgba(0,255,174,0.12)');
	gradient.addColorStop(1, 'rgba(19,25,40,0.12)');

	var lineChartData = {
		labels: ['','','','','','','',''],
		datasets: [
			{
				fillColor: 'rgba(0,0,0,0.15)',
				strokeColor: 'rgba(255,255,255,0.3)',
				pointColor: '#15192c',
				data: [930,1180,1240,1355,1600,1720,1760,1950]
			},
			{
				fillColor: gradient,
				strokeColor: 'rgba(255,255,255,0.3)',
				pointColor: '#15192c',
				data: [200,780,1090,1120,1330,1300,1455,1750]
			}
		]
	};

	var chart = new Chart(ctx).Line(lineChartData, {
		animationEasing: 'easeInOutQuad',
		scaleShowLabels: false,
		showTooltips: false,
		maintainAspectRatio: true,
		responsive: false,
		pointDotStrokeWidth: 2,
		pointDotRadius: 6,
		datasetStrokeWidth: 0,
		scaleShowVerticalLines: false,
		scaleGridLineColor: 'rgba(255,255,255,.02)'
	});

	// case studies carousel
	$('.case-studies-panels').owlCarousel({
		loop: true,
		margin: 15,
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			900: {
				items: 3
			}
		},
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		navClass: ['btn-small btn-outline btn-hover-fill', 'btn-small btn-outline btn-hover-fill'],
		navText: ['Prev', 'Next']
	});
});


