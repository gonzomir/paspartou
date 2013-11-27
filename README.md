Paspartou - yet another lightbox script
=======================================

Why?
----

Because I hated adding 100k of javaScript just to make my image gallery a little more fancyer. And because it is a good exersize to write JavaScript with pure DOM.

How it works?
-------------

This lightbox script uses only plain JavaScript and DOM methods. It looks for a element with id="gallery", walks all the links in it and attaches event handler to load them in a predefined DOM element. I've avoided using modern methods like querySelector and querySelectorAll so that the script works in old IE. The script will use Dustin Diaz' domready() method if available and fallback to a simple replacement function that uses either the standard DOMCOntentLoaded event or window.onload.

How to use?
-----------

Add the JavaScript and CSS files to the head of your document:

```
    <link type="text/css" rel="stylesheet" href="paspartou.css" media="all" />
    <script type="text/javascript" src="paspartou.js"></script>
```

Add this markup at the bottom of your document (I hate creating markup with JavaScript):

```
    <div id="paspartou">
      <button id="prev">&#10094;</button>
      <button id="next">&#10095;</button>
      <div>
        <div></div>
      </div>
      <button id="close">&#10005;</button>
    </div>
```

Known issues
------------

* The Unicode symbols, used for the buttons don't work in IE9 and older. The solution is to add icon font with @font-face.
* Vertical alignment of images in browsers that don't support flexbox does not work. So what?
* Other things may not look as expected if one is using old browser. But generaly things are usable.
* Next and previous buttons stay visible when the end is reached, I'm looking into this.

Licence
-------

Copyright © 2013 Milen Petrinski - Gonzo <gonzo@greatgonzo.net>

This work is free. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See http://www.wtfpl.net/ for more details.
