Vue.component('a-list', {
    props: ['items'],
    template: '\
	    		<tr>\
					<td v-for="item in items">\
						{{item}}\
					</td>\
					<td>\
	                    <button class="btn btn-primary btn-xs" @click.prevent="updateBtn()">修改</button>\
	                    <button class="btn btn-danger btn-xs" @click.prevent="deleteBtn()">删除</button>\
	                </td>\
				</tr>\
	',
	data:function(){
		return {
			id:null
		}
	},
	methods:{
		getID:function(){
			for(var item in this.items){
				if(this.items[item]===this.items["id"]){
					this.id=this.items[item];
					break;
				}
			}
		},
		deleteBtn:function(){
			console.log("items:",this.items);
			//获取每篇文章的id
			this.getID();
			console.log("id:",this.id);
			//发送id信息，并刷新列表内容
			jQuery.ajax({
				data:{deleteID:this.id},
				type:"post",
				url:"/admin/delete_db",
				dataType:"json",
				success:function(data){
					adminVue.refresh();
				}
			});
		},
		//获取数据的函数(更新数据的前一步)
		updateBtn:function(){
			this.getID();
			console.log(this.id);
			for(var i=0;i<adminVue.messages.length;i++){
				if(adminVue.messages[i]["id"]===this.id){
					uAdminVue.utitle=adminVue.messages[i]["title"];
					uAdminVue.ucontent=adminVue.messages[i]["content"];
					uAdminVue.utime=adminVue.messages[i]["time"];
					uAdminVue.id=adminVue.messages[i]["id"];
					jQuery("#updataModal").modal("show");
					break;
				}
			}
		}
	}
});
 // <slot name="three" v-for="item in items" :text="item.text"></slot>
var adminVue = new Vue({
    el: '#admin',
    //数据
    data: {
    	//v-model绑定表单内容
    	//表单标题
    	title:null,
    	//表单内容
    	content:null,
    	//表单时间
    	time:null,
    	//提交按钮点击判断,
    	submitClick:false,
    	//未裁剪的数据库数据
        messages:[],
        //裁剪过的数据库数据（列表数据）
        arr:[]
    },
    //函数
    methods: {
    	//获取数据库数据
        refresh: function() {
            jQuery.ajax({
                dataType: "json",
                type: "post",
                url: "/admin/refresh",
                success:function(data){
                	console.log(data);
            		adminVue.changeLength(data);
                }
            });
        },
        //数据分配
        changeLength:function(array){
        	//对象数组的深拷贝
        	array.forEach(function(value,key){
        		var res={};
        		for(var k in value){
        			res[k]=value[k];
        		}
        		adminVue.messages.push(res);
        		console.log(adminVue.messages);
        	});
        	console.log(this.messages);
            this.arr=array.slice();
        	this.arr.forEach(function(value,index){
        		delete value.content;
        		delete value.status;
        	});
        },
        //点击改变判断位，并判断发送请求，添加数据
        submitBtn:function(){
        	this.submitClick=true;
        	if(!this.titleError["has-error"]&&
        	   !this.contentError["has-error"]&&
        	   !this.timeError["has-error"]){
        	   	var jsonArticle={
        	   		title:this.title,
        	   		content:this.content,
        	   		time:this.time
        	   	};
        	   	jQuery.ajax({
        	   		url:"/admin/insert_db",
        	   		type:"post",
        	   		data:jsonArticle,
        	   		dataType:"json",
        	   		success:function(data){
        	   			console.log(data);
        	   			adminVue.refresh();
        	   		}
        	   	});
        	}
        }
    },
    computed:{
    	titleError:function(){
    		return {"has-error":!this.title&&this.submitClick}
    	},
    	contentError:function(){
    		return {"has-error":!this.content&&this.submitClick}
    	},
    	timeError:function(){
    		return {"has-error":!/^(([0-9]){4})-(0[0-9]|1[0-2])-([0-2][0-9]|3[0-1]) ([0-1][0-9]|2[0-4]):([0-5][0-9]):([0-5][0-9])$/
    							.test(this.time)
    							&&this.submitClick}
    	}
    }
});
//修改数据的Vue对象(模态框)
var uAdminVue=new Vue({
	el:'#updataModal',
	data:{
		id:null,
		utitle:null,
		ucontent:null,
		utime:null,
		updateClick:false
	},
	methods:{
		updateBtnModal:function(){
        	this.updateClick=true;
        	if(!this.utitleError["has-error"]&&
        	   !this.ucontentError["has-error"]&&
        	   !this.utimeError["has-error"]){
        	   	var jsonArticle={
        	   		id:this.id,
        	   		title:this.utitle,
        	   		content:this.ucontent,
        	   		time:this.utime
        	   	};
        	   	console.log(jsonArticle);
        	   	jQuery.ajax({
        	   		url:"/admin/update_db",
        	   		type:"post",
        	   		data:jsonArticle,
        	   		dataType:"json",
        	   		success:function(data){
        	   			console.log(data);
        	   			jQuery("#updataModal").modal("hide");
        	   			adminVue.refresh();
        	   		}
        	   	});
        	}
        }
	},
	computed:{
		utitleError:function(){
    		return {"has-error":!this.utitle&&this.updateClick}
    	},
    	ucontentError:function(){
    		return {"has-error":!this.ucontent&&this.updateClick}
    	},
    	utimeError:function(){
    		return {"has-error":!/^(([0-9]){4})-(0[0-9]|1[0-2])-([0-2][0-9]|3[0-1]) (([0-1][0-9])|2[0-4]):([0-5][0-9]):([0-5][0-9])$/
    							.test(this.utime)
    							&&this.updateClick}
    	}
	}
});
//第一次刷新数据
adminVue.refresh();