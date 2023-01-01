
/*
This simple js renders react component with state using.

This file is compiled to the like_button.js that is in folder public (one folder down)

by running this 

npx babel --watch src --out-dir . --presets react-app/prod

from the public folder in command line.

*/

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        console.log("mounted");
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log("dis-mounted");
    }

    tick() { this.setState({ date: new Date() }); }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showClock: true };
        // This binding is necessary to make `this` work in the callback    
        //this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        console.log(this.state.showClock)
        this.setState({showClock: !this.state.showClock});
        console.log(this.state.showClock)
    }
    render() {
        console.log("render")
        if (!this.state.showClock) {
            return (
                <div>
                    <Clock />
                    <button onClick={this.handleClick}>Click Me</button>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.handleClick}>Click Me</button>
                </div>
            );
        }
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>

        <Page />
    </div>
);


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