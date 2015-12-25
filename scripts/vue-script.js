 /*Vue.compoment = ('screenDetailEdit',{
	template:'#screenDetail',
	props:{

	}

}) */


new Vue({
	el:'#content',
	data:{
		 selectNum:0, 
		 screens:[]
	},
	methods:{
		addScreen:function(){
			var addScreen = this.selectNum; 
			var nowScreenNum = this.screens.length; 
			var gap = 0;
			
			if(nowScreenNum == 0){
			  for(var i=0; i<addScreen; i++){
				this.screens.push(i);
			  } 
			}else if(nowScreenNum > addScreen){
				gap = nowScreenNum - addScreen;
				for(var i=gap; i>0; i--){
                  this.screens.pop(i);
				}
			}else if(nowScreenNum < addScreen){
				gap = addScreen - nowScreenNum;
				for(var i=gap; i<addScreen; i++){
                  this.screens.push(i);
				}
			}
                       

		},
	}
})