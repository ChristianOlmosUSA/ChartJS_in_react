import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";

const Chartz = () => {
	const [chartData, setChartData] = usetState({});

	const chart = () => {
		setChartData({
			labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			datasets: [
				{
					label: "LEVEL",
					data: [3, 4, 6, 9, 4],
					backgroundColor: ["rgba(75,75,756)"],
					borderwidth: 3
				}
			]
		});
	};

	useEffect(() => {
		chart();
	}, []);

	return (
		<div className="App">
			<h1>Chartz</h1>
			<div>
				<Line
					data={chartData}
					options={{
						responsive: true,
						title: { text: "Hours", display: true },
						scale: {
							yAxes: [
								{
									ticks: {
										autoskip: true,
										maxTicksLimit: 60,
										beginAtZero: true
									},
									gridLines: {
										display: false
									}
								}
							],
							xAxes: [
								{
									gridLines: {
										display: false
									}
								}
							]
						}
					}}
				/>
			</div>
		</div>
	);
};

export default Chartz;
