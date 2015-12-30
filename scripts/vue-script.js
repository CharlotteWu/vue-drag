 
//data model 
var screens = [];
//vue component
//screen component
 
//edit area component                    
 
 
//init Vue 
new Vue({
	el:'#content',
	data:{ 
		 screens:screens 
	},
	methods:{
		addScreen:function(){ 
		  screens.push([]);
		},  
		addWord:function(screen){    
		  screen.push({content:'gaga'});
		}, 
		removeWord:function(screen,content){
		   screen.$remove(content);
		},
		removeScreen:function(screen){
		  screens.$remove(screen);
		} 
	}
})