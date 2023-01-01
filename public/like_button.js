var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
This simple js renders react component with state using.

This file is compiled to the like_button.js that is in folder public (one folder down)

by running this 

npx babel --watch src --out-dir . --presets react-app/prod

from the public folder in command line.

*/

var LikeButton = function (_React$Component) {
  _inherits(LikeButton, _React$Component);

  function LikeButton(props) {
    _classCallCheck(this, LikeButton);

    var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this.state = { liked: false };
    _this.handleButtonClick = _this.handleButtonClick.bind(_this);
    return _this;
  }

  _createClass(LikeButton, [{
    key: 'handleButtonClick',
    value: function handleButtonClick() {
      this.setState({ liked: TextTrackCueList });
    }
  }, {
    key: 'render',
    value: function render() {
      var resp = void 0;
      console.log(this.state);
      if (this.state.liked) {
        return resp = React.createElement(
          'div',
          null,
          'You liked comment # ',
          this.props.commentID,
          '  '
        );
      }
      return resp = React.createElement(
        'button',
        { onClick: this.handleButtonClick },
        'Like '
      );
      return resp;
    }
  }]);

  return LikeButton;
}(React.Component);

document.querySelectorAll('.like_button_container').forEach(function (domContainer) {
  var commentID = parseInt(domContainer.dataset.commentid, 10);
  var root = ReactDOM.createRoot(domContainer);
  root.render(React.createElement(LikeButton, { commentID: commentID }));
});

var root = ReactDOM.createRoot(document.getElementById('root'));
var element = React.createElement(
  'h1',
  null,
  'Hello, world'
);
root.render(element);