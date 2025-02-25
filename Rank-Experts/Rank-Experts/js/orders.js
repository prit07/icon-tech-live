$(document).ready(function(){
	$("#order-table").DataTable({
		"responsive": true,
		info: true,
		"lengthChange": true,
		"oLanguage": { "sSearch": '<a class="searchBtn" id="searchBtn"><img src="img/search-sm.svg"></a>' },
		"autoWidth": false,
		scrollX: true,
		select: true,
		fixedColumns: {
			left: 2,
		},
		order: [[0, 'desc']]
	});
});