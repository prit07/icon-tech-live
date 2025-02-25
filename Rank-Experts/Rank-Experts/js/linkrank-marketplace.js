$(document).ready(function(){
	$("#marketplace-table").DataTable({
		"oLanguage": { "sSearch": '<a class="searchBtn" id="searchBtn"><img src="img/search-sm.svg"></a>' },
		"responsive": true,
		info: true,
		"lengthChange": true,
		"autoWidth": false,
		select: true,
		"initComplete": function (settings, json) {  
			jQuery("#marketplace-table").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");
		}, 
		fixedColumns: {
			left: 2,
		},
		"columnDefs": [ { "orderable": false, "targets": 0 } ],
		order: [[3, 'asc']],
		dom: 'Blfrtip',
		buttons: [
			{ text: '<i class="fas fa-filter"></i>', attr: { id: 'filters-btn'}},
			{ text: '<img src="img/upload_2_line.svg"> Export', attr: {id: 'export-btn' }}, 
			{ text: 'Reset filters', attr: { id: 'reset-filters-btn'}
		}, 
		],
	});


	

	// select box js
	$("select").select2({});

	// modal popup js

	$('#filters-btn').click(function(){
		$('#filter-popup').modal('toggle');
	})

	// BUY BUTTON CLICK
	$('#marketplace-table').on('click','a.buy_link',function(e){
		e.preventDefault();
		var cur = $(this);
		var val = parseInt($(this).parent().find(".itm_qty").text());
		var url = $("#site_url").val();
		var p_id = $(this).parent().attr("p_id");
		var fd = new FormData();
		fd.append( 'process', 'get_product_cart_qty' );
		fd.append( 'p_id', p_id );

		cur.hide();
		cur.next().show();
		if(val == 0){ $(this).parent().find(".fa-plus").click(); }
	});

	// CART MINUS CLICK
	$('#marketplace-table').on('click','.fa-minus',function(e){
		e.preventDefault();
		var val = parseInt($(this).next().text());
		if(val > 0){
			var url = $("#site_url").val();
			var fd = new FormData();  
			var p_id = $(this).parent().parent().attr("p_id");
			var new_qty = val-1;

			fd.append( 'process', 'update_cart' );
			fd.append( 'p_id', p_id );
			fd.append( 'qty', new_qty );

			// send_ic_ajax(url,fd);

			$(this).next().text(new_qty);
			if(new_qty == 0){
				$(this).parent().hide();
				$(this).parent().parent().find("a.buy_link").show();   
			}
		}else{
			$(this).parent().hide();
			$(this).parent().parent().find("a.buy_link").show();
		}
	});

    // CART PLUS CLICK
	$('#marketplace-table').on('click','.fa-plus',function(e){
		e.preventDefault();
		var val = parseInt($(this).prev().text());
		if(val <= 99){
			var url = $("#site_url").val();
			var fd = new FormData();  
			var p_id = $(this).parent().parent().attr("p_id");
			var new_qty = val+1;

			fd.append( 'process', 'update_cart' );
			fd.append( 'p_id', p_id );
			fd.append( 'qty', new_qty );

			// send_ic_ajax(url,fd);

			$(this).prev().text(new_qty);
		}
	});
})
