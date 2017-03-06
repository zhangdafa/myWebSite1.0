Vue.component("post-blog",{
	props:["blog"],
	data:function(){
		return {}
	},
	methods:{

	},
	template:'\
			  <div class="blog-post">\
                    <h2 class="post-title">{{blog["title"]}}</h2>\
                    <p class="post-time">{{blog["time"]}}</p>\
                    <p class="post-content">{{blog["content"]}}</p>\
              </div>\
	'
});
var site=new Vue({
	el:"#mySite",
	data:{
		cover:true,
		arr:[]
	},
	methods:{
		refresh:function(){
			jQuery.ajax({
				dataType:"json",
				url:"/index",
				type:"post",
				success:function(data){
					console.log(data);
					site.arr=data;
				}

			});
		}
	},
	computed:{

	}
});
site.refresh();