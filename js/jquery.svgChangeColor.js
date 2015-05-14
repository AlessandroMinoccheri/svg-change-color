/*
Alessandro Minoccheri
V 0.0.1
14-03-2015
*/

(function ($) {
	var numOptions = 0;

    $.fn.extend({      
        svgChangeColor: function (argumentOptions) {
            var defaults = {
				colors		: 'all'
			}
			
			var options = $.extend(defaults, argumentOptions);
            var arrColor = [];
            var onlyColors = [];
            var svg = '';
            var i = 0;

            colorToHex = function(color) {
                if (color.substr(0, 1) === '#') {
                    return color;
                }
                var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
                
                var red = parseInt(digits[2]);
                var green = parseInt(digits[3]);
                var blue = parseInt(digits[4]);
                
                var rgb = blue | (green << 8) | (red << 16);
                return digits[1] + '#' + rgb.toString(16);
            }

            getColors = function(){
                jQuery('#change-color-set').empty();
                svg.find('g').each(function(){
                    var color = jQuery(this).css('fill');

                    if((color !== 'none') && (color.indexOf('rgb') > -1)){
                        color = colorToHex(color).toUpperCase();
                    }
                    
                    var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color); 
                    if(isOk){
                        if(onlyColors.length > 0) {
                            if((jQuery.inArray(color, arrColor) == -1 ) && (jQuery.inArray(color, onlyColors) >= 0)){
                                arrColor[i++] = color;
                            }
                        }
                        else{
                            if(jQuery.inArray(color, arrColor) == -1 ) {
                                arrColor[i++] = color; 
                            }
                        }
                    }
                });

                svg.find('path').each(function(){
                    var color = jQuery(this).attr('fill');
                    var isOk = '';

                    if(color !== undefined) {
                        if(color.indexOf('url(#') > -1){
                            var id = color.replace('url(#', '').replace(')', '');
                            if(id.indexOf('SVG') > -1) {
                                jQuery('#' + id).find('stop').each(function(){
                                    color = jQuery(this).css('stop-color');
                                });
                                
                                color = colorToHex(color).toUpperCase();
                                if(color == '#0'){
                                    color = '#000000';
                                }
                                if(color == '#F'){
                                    color = '#FFFFFF';
                                }
                                isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
                                if(isOk){
                                    if(onlyColors.length > 0) {
                                        console.log('>');
                                        if((jQuery.inArray(color, arrColor) == -1 ) && (jQuery.inArray(color, onlyColors) >= 0)){
                                            arrColor[i++] = color;
                                        }
                                    }
                                    else{
                                        console.log('==');
                                        if(jQuery.inArray(color, arrColor) == -1 ) {
                                            console.log('color');
                                            arrColor[i++] = color; 
                                        }
                                    }
                                }
                            }
                        }
                        else{
                            isOk = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
                            if(isOk){
                                if(onlyColors.length > 0) {
                                    if((jQuery.inArray(color, arrColor) == -1 ) && (jQuery.inArray(color, onlyColors) >= 0)){
                                        arrColor[i++] = color;
                                    }
                                }
                                else{
                                    if(jQuery.inArray(color, arrColor) == -1 ) {
                                        arrColor[i++] = color; 
                                    }
                                }
                            }
                        }
                    }
                });
                svg.find('rect').each(function(){
                    var color = jQuery(this).attr('fill');
                    var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color); 
                    if(isOk){
                        if(onlyColors.length > 0) {
                            if((jQuery.inArray(color, arrColor) == -1 ) && (jQuery.inArray(color, onlyColors) >= 0)){
                                arrColor[i++] = color;
                            }
                        }
                        else{
                            if(jQuery.inArray(color, arrColor) == -1 ) {
                                arrColor[i++] = color; 
                            }
                        }
                    }
                });
                svg.find('polygon').each(function(){
                    var color = jQuery(this).attr('fill');
                    var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color); 
                    if(isOk){
                        if(onlyColors.length > 0) {
                            if((jQuery.inArray(color, arrColor) == -1 ) && (jQuery.inArray(color, onlyColors) >= 0)){
                                arrColor[i++] = color;
                            }
                        }
                        else{
                            if(jQuery.inArray(color, arrColor) == -1 ) {
                                arrColor[i++] = color; 
                            }
                        }
                    }
                });
                svg.find('path').each(function(){
                    var color = jQuery(this).attr('fill');
                    var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color); 
                    if(isOk){
                        if(onlyColors.length > 0) {
                            if((jQuery.inArray(color, arrColor) == -1 ) && (jQuery.inArray(color, onlyColors) >= 0)){
                                arrColor[i++] = color;
                            }
                        }
                        else{
                            if(jQuery.inArray(color, arrColor) == -1 ) {
                                arrColor[i++] = color; 
                            }
                        }
                    }
                });
                svg.find('line').each(function(){
                    var color = jQuery(this).attr('stroke');
                    var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color); 
                    if(isOk){
                        if(onlyColors.length > 0) {
                            if((jQuery.inArray(color, arrColor) == -1 ) && (jQuery.inArray(color, onlyColors) >= 0)){
                                arrColor[i++] = color;
                            }
                        }
                        else{
                            if(jQuery.inArray(color, arrColor) == -1 ) {
                                arrColor[i++] = color; 
                            }
                        }
                    }
                });
                svg.find('use').each(function(){
                    var color = jQuery(this).attr('fill');
                    var isOk = '';

                    if(color !== undefined) {
                        if(color.indexOf('url(#') > -1){
                            var id = color.replace('url(#', '').replace(')', '');
                            if(id.indexOf('SVG') > -1) {
                                jQuery('#' + id).find('stop').each(function(){
                                    color = jQuery(this).css('stop-color');
                                });
                                
                                color = colorToHex(color).toUpperCase();
                                if(color == '#0'){
                                    color = '#000000';
                                }
                                if(color == '#F'){
                                    color = '#FFFFFF';
                                }
                                color = colorToHex(color).toUpperCase();
                                isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
                                if(isOk){
                                    if(onlyColors.length > 0) {
                                        if((jQuery.inArray(color, arrColor) == -1 ) && (jQuery.inArray(color, onlyColors) >= 0)){
                                            arrColor[i++] = color;
                                        }
                                    }
                                    else{
                                        if(jQuery.inArray(color, arrColor) == -1 ) {
                                            arrColor[i++] = color; 
                                        }
                                    }
                                }
                            }
                        }
                        else{
                            isOk = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
                            if(isOk){
                                if(onlyColors.length > 0) {
                                    if((jQuery.inArray(color, arrColor) == -1 ) && (jQuery.inArray(color, onlyColors) >= 0)){
                                        arrColor[i++] = color;
                                    }
                                }
                                else{
                                    if(jQuery.inArray(color, arrColor) == -1 ) {
                                        arrColor[i++] = color; 
                                    }
                                }
                            }
                        }
                    }
                });
                
                var cont = 0;
                var div_to_append = '';
                var left = 20;
                arrColor.forEach(function(color) {
                    cont = cont + 1;
                    var top = (30 * cont);
                    if(cont == 1){
                        top = top - 5;
                        div_to_append = '<div class="list-color-in-tee-title" style="top: ' + top + 'px"><h4 style="color:#ffffff; font-size: 20px;">CAMBIA COLORI</h4></div>';
                        cont = cont + 1;
                        top = (30 * cont);
                    }
                    if(cont >= 7){
                        top = 30 * (cont - 5);
                        left = 150;
                    }

                    var print = cont - 1;

                    div_to_append += '<div id="list-color-' + print + '" class="list-color-in-tee" style="top: ' + top + 'px; left: ' + left + 'px"><span>COLOR ' +  print + '</span><div class="change-color-tee" data-color="' + color + '" style=" background: ' + color + ';"></div><div class="clear"></div></div>';
                });

                div_to_append += '</div><div class="choose-color" style="width:1000px; height:1000px;"><div id="colorSelectorContainer"><div class="picker"></div></div></div>';

                jQuery('#change-color-set').append(div_to_append);

                $(document).find('.picker').colpick({
                    flat: true
                });
            }
			
			return this.each(function () {
                var o 					= options;
				var obj 				= $(this);
                var selected_part       = '';
                svg                     = obj.find('svg');

                if(o.colors !== 'all') {
                    onlyColors = o.colors;
                }

                obj.append('<div id="change-color-set"></div>')
                getColors();

                obj.on('click', '.change-color-tee', function(){
                    var clone = $('.choose-color');
                    $('.choose-color').remove();
                    $(this).after(clone);
                    $(document).find('.choose-color').show();

                    selected_part = $(this).attr('id');
                });
            });
        }
    });
})(jQuery);