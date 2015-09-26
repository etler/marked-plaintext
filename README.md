A plain text renderer for [Marked](https://github.com/chjj/marked). Strips out all formatting, useful for generating meta tags or preview snippets.

**Usage:**

    marked = require('marked');
    PlainTextRenderer = require('marked-plaintext');
    renderer = new PlainTextRenderer;
    console.log(marked('Your *markdown* text', { renderer: renderer }));
