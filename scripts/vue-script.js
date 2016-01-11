 
//data model 
var screens = [ 
  
 ];
 
//init Vue 
new Vue({
	el:'#box',
	data:{ 
		 screens:screens,
		 newWordAnimation:'rotate',
		 wordDuration:'1s',
		 wordDelay:'2s',
		 newPicAnimation:'rotate',
		 picDuration:'1s',
		 picDelay:'2s',
		 newImg:'',
		 bgImg:''
	},
	methods:{
		addScreen:function(){ 
		  screens.push([]);
		},  
		addScreenBgImg:function(screen){
			screen.push({
				bgImg:this.bgImg
			});
			this.bgImg='';
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
					Name:this.newWordAnimation,
					Speed:this.wordDuration,
					Delay:this.wordDelay
				}
		  }); 
		}, 
		addImg:function(screen){
			if(this.newImg == '') 
				return false; 
			else 
			screen.push({
				type:2, 
				src:this.newImg,
				isDisplay:true,
				Location:{
					X:10,
					Y:10 
				},
				Animation:{
					Name:this.newPicAnimation,
					Speed:this.picDuration,
					Delay:this.picDelay
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