var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems={['Avocados', 'Tomatoes', 'Peanut Butter']}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem =>
      <GroceryListItem groceryItem={groceryItem} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      'font-weight': this.state.done ? 'bold' : 'none'
    };
    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.groceryItem}</li>
    );
    // return (
    //   <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    // );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
