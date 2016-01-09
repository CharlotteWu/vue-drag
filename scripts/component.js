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
				 dragLocation:function(sender){ 
 					var loc=parentOffset(sender.$event.target);

					var elX = parseInt(loc.left);
					var elY = parseInt(loc.top);

					console.log(elX);
					console.log(elY); 
				}
			}
		},

		'picture':{
			template:'#image-template',
			props:{
				screen:Array
			},
			methods:{
				 
			} 
		}
	}
}) 

function parentOffset(el){
	var parentOffset=$(el).parents().first().offset();
 	var senderOffset=$(el).offset();

 	return {
 		left:senderOffset.left-parentOffset.left,
 		top:senderOffset.top-parentOffset.top,
 		width:senderOffset.width,
 		height:senderOffset.height 
 	}
}