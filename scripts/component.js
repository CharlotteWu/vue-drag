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
				 dragLocation:function(sender,event){ 
				 	var event = window.event || event; 
				 	var el = sender.$event.target;
 					var loc= parentOffset(el);
 					var screenX =loc.parentWidth;
 					var screenY =loc.parentHieght;

 					var mouseX = event.clientX - loc.screenLeft +'px';
 					var mouseY = event.clientY - loc.screenTop+'px';

					var startX = parseInt(loc.left);
					var startY = parseInt(loc.top); 

					var deltaX = mouseX - startX;
					var deltaY = mouseY - startY;

					//el.style.left = (elX/screenX)*100 + '%';
					//el.style.top = (elY/screenY)*100 + '%';  

					 console.log(mouseX);
					 console.log(mouseY);

					 el.addEventListener("mousemove",function (){
	                //console.log('haha');  
						el.style.left = startX + 5 + 'px';
						el.style.top =  startY + 5 + 'px'; 

					});
					//console.log(screenX);
					//console.log(screenY); 

					 

					el.onmouseup = function(){
						//console.log('wawa');
						
					}

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
 		height:senderOffset.height,
 		parentWidth: parentOffset.width,
 		parentHieght: parentOffset.height,
 		screenLeft:senderOffset.left,
 		screenTop:senderOffset.top
 	}
}

 
