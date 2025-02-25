jQuery(document).ready(function($){	


	// tabing js
	setTimeout(()=>{
		jQuery("#et-boc ul li a").eq(0).click();
	},1000)

	// Función para actualizar el precio total en el configurador
	function updateTotalPrice() {
		const totalPriceElement = document.querySelector('.ms-resume-total .woocommerce-Price-amount');
		const currencySymbolElement = document.querySelector('.ms-resume-total .woocommerce-Price-currencySymbol');

		if (!totalPriceElement || !currencySymbolElement) {
			console.error('Uno o ambos elementos de precio no se detectaron.');
			return;
		}

		let originalPrice = parseFloat(totalPriceElement.textContent.replace(/[^0-9.,]/g, '').replace('.', '').replace(',', '.'));
		let quantity = parseInt($('.add_cart_quantity_whislits .product-filter-qty-input').val());
		if (isNaN(quantity) || quantity < 1) {
			quantity = 1;
			$('.add_cart_quantity_whislits .product-filter-qty-input').val(quantity);
		}

        let newTotal = originalPrice;
		totalPriceElement.innerHTML = newTotal.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' ' + currencySymbolElement.textContent;
	}

	$.fn.setResume = function(addons) {
		//console.log($(addons))
		return this.each(function(i, e) {
			// Limpia el contenido actual del elemento
			$(e).empty();
	
			// Inicializa variables
			let _ret = ''; // Contenido HTML que se irá construyendo
			let _total = ''; // Total final a mostrar
			let _addon_price_value = 0; // Suma de precios de los addons
	
			// Obtiene el estado del campo ACF enable_absolute_price
			let _enable_absolute_price = my_acf_vars.acfValue;
	
			// Obtiene la cantidad actual del input
			let quantity = parseInt($('.add_cart_quantity_whislits .ms-product-filter-qty-input').val());
			if (isNaN(quantity) || quantity < 1) {
				quantity = 1; // Establece una cantidad mínima de 1 si el valor es inválido
			}
	
			// Construye el HTML para los addons
			_ret += '<div class="ms-resume-items-wrapper">';
			$(addons).each(function(index, elem) {
				_ret += '<div class="ms-resume-items">';
				_ret += '<div class="ms-resume-addon-label"><span class="h6">' + elem.getName() + '</span></div>';
				if (elem.getRawPrice() > 0) {
					// Si el precio bruto del addon es mayor que 0, lo muestra
					_ret += '<div class="ms-resume-addon-price"><span class="h6">' + elem.getPrice() + '</span></div>';
					_addon_price_value += elem.getRawPrice(); // Suma el precio bruto del addon al total
				} else {
					// Si el precio bruto del addon es 0 o negativo, muestra un espacio vacío
					_ret += '<div class="ms-resume-addon-price"></div>';
				}
				_ret += '</div>'; // Cierra el div de los addons
			});
	
			// Calcula el total a mostrar basado en el estado de enable_absolute_price
			if (_enable_absolute_price == 1) {
				// Si enable_absolute_price es verdadero, muestra solo el valor de los addons
				_total = _addon_price_value * quantity; // Multiplica el precio total de los addons por la cantidad
			} else {
				// Si enable_absolute_price es falso, suma el precio del producto y los addons
				_total = (_addon_price_value + _ms_product_price) * quantity; // Multiplica la suma del precio del producto y los addons por la cantidad
			}
	
			// Construye el HTML para el total
			_ret += '</div>'; // Cierra el contenedor de los addons
			_ret += '<div class="ms-resume-total">';
			_ret += '<span class="ms-resume-total-label h6"> Total </span>';
			_ret += '<span class="ms-resume-total-price h5">' + wc_price(_total, wc_settings_args) + '</span>';
			_ret += '</div>';
	
			// Añade el contenido HTML al elemento
			$(e).append(_ret);
	
			// Actualiza la vista con la nueva información
			$('window').resumeView();
		});
	};
	
	$.fn.ShowResumeFilterPrice = function(addons){		
		return this.each(function(i,e) {
			$(e).empty();
			let _total = '';
			let _addon_price_value = 0;
			// Obtiene el estado del campo ACF enable_absolute_price
			let _enable_absolute_price = my_acf_vars.acfValue;
			$(addons).each(function(index,elem){
				if (elem.getRawPrice()>0){
					_addon_price_value+=elem.getRawPrice();
				} 
			});		
			if(_enable_absolute_price == 1){				
				if( _addon_price_value > 0){
					_total = _addon_price_value ;
				} else {
					_total = _ms_product_price;
				}
		    } else {
				_total = _addon_price_value + _ms_product_price;
			}
			// Total
			//alert(_total,wc_settings_args,wc_price( _total, wc_settings_args ));
			$(e).append(wc_price( _total, wc_settings_args ));
		});
	}	
	
	
	$('.tab-title').on('click',function(){

		$('.tab-resume').hide();
		$('#resume-'+$(this).attr('id')).show();
        //Art Project Group
        if ( $(this).attr('id') == 'tab-title-2' ) {
            //$('#tab-2 .ms-product-filter-qty').trigger("change");
        } else if ( $(this).attr('id') == 'tab-title-1' ) {
            //$('#tab-1 .ms-product-filter-qty').trigger("change");
        }
        //Art Project Group
	});
	$(window).on('resize scroll',()=>{
	    $('window').resumeView();
	});
	$.fn.resumeView = function() {
	    /*let _elem = $('.ms-last-summary');
	    let _viewport = $(_elem).isInViewport();
	    if (_viewport.inViewport) {
            console.log('visible');
            $('.ms_tab_list ul.tabs').removeClass('tabs-summary-less');
            $('.ms_tab_list ul.tabs li div.filter-content .h6').show();
            //$('.ms_tab_list ul.tabs li div.filter-link').html('Más Info.');
            $('.ms_tab_list').css('margin-bottom','64px');
        } else {
            $('.ms_tab_list ul.tabs').addClass('tabs-summary-less');
            $('.ms_tab_list ul.tabs li div.filter-content .h6').hide();
            //$('.ms_tab_list ul.tabs li div.filter-link').html('<i class="fa-solid fa-plus"></i>');
            $('.ms_tab_list').css('margin-bottom','8px');
            console.log('NO visible', _viewport.distance);
            if (_viewport.distance<0){
                let new_height = $('.ms-resume-items-wrapper').height()+_viewport.distance;
                if (new_height<100){
                    new_height=100;
                }
                $('.ms-resume-items-wrapper').height(new_height);
                $('.ms-resume-items-wrapper').css('overflow','auto');
            }
        }*/
	}
	$.fn.isInViewport = function() {
	    var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return { 'inViewport' : elementBottom > viewportTop && elementTop < viewportBottom, 'distance':viewportBottom-elementBottom};        
    };

	
	// Custom Object to get prices
	window.customProductPrice = new CustomProductPrice();
	// Layout Init	
	//$('<div id="ms-resumen-block"></div>').insertAfter('#wapo-total-price-table');
	//$('#wapo-total-price-table').hide();
	window.customProductPrice.setPriceBlock();	
	$('.ms-product-filter-checkbox').change(function(event){
	    let _target = event.target;
	    if ($(_target).is(':checked')){
	        if($(_target).closest('.ms-product-filter-label').find('[name="product-qty"]').val()<=0){
	            $(_target).closest('.ms-product-filter-label').find('.ms-product-filter-qty-plus').click();
	        }
	    } else {
	        $(_target).closest('.ms-product-filter-label').find('[name="product-qty"]').val(0).change();
	    }
	});
	
	$('.ms-product-filter-qty-minus').click(function () {
		var $input = $(this).parent().find('input');
		var val = $input.val().replace(/\D/g, '');
		var min = parseInt($input.attr('min'));
		if (isNaN(val)||val==''){ val = 1;}
		var count = parseInt(val) - 1;
		count = count < min ? min : count;
		$input.val(count);		
		$input.change();
		if (count>=min){
		    $input.closest('.ms-product-filter-label').find('.ms-product-filter-checkbox').prop('checked',false).change();
		}
		updateTotalPrice(); // Llama a la función para actualizar el precio total
		return false;
	});
	$('.ms-product-filter-qty-plus').click(function () {
		var $input = $(this).parent().find('input');
		var val = $input.val().replace(/\D/g, '');
		var max = parseInt($input.attr('max'));
		var min = parseInt($input.attr('min'));
		if (isNaN(val) || val == '') { val = 1; }
		var newval = parseInt(val) + 1;
		if (newval > max) {
			newval = max;
		}
		$input.val(newval);
		$input.change();
		if (newval > min ) {
			$input.closest('.ms-product-filter-label').find('.ms-product-filter-checkbox').prop('checked', true).change();
		}
		updateTotalPrice(); // Llama a la función para actualizar el precio total
		return false;
	});
	$('.ms-product-filter-qty-input').change(function() {
		var filter = $(this).val().replace(/\D/g, '');
		var max = parseInt($(this).attr('max'));
		if (filter == '') {
			filter = 0;
		}
		if (filter > max) {
			filter = max;
		}
		$(this).val(filter);
		updateTotalPrice(); // Llama a la función para actualizar el precio total
	});

    //Art Project Group	
    $('.single_add_to_cart_button').on('click',function() {
        var $this = $(this);
        $(document).on("added_to_cart", function(event, data) {
        	// alert("fffff");
			var $thisbutton = $this;
			let products = eval($this.data('products'));
            _ms_resume_string   = [];
            if (products.length === 0) {
                return;
            }
            $(".wc-pao-addon-field option:selected").removeAttr("selected");
            $(".wc-pao-addon-field").trigger('change');
            window.ms_addon_pao = [];
            window.customProductPrice.fire(); 
            procesa_productos_pestanas( $thisbutton, products );
        });
    });

    function procesa_productos_pestanas( $thisbutton, products ) {
        let product_data = [];			
        $(products).each(function(index,elem){
            let prod = $('#'+elem);				
            let id = $(prod).val();
            let qty = $(prod).closest('.ms-product-filter').find('input[name="product-qty"]').val();
            product_data.push({'id':id,'qty':qty});				
        });
        _ms_resume_string, _ms_resume_stock, _ms_resume_entrega, _ms_resume_configurado = [];
        $('form.cart')[0].reset();
        $('.ms-product-filter-qty').change();						
        //console.log(JSON.stringify(product_data));			
        $('.variations-wrapper').removeClass('active');			
        var data = {
            //action: 'woocommerce_ajax_add_to_cart',
            action: 'woocommerce_ajax_add_to_cart_ms',
            products:JSON.stringify(product_data)
        };		
        $(document.body).trigger('adding_to_cart', [$thisbutton, data]);
        $.ajax({
            type: 'post',
            url: _ms_ajaxurl,
            data: data,
            beforeSend: function (response) {
                $thisbutton.removeClass('added').addClass('loading');
            },
            complete: function (response) {
                $thisbutton.addClass('added').removeClass('loading');
            },
            success: function (response) {
                //console.log(response);
                if (response.error && response.product_url) {
                    //window.location = response.product_url;
                    return;
                } else {
                    $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);				        				        
                }
            },
        });
    }

    $('[name="ms-custom-add-to-cart"]').each(function(i,e){
		$(e).on('click',function(){
			var $thisbutton = $(this);
			let products = eval($(this).data('products'));
            procesa_productos_pestanas( $thisbutton, products );
		});
	});
    //Art Project Group
    
	$(".shop-filter-custom select.orderby option:first-child").text("ORDENAR");	 
	$('[data-readmore]').each(function () {
	    $(this).append("<div class='showmorebutton'><span>VER MAS</span></div><div class='showlessbutton'><span>VER MENOS</span></div>");
	    //console.log('readmore', $(this), $(this).height(), $(this).parent().innerHeight(), ($(this).parent().innerHeight() - 30));
	    $('.showmorebutton').hide();
	    $('.showlessbutton').hide();
	    let _baseReadMore = $(this).parent();
	    let _baseReadMoreCalc = $(this).parent().parent();
	    //console.log($(this).height(), _baseReadMoreCalc.innerHeight());
	    if ($(this).height() > (_baseReadMoreCalc.innerHeight() + 30)) {
	        $('.showmorebutton').show();
	        $('.showmorebutton').on("click", function () {
	            _baseReadMore.css('overflow', 'visible');
	            _baseReadMore.css('display', 'table');
	            $('.showmorebutton').hide();
	        });
	        // Añadir ver menos
	        $('.showlessbutton').show();
	        $('.showlessbutton').on("click", function () {
	            _baseReadMore.css('overflow', 'hidden');
	            _baseReadMore.css('display', 'block');
	            $('.showmorebutton').show();
	        });
	    }
    });
	
});

// Custom Price Observer

function CustomProductPrice() {
    this.handlers = [];  // observers
    this.addons = []; // Addons
    this.basePrice = 0;
}

CustomProductPrice.prototype = {    		
    subscribe: function (fn) {
        this.handlers.push(fn);
    },
    unsubscribe: function (fn) {
        this.handlers = this.handlers.filter(
            function (item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },
    fire: function (o, thisObj) {
        var scope = thisObj || window;
        let _addons = [];
        this.handlers.forEach(function (item) {
        	let _arrElements = item.call(scope, o);
        	if(typeof _arrElements !== "undefined"){
			_arrElements.forEach(function(msaddon){
				_addons.push(msaddon);
			});
		}            
        });
        this.addons = _addons;
        this.setPriceBlock();
    },
    getAddons : function(){
    	return this.addons;
    },
    setPriceBlock : function(){
    	// alert(getAddons());
    	jQuery('#resume-tab-title-1 #wc-pao-container-right #addons').setResume(this.getAddons()); //Art Project Group #addons
    	jQuery('ins.h4').ShowResumeFilterPrice(this.getAddons());
    }
}

// Addon Price Object

class MsAddOn{
  // define a constructor inside class
  constructor(name, rawprice, price){
    this.name=name; 
    this.rawprice=rawprice; 
    this.price=price; 
  }
  // method show
  getName(){
    return this.name;
  }
  getPrice(){
    return this.price;
  }
  getRawPrice(){
    return parseFloat(this.rawprice);
  }
}

function MssetCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function MsgetCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function generateCookieId(){
    return Date.now()+window.crypto.getRandomValues(new Uint32Array(1))[0];
}