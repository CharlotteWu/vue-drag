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
				screen:Array,
				index:Number 
			},
			methods:{
				 dragLocation:function(){
					var elX = this.index.offsetLeft;
					var elY = this.index.offsetTop;

					console.log(elX);
					console.log(elY);
				 }
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
	el:'#box',
	data:{ 
		 screens:screens,
		 newAnimation:''
	},
	methods:{
		addScreen:function(){ 
		  screens.push([]);
		},  
		addWord:function(screen){ 
		    screen.push({
		  	    type:1, 
		  	    content:'编辑内容',
		  	    isDisplay:true,
		  	    Location:{
					X:10,
					Y:10 
				},
				Animation:{
					Name:this.newAnimation,
					Speed:1000,
					Delay:500
				}
		  });
		  this.newAnimation='';
		}, 
		addImg:function(screen){
			screen.push({
				type:2, 
				src:'haha',
				isDisplay:true,
				Location:{
					X:10,
					Y:10 
				},
				Animation:{
					Name:'',
					Speed:1000,
					Delay:500
				}
			});
		},
		removeWord:function(screen,content){
		   screen.$remove(content);
		},
		removeScreen:function(screen){
		   screens.$remove(screen);
		} 


	}
})