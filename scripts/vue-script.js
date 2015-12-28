 
//data model 
var screens =  {};
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
		   Vue.set(this.screens,'children',[]); 
		},  
		addContent:function(){    
		   this.screens.children.push({content:'haha'});
		},
		removeWord:function(content){
		   this.screens.children.$remove(content);
		},
		removeScreen:function(screen){
		   this.screens.$remove(screen);
		}
		 

	}
})