Certainly! Here is a comprehensive list of ES6 features with code examples:

1. Block-Scoped Variables (let and const):

   ```javascript
   let x = 10;
   const y = 20;
   ```

2. Arrow Functions:

   ```javascript
   const multiply = (a, b) => a * b;
   ```

3. Template Literals:

   ```javascript
   const name = "John";
   console.log(`Hello, ${name}!`);
   ```

4. Destructuring Assignment:

   ```javascript
   const { firstName, lastName } = person;
   ```

5. Default Parameters:

   ```javascript
   function greet(name = "Anonymous") {
     console.log(`Hello, ${name}!`);
   }
   ```

6. Object Literal Enhancements:

   ```javascript
   const x = 10,
     y = 20;
   const point = { x, y };
   ```

7. Spread Operator:

   ```javascript
   const arr1 = [1, 2, 3];
   const arr2 = [...arr1, 4, 5];
   ```

8. Rest Parameter:

   ```javascript
   function sum(...numbers) {
     return numbers.reduce((acc, val) => acc + val);
   }
   ```

9. Classes:

   ```javascript
   class Person {
     constructor(name) {
       this.name = name;
     }

     sayHello() {
       console.log(`Hello, ${this.name}!`);
     }
   }
   ```

10. Promises:

    ```javascript
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        // Perform asynchronous operation
        if (success) {
          resolve(data);
        } else {
          reject(error);
        }
      });
    };
    ```

11. Modules:

    ```javascript
    // file: math.js
    export const sum = (a, b) => a + b;

    // file: main.js
    import { sum } from "./math.js";
    ```

12. Iterators and Iterables:

    ```javascript
    const myArray = [1, 2, 3];
    const iterator = myArray[Symbol.iterator]();

    console.log(iterator.next()); // { value: 1, done: false }
    console.log(iterator.next()); // { value: 2, done: false }
    console.log(iterator.next()); // { value: 3, done: false }
    console.log(iterator.next()); // { value: undefined, done: true }
    ```

13. Generators:

    ```javascript
    function* fibonacci() {
      let prev = 0,
        curr = 1;
      while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
      }
    }

    const fib = fibonacci();
    console.log(fib.next()); // { value: 1, done: false }
    console.log(fib.next()); // { value: 1, done: false }
    console.log(fib.next()); // { value: 2, done: false }
    // ...
    ```

14. Symbol:

    ```javascript
    const sym = Symbol("description");
    ```

15. Map:

    ```javascript
    const map = new Map();
    map.set("key", "value");
    ```

16. Set:

    ```javascript
    const set = new Set();
    set.add("item");
    ```

17. For...of Loop:

    ```javascript
    const arr = [1, 2, 3];
    for (const item of arr) {
      console.log(item);
    }
    ```

18. Rest/Spread Properties:

    ```javascript
    const { x, y, ...rest } = { x: 1, y: 2, z: 3, a: 4 };
    ```

19. Proxy:

    ```javascript
    const handler = {
      get: function (target, prop) {
        return prop in target ? target[prop] : "Property does not exist.";
      },
    };
    const obj = new Proxy({}, handler);
    ```

20. Object.getOwnPropertyDescriptors:

    ```javascript
    const obj = { name: "John" };
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    ```

21. Array.find and Array.findIndex:

    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    const found = numbers.find((element) => element > 3);
    const index = numbers.findIndex((element) => element > 3);
    ```

22. String Methods:

    ```javascript
    const str = "Hello, world!";
    console.log(str.startsWith("Hello")); // true
    console.log(str.endsWith("world!")); // true
    console.log(str.includes("o")); // true
    ```

23. Array Methods:

    ```javascript
    const numbers = [1, 2, 3];
    const doubled = numbers.map((num) => num * 2);
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    ```

24. Object.assign:

    ```javascript
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const merged = Object.assign({}, obj1, obj2);
    ```

25. Promise.all and Promise.race:

    ```javascript
    const promise1 = fetchData();
    const promise2 = fetchData();

    Promise.all([promise1, promise2])
      .then((results) => {
        // Handle results of both promises
      })
      .catch((error) => {
        // Handle error
      });

    Promise.race([promise1, promise2])
      .then((result) => {
        // Handle the first resolved promise
      })
      .catch((error) => {
        // Handle error
      });
    ```

26. Enhanced Object Literals:

    ```javascript
    const x = 10,
      y = 20;
    const point = {
      x,
      y,
      calculateDistance() {
        return Math.sqrt(x * x + y * y);
      },
    };
    ```

27. Async/Await:

    ```javascript
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    };
    ```

28. Array.from:

    ```javascript
    const arr = Array.from("hello");
    console.log(arr); // ['h', 'e', 'l', 'l', 'o']
    ```

29. Array.of:

    ```javascript
    const arr = Array.of(1, 2, 3);
    console.log(arr); // [1, 2, 3]
    ```

30. Array.includes:

    ```javascript
    const arr = [1, 2, 3];
    console.log(arr.includes(2)); // true
    ```

31. Number Methods:

    ```javascript
    console.log(Number.isNaN(NaN)); // true
    console.log(Number.isFinite(10)); // true
    ```

32. Math Methods:

    ```javascript
    console.log(Math.pow(2, 3)); // 8
    console.log(Math.trunc(4.9)); // 4
    ```

33. Proxy:

    ```javascript
    const handler = {
      get(target, property) {
        return target[property];
      },
      set(target, property, value) {
        target[property] = value;
      },
    };

    const obj = new Proxy({}, handler);
    obj.x = 10;
    console.log(obj.x); // 10
    ```

34. Reflect API:

    ```javascript
    const obj = {
      name: "John",
      age: 30,
    };

    console.log(Reflect.has(obj, "name")); // true
    console.log(Reflect.ownKeys(obj)); // ['name', 'age']
    ```

35. Modules:

    ```javascript
    // file: math.js
    export const sum = (a, b) => a + b;

    // file: main.js
    import { sum } from "./math.js";
    ```

These are just some of the key features introduced in ECMAScript 6 (ES6). There are many more features and enhancements available in ES6 that can help you write more efficient and expressive JavaScript code.

```

```
