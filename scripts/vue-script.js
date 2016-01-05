 Vue.config.debug = true;
//data model 
var screens = [
    
  
 ];
//vue component 
 
//screen component                    
Vue.component('screen',{
	template:'#screen-template', 
	props:{
		screens:Array
	},
	methods:{

	},
	components:{
		'word':{
			template:'#word-template',
			props:{
				screen:Array
			},
			methods:{

			}
		},

		'image':{
			template:'image-template',
			props:{
				screen:Array
			},
			methods:{

			}

		}
	}
  
}) 
 
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
		addImg:function(screen,imgsrc){
			screen.push({img:imgsrc});
		},
		removeWord:function(screen,content){
		   screen.$remove(content);
		},
		removeScreen:function(screen){
		  screens.$remove(screen);
		} 


	}
})
 