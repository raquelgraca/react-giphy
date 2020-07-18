
class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
      counter: 0
    };
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div className={this.state.clicked ? "clicked" : ""}
      onClick={this.handleClick}>
        Hello, {this.props.name} - #{this.state.counter}
      </div>
    );
  }
}
