1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer:
>getElementById catches only element with that id
>getElementsByClassName catches the element with the same class name
>querySelector find the first element that matches the selector
>querySelectorAll find the all element that matches the selector

2. How do you **create and insert a new element into the DOM**?
Answer:you can create any element with document.createElenet into the dom and to insert use document.append()

3. What is **Event Bubbling** and how does it work?
Answer: When you click on something (like a button), the event doesn’t just stop at that button.
It goes upwards through its parents (like the button → div → body → html → document).
This is called bubbling, because it’s like bubbles floating up.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer: Event Delegation ,Instead of adding event listeners to many child elements, you put one listener on their parent and check which child was clicked.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
 Answer: PreventDefault() Stops the default action of an element like form with a submit button thats stop reloading the website.
stopPropagation() Stops the event from bubbling up to parent elements.
