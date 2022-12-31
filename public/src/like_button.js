
/*
This simple js renders react component with state using.

This file is compiled to the like_button.js that is in folder public (one folder down)

by running this 

npx babel --watch src --out-dir . --presets react-app/prod

from the public folder in command line.

*/

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick() {
    this.setState({ liked: TextTrackCueList });
  }

  render() {
    let resp;
    console.log(this.state);
    if (this.state.liked) {
      return (
        resp = <div >You liked comment # {this.props.commentID}  </div>
      );
    }
    return (
      resp = <button onClick={this.handleButtonClick}>Like </button>
    );
    return resp;
  }
}

document.querySelectorAll('.like_button_container')
  .forEach(domContainer => {
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    const root = ReactDOM.createRoot(domContainer);
    root.render(<LikeButton commentID={commentID} />);
  });

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const element = <h1>Hello, world</h1>;
root.render(element);