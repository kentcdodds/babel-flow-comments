# babel-flow-comments + es2015 classes bug

1. `npm install`
2. `npm run only-flow` - see how the `/*:: <Props, State>*/` comment is added correctly
3. `npm run both` - see how the `/*:: <Props, State>*/` comment is gone entirely

The transforms in question:

  - [`babel-plugin-transform-flow-comments`](https://npmjs.com/package/babel-plugin-transform-flow-comments)
  - [`babel-plugin-transform-es2015-classes`](https://npmjs.com/package/babel-plugin-transform-es2015-classes)

The `only-flow` script transpiles `index.js` with the `transform-flow-comments`
plugin only. The `both` script transpiles `index.js` with both plugins.

To make things easier:

<details>

<summary>The "only-flow" output</summary>

```javascript
// @flow
import React from 'react';
/*:: import type {Node} from 'react'*/
/*:: type Props = {
  shouldRender?: boolean,
  children: Node,
}*/
/*:: type State = {bar: string}*/


class Comp extends React.Component /*:: <Props, State>*/ {
  constructor(...args) {
    super(...args);
    this.state = { bar: 'hi' };
  }
  render() {
    if (this.props.shouldRender) {
      return this.props.children;
    }
    return this.state.bar;
  }
}

export default Comp;
```

</details>

<details>

<summary>The "both" output</summary>

```javascript
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// @flow
import React from 'react';
/*:: import type {Node} from 'react'*/
/*:: type Props = {
  shouldRender?: boolean,
  children: Node,
}*/
/*:: type State = {bar: string}*/

let Comp = function (_React$Component) {
  _inherits(Comp, _React$Component);

  function Comp(...args) {
    _classCallCheck(this, Comp);

    var _this = _possibleConstructorReturn(this, (Comp.__proto__ || Object.getPrototypeOf(Comp)).call(this, ...args));

    _this.state = { bar: 'hi' };
    return _this;
  }

  _createClass(Comp, [{
    key: 'render',
    value: function render() {
      if (this.props.shouldRender) {
        return this.props.children;
      }
      return this.state.bar;
    }
  }]);

  return Comp;
}(React.Component);

export default Comp;
```

</details>

I'm not even sure where the flow annotation should go or how it works when
transforming a class though...
