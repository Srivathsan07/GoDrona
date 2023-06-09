// sidemenu

$(document).ready(function(){
    $('.menu-ico-g').click(function(){
    $('.page-wrapper').toggleClass('hide');
        });
        $('.menu-ico-g').click(function(){
            if($(this).hasClass('mb-ic')) {
            $(this).removeClass('mb-ic');
            }
            else{
                $(this).addClass('mb-ic');
            }
        });
$(document).on('click', function(event) {
  if ((!$(event.target).closest('.profile').length) && (!$(event.target).closest('.profiledropdown').length) ) {
	$(".profiledropdown").removeClass("fade").addClass('fade_reverse');
  }
});


// Checkbox
  $('.card-header input').change(function(){
	if($(this).prop('checked')){
		$('.chk').prop('checked',true);
	}
	else{
		$('.chk').prop('checked',false);
	}
  });
  $('.chk').change(function(){
	var count = 0;
		for(var i =0; i < $('.chk').length; i++ ){
		//$('.chk:eq(1)')
			if($('.chk:eq('+i+')').prop('checked') == true){
				count++;
			}
		}	
		if(count==$('.chk').length){
			$('.checkAll').prop('checked',true);
		}
		else{
			$('.checkAll').prop('checked',false);
		}
  });
// End Checkbox

   });

//    side bar toggle

$(document).ready(function(){
  $(".dropdown-menu-sec").click(function(){
	if($(this).hasClass("act")){
		$(this).removeClass("act");
	}
	else{
		$(".dropdown-menu-sec").removeClass("act");
		$(this).addClass("act");
	}
});
});



//   select with search



// Event listeners

// Open/close
$(document).on('click', '.dropdown-select', function (event) {
    if($(event.target).hasClass('dd-searchbox')){
        return;
    }
    $('.dropdown-select').not($(this)).removeClass('open');
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
        $(this).find('.option').attr('tabindex', 0);
        $(this).find('.selected').focus();
    } else {
        $(this).find('.option').removeAttr('tabindex');
        $(this).focus();
    }
});

// Close when clicking outside
$(document).on('click', function (event) {
    if ($(event.target).closest('.dropdown-select').length === 0) {
        $('.dropdown-select').removeClass('open');
        $('.dropdown-select .option').removeAttr('tabindex');
    }
    event.stopPropagation();
});

function filter(){
    var valThis = $('#txtSearchValue').val();
    $('.dropdown-select ul > li').each(function(){
     var text = $(this).text();
        (text.toLowerCase().indexOf(valThis.toLowerCase()) > -1) ? $(this).show() : $(this).hide();         
   });
};
// Search

// Option click
$(document).on('click', '.dropdown-select .option', function (event) {
    $(this).closest('.list').find('.selected').removeClass('selected');
    $(this).addClass('selected');
    var text = $(this).data('display-text') || $(this).text();
    $(this).closest('.dropdown-select').find('.current').text(text);
    $(this).closest('.dropdown-select').prev('select').val($(this).data('value')).trigger('change');
});

// Keyboard events
$(document).on('keydown', '.dropdown-select', function (event) {
    var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
    // Space or Enter
    //if (event.keyCode == 32 || event.keyCode == 13) {
    if (event.keyCode == 13) {
        if ($(this).hasClass('open')) {
            focused_option.trigger('click');
        } else {
            $(this).trigger('click');
        }
        return false;
        // Down
    } else if (event.keyCode == 40) {
        if (!$(this).hasClass('open')) {
            $(this).trigger('click');
        } else {
            focused_option.next().focus();
        }
        return false;
        // Up
    } else if (event.keyCode == 38) {
        if (!$(this).hasClass('open')) {
            $(this).trigger('click');
        } else {
            var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
            focused_option.prev().focus();
        }
        return false;
        // Esc
    } else if (event.keyCode == 27) {
        if ($(this).hasClass('open')) {
            $(this).trigger('click');
        }
        return false;
    }
});

$(document).ready(function () {
    // create_custom_dropdowns();
	  $('thead input').change(function(){
	if($(this).prop('checked')){
		$('tbody td:first-child input').prop('checked',true);
	}
	else{
		$('tbody td:first-child input').prop('checked',false);
	}
  });
  $('tbody td:first-child input').change(function(){
	var count = 0;
		for(var i =0; i < $('tbody td:first-child input').length; i++ ){
		//$('.chk:eq(1)')
			if($('tbody td:first-child input:eq('+i+')').prop('checked') == true){
				count++;
			}
		}	
		if(count==$('tbody td:first-child input').length){
			$('thead td:first-child input').prop('checked',true);
		}
		else{
			$('thead td:first-child input').prop('checked',false);
		}
  });
});



// dropdown menu in the side nav
var slideNavDropdown = $('.side-nav-dropdown');

$('.side-nav .categories li').on('click', function () {

  var $this = $(this)

  $this.toggleClass('opend').siblings().removeClass('opend');

  if ($this.hasClass('opend')) {
    $this.find('.side-nav-dropdown').slideToggle('fast');
    $this.siblings().find('.side-nav-dropdown').slideUp('fast');
  } else {
    $this.find('.side-nav-dropdown').slideUp('fast');
  }
});

$('.side-nav .close-aside').on('click', function () {
  $('#' + $(this).data('close')).addClass('show-side-nav');
  contents.removeClass('margin');
});


// progress bar start

$( document ).ready(function(){
    $('.now').css("width", function(){
        return $(this).attr("data")
    })
});