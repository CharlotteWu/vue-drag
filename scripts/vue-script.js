 
//data model 
var screens = [ 
  
 ];
 
//init Vue 
new Vue({
	el:'#box',
	data:{ 
		 screens:screens,
		 newAnimation:'rotate',
		 duration:'1s',
		 delay:'2s',
		 newImg:''
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
					Speed:this.duration,
					Delay:this.delay
				}
		  }); 
		}, 
		addImg:function(screen){
			screen.push({
				type:2, 
				src:this.newImg,
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
			this.newImg='';
		},
		removeWord:function(screen,content){
		   screen.$remove(content);
		},
		removeScreen:function(screen){
		   screens.$remove(screen);
		} 


	}
})