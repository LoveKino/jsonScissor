json-scissor
===================================  
Json scissor tool, it's simple and useful.

What can json-scissor do?
-----------------------------------

There is a json, looked like:
```
{
	"name": "ddchen",
	"experience": [{
		"name": "scair",
		"time": "2013-2014"
	}, {
		"name": "BIDU",
		"time": "2014-today"
	}],
	"programing": {
		"level": "study",
		"skilled": ["js", "front-end", "node", "mvc", "template engine", "etc"]
	},
	"looks": "good"
}
```
But, I think attributes like "time", "level", "looks" is useless, I want to "cut them" from the original json.
So, json-scissor can help you with that task.
By using json-scissor, we can get target json, looked like:
```
{
	"name": "ddchen",
	"experience": [{
		"name": "scair"
	}, {
		"name": "BIDU"
	}],
	"programing": {
		"skilled": ["js", "front-end", "node", "mvc", "template engine", "etc"]
	}
}
```

How to use json-scissor?
-----------------------------------
### install
npm install json-scissor
### require module
```
var jsonScissor = require("json-scissor");
```
And we got a source json
```
var sourceJson = {
	"name": "ddchen",
	"experience": [{
		"name": "scair",
		"time": "2013-2014"
	}, {
		"name": "BIDU",
		"time": "2014-today"
	}],
	"programing": {
		"level": "study",
		"skilled": ["js", "front-end", "node", "mvc", "template engine", "etc"]
	},
	"looks": "good"
}
```
### define your target json sample
The target json sample is a json too. It's used to describe target json. Because it's just a json (one of those you want), it's easy to build.
```
var tarSample = {
	"name": "",
	"experience": [{
		"name": ""
	}, {
		"name": ""
	}],
	"programing": {
		"skilled": []
	}
}
```
Notice that, for target json sample:
* the attributes you do not want is missing.
* we don't care about attribute's value in json sample.

### call interface
```
var result = jsonScissor.clip(sourceJson, tarSample);

```
And result is what we want,
```
{
	"name": "ddchen",
	"experience": [{
		"name": "scair"
	}, {
		"name": "BIDU"
	}],
	"programing": {
		"skilled": ["js", "front-end", "node", "mvc", "template engine", "etc"]
	}
}
```
json-scissor interface
-----------------------------------
### clip
```
clip : function(sourceJson, tarSample, config){}
```
#### sourceJson 
  the json you want to "cut".
#### tarSample 
  the sample of target json you want to get.
#### config
  * maxDeepth<br>
  define the max deepth of cutting. Starting with 1, if set means do not cut, if do not set value means cut to the deepest. 

