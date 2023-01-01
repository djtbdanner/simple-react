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

var Clock = function (_React$Component) {
    _inherits(Clock, _React$Component);

    function Clock(props) {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        _this.state = { date: new Date() };
        return _this;
    }

    _createClass(Clock, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            this.timerID = setInterval(function () {
                return _this2.tick();
            }, 1000);
            console.log("mounted");
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.timerID);
            console.log("dis-mounted");
        }
    }, {
        key: "tick",
        value: function tick() {
            this.setState({ date: new Date() });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Hello, world!"
                ),
                React.createElement(
                    "h2",
                    null,
                    "It is ",
                    this.state.date.toLocaleTimeString(),
                    "."
                )
            );
        }
    }]);

    return Clock;
}(React.Component);

var Page = function (_React$Component2) {
    _inherits(Page, _React$Component2);

    function Page(props) {
        _classCallCheck(this, Page);

        var _this3 = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

        _this3.handleClick = function () {
            console.log(_this3.state.showClock);
            _this3.setState({ showClock: !_this3.state.showClock });
            console.log(_this3.state.showClock);
        };

        _this3.state = { showClock: true };
        // This binding is necessary to make `this` work in the callback    
        //this.handleClick = this.handleClick.bind(this);
        return _this3;
    }

    _createClass(Page, [{
        key: "render",
        value: function render() {
            console.log("render");
            if (!this.state.showClock) {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(Clock, null),
                    React.createElement(
                        "button",
                        { onClick: this.handleClick },
                        "Click Me"
                    )
                );
            } else {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "button",
                        { onClick: this.handleClick },
                        "Click Me"
                    )
                );
            }
        }
    }]);

    return Page;
}(React.Component);

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(
    "div",
    null,
    React.createElement(Page, null)
));

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) { return <UserGreeting />; } return <GuestGreeting />;
// }

// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }

// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     );
// }

// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     );
// }

// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = { isLoggedIn: false };
//     }

//     handleLoginClick() {
//         this.setState({ isLoggedIn: true });
//     }

//     handleLogoutClick() {
//         this.setState({ isLoggedIn: false });
//     }

//     render() {
//         console.log(`render ${this.state.isLoggedIn}`);
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;
//         if (isLoggedIn) { button = <LogoutButton onClick={this.handleLogoutClick} />; } else { button = <LoginButton onClick={this.handleLoginClick} />; }
//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />        {button}      </div>
//         );
//     }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<LoginControl />);