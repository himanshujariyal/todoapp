

$(document).ready(function(){

	$("#todoCreateForm").submit(function(e){
    e.preventDefault();
  });
	$('.squaredTwo label').on('click',function(){
			// $(this).closest('.squaredTwo').find('input')

			if ($(this).parent().find('input').prop('checked')) {    
   				$(this).parent().find('input').removeAttr('checked');
			} else {
    			$(this).parent().find('input').attr('checked','checked'); 
				}
	});


	$('#todo-list li ').on('mouseover',function(){
		$(this).css({'border-left':'2px solid rgba(130, 197, 181, 0.97)'});
		
	});
	$('#todo-list li ').on('mouseleave',function(){
		$(this).css({'border-left':'0px'});
		
	});

	$('#markall').on('click',function(){
		if($(this).find('b').html()=='Mark all'){
			$(this).find('b').text('Unmark all');
		}
		else{
			$(this).find('b').text('Mark all');
		}
	})

	


});
