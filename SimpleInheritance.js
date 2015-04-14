//Showing the prototype philoshpy for simple inheritance in javascript

var ClassA = function() {
	this.name = "class A";
}

ClassA.prototype.print = function(){
	console.log(this.name);
}

var a = new ClassA();

a.print();

var inheritsFrom = function(child,parent){
	child.prototype = Object.create(parent.prototype);
};

var ClassB = function(){
	this.name = "class B";
	this.surname = "I'm the child";
}

//Overriding the print method of class A
ClassB.prototype.print = function() {
	ClassA.prototype.print.call(this);
	console.log(this.surname);
}

//inheritsFrom(ClassB, ClassA);

var b = new ClassB();

b.print();

var ClassC = function(){
	this.name = "class C";
	this.surname = "I,m the grandchild";
}

inheritsFrom(ClassC, ClassB);

ClassC.prototype.foo = function(){
		//Do some funky stuff here...
}

ClassC.prototype.print = function(){
	ClassB.prototype.print.call(this);
	console.log("Sounds like this is working!");
}

var c = new ClassC();

c.print();
