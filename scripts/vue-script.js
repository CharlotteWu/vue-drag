 
//data model 
var screens = [

 ];
//vue component
//screen component
 
//edit area component                    
 
 
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

//var config=
    {
        Title:"",
        BackgroundMusic:
        {
          Src:"",
          IsLoop:false
          IsShowLogo:true
          IsAutoStart:true
        },

        Pages:
        [
          {
            Title:"",
            IsDisplay:true,
            BackgroundImage:
            {
              Src:""
            }
            Elements:
            [
              {  //文本元素
                  Type:1,
                  ID:"",
                  Content:"",
                  IsDisplay:true,
                  Location:
                  {
                    X:10,
                    Y:20,
                    Z:100  
                  }
                  Animation:
                  {
                     Name:"",
                     Speed:0,
                     Delay:500
                  }
              },
              {  //图片元素
                  Type:2,
                  ID:"",
                  Src:"",
                  IsDisplay:true,
                  Location:
                  {
                    X:10,
                    Y:20,
                    Z:100  
                  }
                  Animation:
                  {
                     Name:"",
                     Speed:0,
                     Delay:500
                  }
              }，
              {  //图片元素
                  Type:3,
                  ID:"",
                  Src:"",
                  IsDisplay:true,
                  Location:
                  {
                    X:10,
                    Y:20,
                    Z:100  
                  }
                  Animation:
                  {
                     Name:"",
                     Speed:0,
                     Delay:500
                  }
              }
            ]


          }

        ]


    }