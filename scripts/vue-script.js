 Vue.component('edit',{
	template:'#screenEdit',
	props:{
		words:Object 
	}, 
	 
	methods:{
		addWord:function(){   
		   this.words.push();
		},
		removeWord:function(){
			this.words.pop();
		},
	}
	 
});



new Vue({
	el:'#content',
	data:{ 
		 screens:[], 
		 times:1
	},
	methods:{
		addScreen:function(times){   
			this.screens.push(times);  
		},

		removeScreen:function(times){
			this.screens.pop(times);
		}, 
		 

	}
})