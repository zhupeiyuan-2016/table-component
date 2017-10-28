#Table-component
<hr>

## About
  	此项目是自己学习封装的练习，希望自己能坚持下去，
  	Table组件，希望能尽可能的做到拿来即用的效果。
  	
## Install
	git clone https://github.com/zhupeiyuan-2016/table-component.git
	
	Directory：
	
		├── README.md
		├── dome
		│   ├── base
		│   │   ├── base.json
		│   │   ├── iconfont.css
		│   │   ├── js.js
		│   │   └── table.css
		│   ├── index.html
		│   └── input.json
		└── project
		    ├── base
		    │   ├── a.json
		    │   ├── ajax.js
		    │   ├── base.json
		    │   ├── iconfont.css
		    │   ├── js.js
		    │   └── table.css
		    ├── index.html
		    ├── input.json
		    └── js.js
		    
		4 directories, 16 files
	
## Usage

##### Introducing Files
	<link rel="stylesheet" href="base/table.css" />
	<link rel="stylesheet" href="base/iconfont.css" />
	<script type="text/javascript" src="base/js.js" ></script>
	
##### Template :
	<div class="table-content" id="a"></div>
	<script type="text/javascript">
		var url = 'base/base.json'; 			//配置文件目录
		init(url);
	</script>

## configuration

###### Set up 
	{
	"input":{						//注入数据
		"url":"input.json",
		"method":"get"
	},
	"operation":{					//操作设置
		"switch":false,				//操作开关
		"delete": true				//删除一行
	},
	"show":{
		"toolbar": "b"              //table容器                    
	},
	"columns": [{					//table->th头
               "class": "xxx",		//CSS ->class
                "title": "xxx"		//内容
            }, {
               "class": "xxx",
                "title": "xxx"
            },  {
               "class": "xxx",
                "title": "xxx"
            }
            ]
}

###### input
	{
	"code":200,					
	"msg": [
		{
			"name": "小明",
			"height": "191cm",
			"sex": "男"
		}, {
			"name": "小花",
			"height": "180cm",
			"sex": "女"
		}, {
			"name": "小红",
			"height": "164cm",
			"sex": "女"
		}
	]
}
	
