DOM will allow us to interface our JS code to intercat with HTML and CSS.
Browser will construct a DOM, which means storing  all the HTML tags as js objects

<!-- ![DOM model](/home/kulwinder/Desktop/Portfolio/Django/Sec10_DOM/Screenshot_2023-01-05_11-17-30.png) -->


<img src="/home/kulwinder/Desktop/Portfolio/Django/Sec10_DOM/screenshot/Screenshot_2023-01-05_11-17-30.png" alt="Getting started" />
The right hand side in the imagei is the DOM tree, which is a representation of the HTML document. The left hand side is the HTML document. We can grab things from this document object model (DOM) using JS.

To see the actual objects use: "console.dir(document)"

If we go to console of any page and type "document" we will see the DOM tree of that page. But if we want js objects we can use "console.dir(document)"

Js Objects are properties and their values.

we can grab the properties of the document object and edit the values of the properties to create changes
## part1
<img src="/home/kulwinder/Desktop/Portfolio/Django/Sec10_DOM/screenshot/Screenshot_2023-01-05_11-37-02.png">
<img src="/home/kulwinder/Desktop/Portfolio/Django/Sec10_DOM/screenshot/Screenshot_2023-01-05_11-37-55.png">
<img src="/home/kulwinder/Desktop/Portfolio/Django/Sec10_DOM/screenshot/Screenshot_2023-01-05_12-06-02.png">

<img src="/home/kulwinder/Desktop/Portfolio/Django/Sec10_DOM/screenshot/Screenshot_2023-01-05_12-04-02.png">
The querySelector will grab the first element/object matching the CSS style selector but the querySelectorAll return list of all objects matching the CSS style selector.

Now its turn to grab the elements from the DOM tree and change their properties.
<img src="/home/kulwinder/Desktop/Portfolio/Django/Sec10_DOM/screenshot/Screenshot_2023-01-05_12-16-59.png">
we can change the properties of the elements using the js objects in console or also in js file and add it to html using script tag.

- Create color changing header
[random color generator in js](https://stackoverflow.com/questions/1484506/random-color-generator)

## part2
 <p>To Edit Styles, we've already seen we can use the .style tag.
      Now if we want to edit <strong>actual html or text</strong> or
      <a href="http://www.google.com">attributes</a> we can use different methods.
       If you want to change the text,html content, or attributes you can use the following:
    </p>
    <ul>
      <li>myvariable.textContent - This returns just the text</li>
      <li>myvariable.innerHTML - This returns the actual html</li>
      <li>myvariable.getAttribute() - This returns the original attribute</li>
      <li>myvariable.setAttribute() - This allowed you to set an attribute</li>
    </ul>

    In this we change the text of the p tag using textContent and innerHTML
  <img src="/home/kulwinder/Desktop/Portfolio/Django/Sec10_DOM/screenshot/Screenshot_2023-01-05_12-34-39.png">
  There is difference between innerHTML and textcontent id=f we change something using tags also we use innerHTML and if we just change the text we use textContent.
  <img src="/home/kulwinder/Desktop/Portfolio/Django/Sec10_DOM/screenshot/Screenshot_2023-01-05_12-39-50.png">
  <img src="/home/kulwinder/Desktop/Portfolio/Django/Sec10_DOM/screenshot/Screenshot_2023-01-05_12-42-45.png">
  here we select anchor tag inside the h4 tag having id special.
  we also can change the attribute of the tag using setAttribute and also select the attribute using getAttribute.
  
  ## main.html and main.js
  
  <img src="/home/kulwinder/Desktop/Portfolio/Django/Sec10_DOM/screenshot/Screenshot_2023-01-05_12-45-57.png">
  <img src="/home/kulwinder/Desktop/Portfolio/Django/Sec10_DOM/screenshot/Screenshot_2023-01-05_12-46-22.png">
  <img src="/home/kulwinder/Desktop/Portfolio/Django/Sec10_DOM/screenshot/Screenshot_2023-01-05_12-46-58.png">
see main.js file

[link for many events](https://www.w3schools.com/jsref/dom_obj_event.asp)