/* eslint-disable space-infix-ops */

// 1. a Shape constructor has a name property & sides property - number
  function Shape(name, sides){
    this.name = name;
    this.sides = sides;
  }

// 2. a Rectangle is a shape - height, width
  // on the Rectangle's prototype - an area function , a perimeter function
  // make sure to connect the Rectangle and the Shape
  function Rectangle(height, width, name, sides){
    this.height = height;
    this.width = width;
    Shape.call(this, name, sides); //this = Rectangle
  }
  //Object.create() methord is used to create a new object with the specified prototype object and properties.
    //Object.create() is used for implementing inheritance.
  Rectangle.prototype = Object.create(Shape.prototype);

  Rectangle.prototype.area = function(){
    console.log(this.height * this.width);
  }

  Rectangle.prototype.perimeter = function(){
    console.log(this.height*2 + this.width*2);
  }

// 3. a Square is a Rectangle 
  //but if the height and width are different then set the width to be the height 

  function Square(height, name, sides){
    Rectangle.call(this, height, height, name, sides);
  }

  Square.prototype = Object.create(Rectangle.prototype);