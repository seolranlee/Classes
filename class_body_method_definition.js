// Class body 와 메서드 정의
// Class body는 중괄호 {} 로 묶여 있는 안쪽 부분입니다. 이곳은 여러분이 메서드나 constructor와 같은 class 멤버를 정의할 곳입니다.

// Strict mode
// 클래스의 본문(body)은 strict mode에서 실행됩니다. 즉, 여기에 적힌 코드는 성능 향상을 위해 더 엄격한 문법이 적용됩니다. 그렇지 않으면, 조용히 오류가 발생할 수 있습니다. 특정 키워드는 미래의 ECMAScript 버전용으로 예약됩니다.

// Constructor (생성자)
// constructor 메서드는 class 로 생성된 객체를 생성하고 초기화하기 위한 특수한 메서드입니다. "constructor" 라는 이름을 가진 특수한 메서드는 클래스 안에 "한 개만" 존재할 수 있습니다. 만약 클래스에 여러 개의 constructor 메서드가 존재하면 SyntaxError 가 발생할 것입니다.

// constructor는 "부모 클래스의 constructor를 호출하기 위해 super 키워드"를 사용할 수 있습니다.

// 프로토타입 메서드
// 메서드 정의도 참조해보세요.

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   // Getter
//   get area() {
//     return this.calcArea();
//   }

//   // method
//   calcArea() {
//     return this.height + this.width;
//   }
// }

// const square = new Rectangle(10, 10);

// console.log(square.area); // 100

// 정적 메서드와 속성
// static 키워드는 클래스를 위한 정적(static) 메서드를 정의합니다.
// 정적 메서드는 클래스의 인스턴스화(instantiating) 없이 호출되며, "클래스의 인스턴스에서는 호출할 수 없습니다."
// 정적 메서드는 어플리케이션(application)을 위한 유틸리티(utility) 함수를 생성하는 데 주로 사용됩니다.
// 반면, 정적 속성은 캐시, 고정 환경설정 또는 인스턴스 간에 복제할 필요가 없는 기타 데이터에 유용합니다.

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   static displayName = "Point";
//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;

//     return Math.hypot(dx, dy);
//   }
// }

// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);

// console.log(p1.displayName); // undefined
// console.log(p1.distance); // undefined

// console.log(p2.displayName); // undefined
// console.log(p2.distance); // undefined

// console.log(Point.displayName); // Point
// console.log(Point.distance(p1, p2)); // 7.0710678118654755

// 프로토타입 및 정적 메서드를 사용한 this 바인딩
// 메서드를 변수에 할당 한 다음 호출하는 것과 같이, 정적 메서드나 프로토타입 메서드가 this 값 없이 호출될 때, this 값은 메서드 안에서 undefined가 됩니다.
// 이 동작은 "use strict" 명령어 없이도 같은 방식으로 동작하는데, "class 문법 안에 있는 코드는 항상 strict mode 로 실행"되기 때문입니다.

// class Animal {
//   speak() {
//     return this;
//   }
//   static eat() {
//     return this;
//   }
// }

// let obj = new Animal();
// console.log(obj.speak()); // Animal {}

// // 메서드를 변수에 할당
// let speak = obj.speak;

// // this값 없이 호출
// console.log(speak()); // undefined

// console.log(Animal.eat()); // [class Animal]
// let eat = Animal.eat();
// eat(); // TypeError: Class constructor Animal cannot be invoked without 'new'

// 위에 작성된 코드를 전통적 방식의 (프로토타입) 함수기반의 non–strict mode 구문으로 재작성하면, this 메서드 호출은 기본적으로 전역 객체인 초기 this 값에 자동으로 바인딩 됩니다.
// "Strict mode에서는 자동 바인딩이 발생하지 않습니다"; this 값은 전달된 대로 유지됩니다.

// function Animal() {}

// Animal.prototype.speak = function () {
//   return this;
// };

// Animal.eat = function () {
//   return this;
// };

// let obj = new Animal();
// console.log(obj.speak()); // Animal {}
// let speak = obj.speak;
// console.log(speak()); // global object (in non–strict mode)

// let eat = Animal.eat;
// console.log(eat()); // global object (in non–strict mode)

// 인스턴스 속성
// 인스턴스 속성은 반드시 클래스 "메서드 내"에 정의되어야 합니다:

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// 정적 (클래스사이드) 속성과 프로토타입 데이터 속성은 반드시 클래스 선언부 바깥쪽에서 정의되어야 합니다.
// Rectangle.staticWidth = 20;
// Rectangle.prototype.prototypeWith = 25;

// const rec = new Rectangle(10, 10);

// console.log(rec.staticWidth); // undefined
// console.log(rec.prototypeWith); // 25

// Field 선언
// Warning: public과 private 필드 선언은 자바스크립트 표준화 위원회에 실험적 기능 (stage 3) TC39 로 제안되어있습니다. 현재 이를 지원하는 브라우져는 제한적인 상태입니다만, Babel 과 같은 build 시스템을 사용한다면 이 기능을 사용해볼 수 있습니다.

// Public 필드 선언: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Public_class_fields
// 자바스크립트의 필드 선언 문법을 사용해서 위의 예제는 아래와 같이 다시 쓰여질 수 있습니다.

// class Rectangle {
//   height = 0;
//   width;

//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// const rec = new Rectangle();

// console.log(rec);

// Private 필드 선언: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields
// private 필드를 사용하면 아래와 같이 예제를 개선할 수 있습니다.
// class Rectangle {
//   #height = 0;
//   #width;
//   constructor(height, width) {
//     this.#height = height;
//     this.#width = width;
//   }
// }

// const rec = new Rectangle(10, 10);
// console.log(rec);

// 클래스의 바깥에서 private 필드를 접근하려고 하면 에러가 발생합니다. private필드는 클래스 내부에서만 읽고 쓰기가 가능합니다. 클래스 외부에서 보이지 않도록 정의하였으므로 클래스가 버젼업 되면서 내부 구현이 바뀌더라도 클래스 사용자 입장에서는 이에 아무런 영항을 받지 않도록 할 수 있습니다.

// Note: Private 필드는 사용전에 선언되어야 합니다.

// 일반적인 프로퍼티와는 다르게 private 필드는 값을 할당하면서 만들어질 수 없습니다.
