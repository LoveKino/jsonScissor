json-scissor
===================================  
json scissor tool

What json-scissor can do?
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

