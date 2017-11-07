# babel-flow-comments + es2015 classes bug

Transforms:

- [`babel-plugin-transform-flow-comments`](https://npmjs.com/package/babel-plugin-transform-flow-comments)
- [`babel-plugin-transform-es2015-classes`](https://npmjs.com/package/babel-plugin-transform-es2015-classes)

Files:

1. `index.js` - the source
2. `only-flow.js` - transforming with transform-flow-comments alone
3. `both.js` - transforming with both transforms
4. `flow-then-classes.js` - transforming with transform-flow-comments followed by another transform with transform-es2015-classes

`only-flow.js` and `flow-then-classes.js` both work as expected, annotations
are added properly. `both.js` however is missing the `/*:: <Props>*/`
annotation.

[Bug](https://github.com/babel/babel/issues/6767)
