/*

Sure! Here are 25 commonly asked CSS interview questions along with their answers:

1. What is CSS?
CSS stands for Cascading Style Sheets. It is a style sheet language used for describing the presentation of a document written in HTML or XML.

2. What is the difference between inline, internal, and external CSS?
Inline CSS is applied directly within the HTML element using the "style" attribute. Internal CSS is defined within the `<style>` tags in the `<head>` section of an HTML file. External CSS is stored in a separate CSS file and linked to the HTML file using the `<link>` tag.

3. What is the CSS box model?
The CSS box model describes the layout and spacing of elements on a web page. It consists of the content, padding, border, and margin of an element.

4. How do you select elements with CSS?
You can select elements using various CSS selectors such as element selectors, class selectors, ID selectors, attribute selectors, etc.

5. What are pseudo-classes and pseudo-elements in CSS?
Pseudo-classes are used to select elements based on certain states or conditions, such as `:hover`, `:active`, or `:nth-child()`. Pseudo-elements, on the other hand, target specific parts of an element, such as `::before` or `::after`.

6. What is the difference between margin and padding?
Margin is the space outside the border of an element, while padding is the space between the content and the border of an element.

7. What is a CSS selector specificity?
Specificity determines which CSS rule is applied when multiple rules target the same element. It is calculated based on the type of selector used (ID, class, element), inline styles, and the number of selectors used.

8. What is the "float" property used for?
The `float` property in CSS is used to specify whether an element should float to the left, right, or none. It is commonly used for creating multi-column layouts or positioning elements.

9. How can you center an element horizontally and vertically in CSS?
To center an element horizontally, you can use `margin: 0 auto;` or `text-align: center;`. To center vertically, you can use `display: flex;` and `align-items: center;` or `position: absolute;` with `top: 50%;` and `transform: translateY(-50%);`.

10. What is the "box-sizing" property used for?
The `box-sizing` property is used to control how the width and height of an element are calculated. The default value is `content-box`, but you can also use `border-box` to include padding and border in the element's total width and height.

11. How can you apply multiple CSS classes to an element?
You can apply multiple CSS classes to an element by separating them with a space within the `class` attribute, like this: `<div class="class1 class2 class3"></div>`.

12. What is the CSS "display" property used for?
The `display` property specifies how an element should be displayed. Some commonly used values are `block`, `inline`, `inline-block`, `none`, etc.

13. What is a CSS preprocessor?
A CSS preprocessor is a scripting language that extends CSS and allows for variables, functions, nesting, and other advanced features. Examples of CSS preprocessors include Sass, Less, and Stylus.

14. How can you hide an element with CSS?
You can hide an element by using `display: none;` or `visibility: hidden;`. The difference is that `display: none;` removes the element from the page layout, while `visibility: hidden;` hides the element but still takes up space.

15. What is the CSS "box-shadow" property used for?
The `box-shadow` property adds a shadow effect to an element. It allows you to specify the color, size, blur radius, and position of the shadow.

16. What is the CSS "z-index" property used for?
The `z-index` property specifies the stacking order of positioned elements. It determines which elements appear on top of others when they overlap.

17. What is the difference between "em" and "rem" units in CSS?
The "em" unit is relative to the font-size of its nearest parent element, while the "rem" unit is relative to the font-size of the root element (usually the `<html>` element). 

18. What is a CSS sprite?
A CSS sprite is a single image that combines multiple smaller images into one larger image. It is used to reduce the number of HTTP requests made by a web page, improving performance.

19. How can you apply a background image to an element in CSS?
You can apply a background image to an element using the `background-image` property in CSS. For example: `background-image: url('image.jpg');`

20. What is the CSS "media query" used for?
A media query is a CSS technique used to apply different styles based on the characteristics of the device or viewport, such as screen size, resolution, or orientation. It allows for responsive web design.

21. How can you create a responsive layout in CSS?
To create a responsive layout, you can use techniques such as media queries, fluid grids, and flexible units like percentages or viewport-relative units (e.g., `vw`, `vh`).

22. What is the CSS "transition" property used for?
The `transition` property is used to create smooth transitions between different property values. It allows you to specify the duration, timing function, and other properties of the transition effect.

23. What is the CSS "flexbox" layout?
Flexbox is a CSS layout model that provides an efficient way to align and distribute space among items in a container. It offers powerful and flexible options for creating responsive and dynamic layouts.

24. What is the CSS "grid" layout?
CSS Grid Layout is a two-dimensional grid system that allows for complex grid-based layouts. It provides precise control over the placement and sizing of elements, making it suitable for both simple and complex designs.

25. How can you style links differently when they are visited or hovered over?
You can style links differently using pseudo-classes such as `:visited` or `:hover`. For example:
```css
a:visited {
  color: purple;
}

a:hover {
  background-color: yellow;
}
```

These are just some of the commonly asked CSS interview questions. It's always a good idea to review and understand the fundamentals of CSS and practice implementing various styles and layouts to strengthen your knowledge.

*/