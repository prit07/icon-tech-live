$(document).ready(function(){
	 

	// chart js
	 // Sample data for the columns
	 const data = [44, 161, 111, 127, 102, 183, 88, 161, 44, 127, 71, 111];

	 // Initialize Chart.js chart
	 const ctx = document.getElementById('yearlyChart').getContext('2d');
	 new Chart(ctx, {
	   type: 'bar',
	   data: {
		 labels: Array.from({ length: 12 }, (_, i) => 2012 + i),
		 datasets: [{
		   label: 'Yearly Data',
		   data: data,
		   backgroundColor: data.map((_, i) => i === 5 ? '#DFAB3E' : '#E9E9E9'),
		 }]
	   },
	   options: {
		scales: {
			y: {
				display: false,
				grid: {
					display: false
				},
				ticks: {
					display: false
				}
			},
			x: {
				grid: {
					display: false
				},
				ticks: {
					display: true,
					color: 'black',
					autoSkip: false, // Prevent automatic skipping of labels
					maxRotation: 0, // Set rotation to 0 degrees
					minRotation: 0
				}
			}
		},
		plugins: {
			legend: {
				display: false
			},
		},
		
	   }

});
	
})