import React from 'react';
import {render} from 'react-dom';

import App from './App';


render(
    <App/>,
    document.querySelector('#root')
)


/* function count(num){
    return num+1
} */


/* function* test(){
    const one = yield count(0);
    const two = yield count(one);
    const three = yield count(two);

}

const test1= test();
test1.next();
test1.next();
test1.next(); */


/* function changeObjProperty(o) {
    o.siteUrl = "http://www.baidu.com"
    o = new Object();

    o.siteUrl = "http://www.google.com"
  } 
  let webSite = new Object();
  changeObjProperty(webSite);
  console.log(webSite.siteUrl); */
/* function Foo() {
    Foo.a = function() {
        console.log(1)
    }
    this.a = function() {
        console.log(2)
    }
}
Foo.prototype.a = function() {
    console.log(3)
}
console.log(Foo);
console.log(Foo.prototype)
Foo.a = function() {
    console.log(4)
}
Foo.a();
let obj = new Foo();
obj.a();
Foo.a(); */

  
/* function a() {
    this.name = 'a';
    
  }
  a.prototype.getName = function getName() {
    return this.name
  }
  function b() {}

  b.prototype = new a();
  console.log(a.prototype,a,new a());
  console.log(b.prototype) */
/*   console.log(b.prototype.__proto__ === a.prototype); // true
  console.log(b.__proto__ === a); // false
  console.log(b.__proto__); // [Function] */