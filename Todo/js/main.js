
(function(){

	var todoApp = angular.module('Todo',[]);

	todoApp.controller("todocontroller", ["$scope", function($scope){

		this.todoList = [{text : "Watch Movie", done :false, colorcatogory:"red"}];
		this.doneList = [];
		$scope.thingtodo = "";
		

		this.addItem = function _addItem(thingtodo)
		{
			
			this.todoList.push({text : thingtodo, done :false,colorcatogory:"red"});
			$scope.thingtodo = "";
		};


		this.markDone = function _markDone(clickedItem)
		{
			
			 this.todoList = this.todoList.filter(function(item ){
				if (item.text == clickedItem.todoitem.text) 
				{
					return false;	
				}
				return true;
			});

			 console.log(this.todoList);
			 this.doneList.push({text:clickedItem.todoitem.text, done: clickedItem.todoitem.text,
			 	colorcatogory:clickedItem.todoitem.colorcatogory});
		};


		this.markUnDone = function _markUnDone(itemToReadd)
		{
			this.doneList = this.doneList.filter(function(item){
				if(item.text === itemToReadd.doneitem.text)
					return false;
				return true;
			});

			this.todoList.push({text:itemToReadd.doneitem.text, done: false, colorcatogory:itemToReadd.doneitem.colorcatogory});
		};

		//not used
		this.removeItems = function _removeItems()
		{
			for (var i = this.todoList.length - 1; i >= 0; i--) {
				var thing = this.todoList[i]
				if(thing.done == true)
				{
					this.todoList.splice(i,1);
				}
			}
		};


		this.remove = function remove(itemToRemove)
		{
			this.doneList = this.doneList.filter(function(item){
				if(item.text === itemToRemove.doneitem.text)
					return false;
				return true;
			});
		};

	}]);

})();