# Questmark-Webrenderer

This is a simple "inline web renderer and interpreter" for Questmark.

It allows you to create "live" Questmark documents that you can easily work on and test in your browser!

## Usage

1. Save your Questmark document (in Markdown source code form!) as a `.html` file
2. Add the following lines to the bottom of the file, exactly as shown:
    ~~~
    ```comment
        <script src="https://unpkg.com/questmark-webrenderer@1.0.1/dist/webRender-basic.js"></script>
        <script src="https://unpkg.com/questmark-webrenderer@1.0.1/dist/main.js" type="module"></script>
    ```
    ~~~
3. Open the .html file on your browser!

(see [space-alien.md.html](https://github.com/jorisvddonk/questmark-webrenderer/blob/master/examples/space-alien.md.html) ([demo](https://raw.githack.com/jorisvddonk/questmark-webrenderer/main/examples/space-alien.md.html)) for an example)

You can also save your Questmark documents as `.md` files, but then you need to open them using a webserver that forces the `text/html` Content-Type header. [local-web-server](https://github.com/lwsjs/local-web-server) can do this using the following config file, for example:

```js
module.exports = {
  mime: {
    'text/html': ['html', 'md']
  }
}
```

and then run

```bash
npx local-web-server --config-file ws_config.js
```

## alternative usage

Alternatively, you could load a .md file in your browser, open the browser console, and then paste and execute the following:

```javascript
const qm_wr1 = document.createElement('script'); qm_wr1.setAttribute('src', 'https://unpkg.com/questmark-webrenderer@1.0.1/dist/webRender-basic.js');
const qm_wr2 = document.createElement('script'); qm_wr2.setAttribute('type', 'module'); qm_wr2.setAttribute('src', 'https://unpkg.com/questmark-webrenderer@1.0.1/dist/main.js');
document.body.appendChild(qm_wr1);
document.body.appendChild(qm_wr2);
```

try it out [here](https://ghcdn.rawgit.org/jorisvddonk/questmark/master/examples/self-describing.md), for example!

## Customization

You can currently customize the following things:

* Extra foreign functions can be supplied to the VM by setting the global variable `extraForeignFunctions` to a JavaScript object, with the keys mapping to foreign functions passed to the VM. See [foreign-function.md.html](https://github.com/jorisvddonk/questmark-webrenderer/blob/master/examples/foreign-function.md.html) ([demo](https://raw.githack.com/jorisvddonk/questmark-webrenderer/main/examples/foreign-function.md.html)) for an example.
* The VM can be modified prior to it starting, and can be prevented from auto-starting, by setting the global variable `preRun` to a function that receives the `vm` instance. Return `false` from this function to prevent the VM from auto-starting. See [prerun.md.html](https://github.com/jorisvddonk/questmark-webrenderer/blob/master/examples/prerun.md.html) ([demo](https://raw.githack.com/jorisvddonk/questmark-webrenderer/main/examples/prerun.md.html)).

