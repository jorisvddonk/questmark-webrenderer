# Questmark-Webrenderer

This is a simple "inline web renderer and interpreter" for Questmark.

It allows you to create "live" Questmark documents that you can easily work on and test in your browser!

## Usage

1. Save your Questmark document (in Markdown source code form!) as a `.html` file
2. Add the following lines to the bottom of the file, exactly as shown:
    ```
      ```comment
        <script src="https://unpkg.com/questmark-webrenderer@1.0.0/dist/webRender-basic.js"></script>
        <script src="https://unpkg.com/questmark-webrenderer@1.0.0/dist/main.js" type="module"></script>
      ```
    ```
3. Open the .html file on your browser!

(see [space-alien.html](https://github.com/jorisvddonk/questmark-webrenderer/blob/master/examples/space-alien.html) ([demo](https://raw.githack.com/jorisvddonk/questmark-webrenderer/main/examples/space-alien.html)) for an example)

## Customization

You can currently customize the following things:

* Extra foreign functions can be supplied to the VM by setting the global variable `extraForeignFunctions` to a JavaScript object, with the keys mapping to foreign functions passed to the VM. See [foreign-function.html](https://github.com/jorisvddonk/questmark-webrenderer/blob/master/examples/foreign-function.html) ([demo](https://raw.githack.com/jorisvddonk/questmark-webrenderer/main/examples/foreign-function.html)) for an example.
