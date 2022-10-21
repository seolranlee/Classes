// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes

// Class는 객체를 생성하기 위한 템플릿입니다. 클래스는 데이터와 이를 조작하는 코드를 하나로 추상화합니다. 자바스크립트에서 클래스는 프로토타입을 이용해서 만들어졌지만 ES5의 클래스 의미와는 다른 문법과 의미를 가집니다.
// Class는 사실 "특별한 함수"입니다. 함수를 함수 표현식과 함수 선언으로 정의할 수 있듯이 class 문법도 class 표현식 and class 선언 두 가지 방법을 제공합니다.

// 1. Class 선언
// Class를 정의하는 한 가지 방법은 class 선언을 이용하는 것입니다. class를 선언하기 위해서는 클래스의 이름(여기서 "Rectangle")과 함께 class 키워드를 사용해야 합니다.

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// Hoisting
// 함수 선언과 클래스 선언의 중요한 차이점은 함수의 경우 정의하기 하기 전에 호출할 수 있지만, 클래스는 반드시 정의한 뒤에 사용할 수 있다는 점입니다. 다음 코드는 ReferenceError를 던질 것입니다.

// const p = new Rectangle(); // ReferenceError: Cannot access 'Rectangle' before initialization

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// f();

// function f() {
//   console.log("function f");
// }

// 예외가 발생하는 이유는 클래스가 호이스팅될 때 초기화는 되지 않기 때문입니다.

// 2. Class 표현식
// Class 표현식은 class를 정의하는 또 다른 방법입니다. Class 표현식은 이름을 가질 수도 있고, 갖지 않을 수도 있습니다. 이름을 가진 class 표현식의 이름은 클래스 body의 local scope에 한해 유효합니다. (하지만, 클래스의 (인스턴스 이름이 아닌) name 속성을 통해 찾을 수 있습니다).

// unnamed
// let Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// console.log(Rectangle.name); // Rectangle

// named
// let Rectangle = class Rectangle2 {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// console.log(Rectangle.name); // Rectangle2

// 참고: 클래스 표현식에도 Class 선언 섹션에 설명된 것과 동일한 호이스팅 제한이 적용됩니다.

// const rect = new Rectangle(); // ReferenceError: Cannot access 'Rectangle' before initialization

// let Rectangle = class Rectangle2 {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
