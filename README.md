# writer-library

Writer library, or type writer, is a simple javascript library that can be used to give texts a simple type writing effect.

# Installation
``` 
npm i @navidmnzh/writer-library 
```
and in your main js file:
```javascript
import TypeWriter from './node_modules/@navidmnzh/writer-library/writer.js';
```

# How to use
Imagine that you have a ``` p ``` tag, and a few texts inside of it.
You can use the library like the below:

```javascript

// selecting the element
let el = document.querySelector('p');

// creating a type writer instance
let typeWriter = new TypeWriter({
	element: el,
	speed: 100,
	direction: 'rtl',
	state: 'onPageLoad'
});

// starting the type writer
typeWriter.init();

```

# Object Properties

**element**: This property is used to define the text containing element.

**speed**: The speed of every letter being written in ms.

**direction**: The direction of the text. Options: ```ltr``` and ```rtl```.

**state**: The time when the type writer starts typing. Options: ```onPageLoad``` and ```onPageScroll```
