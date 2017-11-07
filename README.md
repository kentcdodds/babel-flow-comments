# babel-flow-comments + es2015 classes bug

1. `npm install`
2. `npm run only-flow` - see how the `/*:: <Props, State>*/` comment is added correctly
3. `npm run both` - see how the `/*:: <Props, State>*/` comment is gone entirely

The transforms in question:

  - [`babel-plugin-transform-flow-comments`](https://npmjs.com/package/babel-plugin-transform-flow-comments)
  - [`babel-plugin-transform-es2015-classes`](https://npmjs.com/package/babel-plugin-transform-es2015-classes)

The `only-flow` script transpiles `index.js` with the `transform-flow-comments`
plugin only. The `both` script transpiles `index.js` with both plugins.

You can see the output in `only-flow.js` and `both.js`. Interestingly, if I run
babel with `transform-es2015-classes` on `only-flow.js` then I get
`flow-then-classes.js` which is correct I think.
