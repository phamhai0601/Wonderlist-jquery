$(document).ready(function(){

	//function Show
	function showCategory(){
		for(let i = 0; i < arrCategory.length; i++){
			var icon;
			if(i==0){icon = cartegoryInbox}
			else if(i==1){icon = categoryToday}
			else if(i==2){icon = categoryWeek}
			else{icon = cartegoryMore}
			var item_Category = $('<li></li>');
			item_Category.addClass(i==0?"active":"");
			item_Category.attr('id',arrCategory[i].id);
			item_Category.html(itemCategory);
			item_Category.find('p > span:first-child').html(icon);
			item_Category.find('p > span:last-child').html(arrCategory[i].name);
			$('#list-category').append(item_Category);
			addEventMenuSideBar(item_Category);
		}
	}

	function showItemTaskCenter(){
		for(let i = 0; i < arrTaskItem.length; i++){
			
			if(arrTaskItem[i].status == 0){
				var item_task = $('<div class="item-task" draggable="true"></div>');
				item_task.attr('data-id',arrTaskItem[i].id);
				item_task.attr('category-id',arrTaskItem[i].category_id);
				item_task.html(itemTaskUnSuccess);
				if(arrTaskItem[i].start == 1){
					item_task.find('p + span:last-child').html(iconRedStart);
				}
				item_task.find('p > span').text(arrTaskItem[i].title);
				$('#center-task').append(item_task);
			}else{
				var item_task = $('<div class="item-task" draggable="true"></div>');
				item_task.attr('data-id',arrTaskItem[i].id);
				item_task.attr('category-id',arrTaskItem[i].category_id);
				item_task.html(itemTaskSuccess);
				if(arrTaskItem[i].start == 1){
					item_task.find('p + span:last-child').html(iconRedStart);
				}
				item_task.find('p > span:first-child').text(arrTaskItem[i].title);
				console.log(item_task);
				$('#task-complete').append(item_task);

			}
			addEventTaskItem(item_task);
		}
	}
	//---------------------------


	//functional functions
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

	function showMenuSideBar(x,y,id){
		$('#modal-side-bar').attr('category-id',id);
		$('#modal-side-bar').css('display','block');
		$('#modal-side-bar').css('top',y);
		$('#modal-side-bar').css('left',x);
		var height = $('body').offsetHeight-y;
		if(height < $('#modal-side-bar').offsetHeight){
			$('#modal-side-bar').css('height',height);
		}
	}

	function showContextMenu(x,y,id){
		$('#context-item').css('display','block');
		$('#context-item').css('top',y);
		$('#context-item').css('left',x);
		var height = $('body').offsetHeight - y;
		if(height < $('#context-item').offsetHeight){
			$('#context-item').css('height',height);
		}
	}

	function showMainRigt(id){
		removeAllSubTask();
		$('#right-content').css('width','370px');

		$('.head-right-content span:first-child').html(arrTaskItem[id].status==0?checkboxUnSucces:checkBoxSuccess);
		$('.head-right-content input').attr('value',arrTaskItem[id].title);
		$('.head-right-content span:last-child').html(arrTaskItem[id].start==0?iconStart:iconRedStart);
		$('.center-right-content ul li input[type="date"]').attr('value',arrTaskItem[id].time);
		$('.center-right-content ul li input[type="datetime-local"]').attr('value',arrTaskItem[id].clock);
		for(let i = 0; i < arrTaskItem[id].subtask.length; i++){
			var item_subtask = $('<li></li>');
			item_subtask.html(subtask);
			item_subtask.find('span:first-child').text(arrTaskItem[id].subtask[i].content);
			$('#box-subtask').append(item_subtask);
		}
	}

	function removeAllSubTask(){
		var boxSubTask = $('#box-subtask').children();
		console.log(boxSubTask);
	}
	//--------------------------

	//Function addEvent
	function addEventMenuSideBar(element){
		element.contextmenu(function(event){

			showMenuSideBar(event.clientX,event.clientY,$(this).attr('id'));
			event.preventDefault();
		});
	}

	function addEventDbClickTaskItem(element){
		element.dblclick(function(){
			showMainRigt($(this).attr('data-id'));//Show Main Right với từng id
		});
	}



	function addEventTaskItem(element){
		element.contextmenu(function(event){
			showContextMenu(event.clientX,event.clientY,$(this).attr('id'));
			event.preventDefault();
		});
		addEventDbClickTaskItem(element);
	}
	//-------------------------------



































	showCategory();
	showItemTaskCenter();
	
	//modal create list
	$('#side-bar-action').click(function(){
		$('#model-create-list').css('display','block');
	});

	$('#create-list ul li button[class="btn-cancel"]').click(function(){
		closeModelCreateList();
	});
	//-------------------


	$('#account-Setting').click(function(){ //show accountSetting.
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
		if($('#modal-side-bar').css('display') == 'block'){
			if($('#modal-side-bar').has(event.target).length < 1){
				$('#modal-side-bar').css('display','none')
			}			
		}
		if($('#context-item').css('display') == 'block'){
			if($('#context-item').has(event.target).length < 1){
				$('#context-item').css('display','none')
			}				
		}

	});

	$(document).keyup(function(event){
		if(event.keyCode == 27){
			if($('#create-list').css('display') == 'block'){
				closeModelCreateList();
			}
			if($('#modal-setting').css('display') == 'block'){
				closeModelAccountSetting();
			}
		}
	});
	//----------------------------------

	// button reponsive menu side bar
	$('#left-search').click(function(){
		if(screen.width > 1000){
			if($('#left-content').attr('class').indexOf('reponsive-50') > -1){
				$('#left-content').removeClass('reponsive-50');
			}else{
				$('#left-content').addClass('reponsive-50');
			}
		}else{
			if($('#left-content').attr('class').indexOf('reponsive-280') > -1){
				$('#left-content').removeClass('reponsive-280');
			}else{
				$('#left-content').addClass('reponsive-280');
			}		
		}
	});
	$(window).resize(function(){
		var element = $('#left-content');
		element.removeClass('reponsive-50');
		element.removeClass('reponsive-280');
	});
	//-------------------------------


});