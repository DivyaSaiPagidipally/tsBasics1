# tsBasics1

**Write a function that takes an array of objects and returns an array containing only the unique objects based on a specified property.
The function should take two arguments:**

● items: an array of objects.
● prop: a string representing the name of the property to use for filtering the unique objects.


*The function should return an array of objects containing only the unique objects based on the specified property. If multiple objects have the same value for the specified property, only the first occurrence should be included in the result.*
*For example, const items = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }, { id: 3, name: "John" }, { id: 4, name: "Bob" }, { id: 5, name: "Jane" }];*
*If we call function(items, "name"), the function should return: [{ id: 1, name: "John" }, { id: 2, name: "Jane" }, { id: 4, name: "Bob" }]*


**Converting TYpescript to JavaScript file:
     tsc filename.ts
     node filename.js**
