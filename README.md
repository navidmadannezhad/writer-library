# writer-library

Writer library, or type writer, is a simple javascript library that can be used to give texts a simple type writing effect.

# How to use

Imagine that you have a ```html p ``` tag, and a few texts inside of it.
You can use the library like the above:

```javascript

// selecting the element
let el = document.querySelector('p');

// creating a type writer instance
let typeWritter = new TypeWriter({
			element: el,
			speed: 100,
			direction: 'rtl',
			state: 'onPageLoad'
		});

// starting the type writer
typeWritter.init();

```
