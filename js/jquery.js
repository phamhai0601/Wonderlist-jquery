$(document).ready(function(){
	function showCategory(){
		for(let i = 0; i < arrCategory.length; i++){
			var icon;
			if(i==0){icon = cartegoryInbox}
			else if(i==1){icon = categoryToday}
			else if(i==2){icon = categoryWeek}
			else{icon = cartegoryMore}
			var item_Category = $('<li></li>');
			item_Category.html(itemCategory);
			item_Category.find('p > span:first-child').html(icon);
			item_Category.find('p > span:last-child').html(arrCategory[i].name);
			$('#list-category').append(item_Category);
		}
	}

	function closeModelCreateList(){
		$('#create-list').css('animation','fade_out 0.8s');
		setTimeout(function(){
			$('#model-create-list').css('display','none');
			$('#create-list').css('animation','fade_in 0.8s');
		},790);
	}

	function closeModelAccountSetting(){
		$('#accountSetting').css('animation','fade_out 0.8s');
		setTimeout(function(){
			$('#modal-setting').css('display','none');
			$('#accountSetting').css('animation','fade_in 0.8s');
		},790);	
	}

































	showCategory();
	
	//modal create list
	$('#side-bar-action').click(function(){
		$('#model-create-list').css('display','block');
	});

	$('#create-list ul li button[class="btn-cancel"]').click(function(){
		closeModelCreateList();
	});
	//-------------------

	$('#account-Setting').click(function(){
		$('#modal-setting').css('display','block');
	});

	// click out modal => close modal.
	$(document).click(function(event){
		if($('#model-create-list').css('display') != 'none'){
			if(event.target.className == "underlay"){
				closeModelCreateList();
			}
		}
		
		if($('#account-Setting').css('display') != 'none'){
			if(event.target.className == "underlay"){
				closeModelAccountSetting();
			}
		}
	});


});