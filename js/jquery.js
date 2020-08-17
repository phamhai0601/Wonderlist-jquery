$(document).ready(function(){
	var elementTaskItem = null;
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
			if(arrTaskItem[i].category_id == getIdSideBarMenu()){
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
				if($('#right-content').css('width') != '0px' ){
					if($('#right-content').attr('itemtask-id') == arrTaskItem[i].id){
						item_task.addClass('active');
					}
				}
				addEventTaskItem(item_task);				
			}

		}
	}

	function removeItemTaskCenter(){
		$('#center-task div').remove();
		$('#task-complete div').remove();
	}

	function showMainRigt(id){
		removeAllSubTask();
		$('#right-content').css('width','370px');
		$('#right-content').attr('itemtask-id',id);
		$('.head-right-content span:first-child').html(arrTaskItem[id].status==0?checkboxUnSucces:checkBoxSuccess);
		$('.head-right-content input').attr('value',arrTaskItem[id].title);
		$('.head-right-content span:last-child').html(arrTaskItem[id].start==0?iconStart:iconRedStart);
		$('.center-right-content ul li input[type="date"]').attr('value',arrTaskItem[id].time);
		$('.center-right-content ul li input[type="datetime-local"]').attr('value',arrTaskItem[id].clock);
		if(arrTaskItem[id].subtask.length > 0){
			for(let i = 0; i < arrTaskItem[id].subtask.length; i++){
				var item_subtask = $('<li subtask-id='+arrTaskItem[id].subtask[i].subtask_id+'></li>');
				item_subtask.html(subtask);
				item_subtask.find('span:first-child').text(arrTaskItem[id].subtask[i].content);
				$('#box-subtask').append(item_subtask);
				addEvenRemoveSubTask(item_subtask);
			}			
		}

		if(arrTaskItem[id].note.length > 0){
			for(let i = 0; i < arrTaskItem[id].note.length; i++){
				var item_note = $('<li note-id='+arrTaskItem[id].note[i].note_id+'></li>');
				item_note.html(subtask);
				item_note.find('span:first-child').text(arrTaskItem[id].note[i].content);
				$('#box-note').append(item_note);
				addEvenRemoveNote(item_note);			
			}
		}

		if(arrTaskItem[id].comment.length > 0){
			for(let i = 0; i < arrTaskItem[id].comment.length; i++){
				var item_comment = $('<div comment_id='+arrTaskItem[id].comment[i].comment_id+'></div>');
				item_comment.html(nodeComment);
				item_comment.find('p > span:last-child').text(': '+arrTaskItem[id].comment[i].content);
				$('#box-comment').append(item_comment);
				addEvenRemoveComment(item_comment);
			}
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
		console.log(id);
		console.log(arrTaskItem[id].status);
		$('#context-item').css('display','block');
		if(arrTaskItem[id].status == 0){
			$('#mark-as-completed').css('display','block')
			$('#mark-as-un-completed').css('display','none');
		}else{
			$('#mark-as-completed').css('display','none');
			$('#mark-as-un-completed').css('display','block');
		}

		$('#context-item').attr('item-task-id',id);
		$('#context-item').css('top',y);
		$('#context-item').css('left',x);
		var height = $('body').offsetHeight - y;
		if(height < $('#context-item').offsetHeight){
			$('#context-item').css('height',height);
		}
	}

	function removeAllSubTask(){
		$('#box-subtask li').remove();
		$('#box-note li').remove();
		$('#box-comment div').remove();
	}

	function removeClassActive(selector){
		$(selector).each(function(){
			$(this).removeClass('active');
		});
	}

	function getIdSideBarMenu(){
		return $('#list-category').find('li[class=active]').attr('id');
	}

	function gerIdActiveItemTask(){
		$('#')
	}
	
	//--------------------------

	//Function addEvent
	function addEventMenuSideBar(element){
		element.contextmenu(function(event){

			showMenuSideBar(event.clientX,event.clientY,$(this).attr('id'));
			event.preventDefault();
		});
		addEventActiveMenuSideBar(element);
	}

	function addEventDbClickTaskItem(element){
		element.dblclick(function(){
			$('#center-task div').removeClass('active');
			$(this).addClass('active');
			showMainRigt($(this).attr('data-id'));//Show Main Right với từng id
		});
	}



	function addEventTaskItem(element){ //add su kien cho nhieu element
		element.contextmenu(function(event){
			elementTaskItem = $(this);
			showContextMenu(event.clientX,event.clientY,$(this).attr('data-id'));
			event.preventDefault();
		});
		addEventDbClickTaskItem(element);
		addEventCheckBoxSucessTaskItem(element);
	}

	function addEventActiveMenuSideBar(element){
		element.click(function(){
			removeClassActive('#list-category li');
			$(this).addClass('active');
			removeItemTaskCenter();
			showItemTaskCenter();

		});
	}

	function addEvenRemoveComment(element){ // element is div.
		element.find('span[name=delete-comment]').click(function(){
			var id = $('#right-content').attr('itemtask-id');
			var dataConfirm = confirm("Bạn muốn xóa comment?");
			if(dataConfirm == true){
				element.remove();
				delete arrTaskItem[id].comment[element.attr('comment_id')];
			}	
		});
	}
	function addEvenRemoveSubTask(element){ // element is li.
		element.find('span:last-child').click(function(){
			var id = $('#right-content').attr('itemtask-id');
			var dataConfirm = confirm("Bạn muốn xóa subtask?");
			if(dataConfirm == true){
				element.remove();
				delete arrTaskItem[id].subtask[element.attr('subtask-id')];
			}	
		});
	}

	function addEvenRemoveNote(element){
		element.find('span:last-child').click(function(){
			var id = $('#right-content').attr('itemtask-id');
			var dataConfirm = confirm("Bạn muốn xóa note?");
			if(dataConfirm == true){
				element.remove();
				delete arrTaskItem[id].note[element.attr('note-id')];
			}	
		});
	}

	function addEventCheckBoxSucessTaskItem(element){
		var id = element.attr('data-id');
		element.find('span[class=icon-item-task]').click(function(){
			console.log($(this));
			arrTaskItem[id].status = arrTaskItem[id].status == 0?1:0; 
			removeItemTaskCenter();
			showItemTaskCenter();
		});
	}
	//-------------------------------

	//function auto run
	showCategory();
	showItemTaskCenter();
	//--------------------
	
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
	$('#close-right').click(function(){
		$('#right-content').css('width','0px');
	});

	// Mark as Completed 
	$('#mark-as-completed').click(function(){ 
		 var id = $('#context-item').attr('item-task-id');
		 arrTaskItem[id].status = 1;
		 removeItemTaskCenter();
		 showItemTaskCenter();
		 $('#context-item').css('display','none');
	});

	$('#mark-as-un-completed').click(function(){
		 var id = $('#context-item').attr('item-task-id');
		 arrTaskItem[id].status = 0;
		 removeItemTaskCenter();
		 showItemTaskCenter();
		 $('#context-item').css('display','none');		
	});
	//------------------------------------

	$('#mark-as-start').click(function(){
		var id = elementTaskItem.attr('data-id');
		elementTaskItem.find('p + span').html(arrTaskItem[id].start==0?iconRedStart:iconStart);
		arrTaskItem[id].start = arrTaskItem[id].start==0?1:0;
		$('#context-item').css('display','none');
		showMainRigt(id);
		elementTaskItem = null;
	});
});