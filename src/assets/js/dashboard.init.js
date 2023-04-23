let lineOptions = {
		series: [
			{
				name: "2023",
				type: "column",
				data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
			},
			{
				name: "2022",
				type: "line",
				data: [23, 32, 27, 38, 27, 32, 27, 38, 22, 31, 21, 16],
			},
		],
		chart: { height: 280, type: "line", toolbar: { show: !1 } },
		stroke: { width: [0, 3], curve: "smooth" },
		plotOptions: { bar: { horizontal: !1, columnWidth: "20%" } },
		dataLabels: { enabled: !1 },
		legend: { show: !1 },
		colors: ["#5664d2", "#1cbb8c"],
		labels: [
			"Ene",
			"Feb",
			"Mar",
			"Abr",
			"May",
			"Jun",
			"Jul",
			"Ago",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
	};
const revenueLineChart = new ApexCharts(
        document.querySelector("#line-column-chart"),
        lineOptions
    );
revenueLineChart.render();
let donutOptions = {
	series: [42, 26, 15],
	chart: { height: 250, type: "donut" },
	labels: ["Bebida carbonatada", "Agua saborizada", "Six pack cerveza embotellada"],
	plotOptions: { pie: { donut: { size: "75%" } } },
	dataLabels: { enabled: !1 },
	legend: { show: !1 },
	colors: ["#5664d2", "#1cbb8c", "#eeb902"],
};
const categoriesTopDonutChart = new ApexCharts(
	document.querySelector("#donut-chart"),
	donutOptions
	);
categoriesTopDonutChart.render();