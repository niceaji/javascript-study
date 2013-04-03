## Backbone

JavaScript MV Framework

***

## Model

* 데이터와 데이터를 쉽게 다루는 도구들

## View

* 모델과 모델을 쉽게 표현하는 도구들

## Collection

* 모델의 집합과 집합을 쉽게 다루는 도구들

***

## 장점

* 알아서 함
* 모듈화가 편함

## 단점

* 어려움

***

## Message 튜토리얼

간단한 게시판을 만들어봅시다.

[예제](http://jsfiddle.net/yakulten/sqemS/)

***

## Model 코드
	var Model = Backbone.Model.extend({
		"defaults": {
			"id": null,
			"content": "",
			"regdate": null,
			"user": {
				"name": document.domain.replace(/^([^\.]+).*$/, "$1"),
				"img": "https://air21.daum.net/images/sticker/high/sticker_232.png"
			},
			"like": {
				"id": "",
				"total": 0
			}
		}
	});

## View 코드
	var View = Backbone.View.extend({
		"events": {
		},
		"tagName": "li",
		"template": template,
		"initialize": function(options){
			_.extend(this, {}, options);
		},
		"render": function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

## Collection 코드
	var Collection = Backbone.Collection.extend({
		"model": Model,
		"url": "/messages",
		"initialize": function(models, options){
			_.extend(this, {}, options);
		}
	});

## List 코드
	var List = Backbone.View.extend({
		"view": View,
		"events": {
			"submit .message-form": "submitHandler"
		},
		"initialize": function(options){
			_.extend(this, {
				"$form": $(".message-form"),
				"$list": $("#messageList")
			}, options);
			_.bindAll(this, "render", "prepend");
			this.collection.on("reset", this.render);
			this.collection.on("add", this.prepend);
		},
		"render": function(){
			this.$list.empty();
			this.collection.each(this.prepend);
		},
		"prepend": function(model){
			var view = new this.view({
				"model": model,
				"list": this
			});
			this.$list.prepend(view.render().$el);
		},
		"create": function(json){
			// DO SOMETHING
		},
		"submitHandler": function(e){
			e.preventDefault();
			this.create({
				"content": this.$form.find("[name=content]").val(),
				"regdate": new Date().getTime()
			});
		}
	});

***







