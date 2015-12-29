 
//data model 
var screens =  [];
//vue component
//screen component
 
//edit area component                    
 
 
//init Vue 
new Vue({
	el:'#content',
	data:{ 
		 screens:screens,
		 times:1
	},
	methods:{
		addScreen:function(){ 
		  screens.push(this.screens.$set('screen',[]));
		},  
		addContent:function(screen){    
		   screen.push({content:'haha'});
		}, 
		editContent:function(){
 
		},
		removeContent:function(content){
		   screen.$remove(content);
		},
		removeScreen:function(screen){
		   screens.$remove(screen);
		} 
	}
})