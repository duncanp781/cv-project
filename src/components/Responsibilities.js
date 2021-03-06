import React, {Component} from 'react'
import uniqid from 'uniqid'
class Responsibilities extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  handleAdd = () =>  {
    this.setState({
      [uniqid()]: {},
    });
  }

  save = (id, text) => {
    this.setState(
      {
        [id]: text,
      },
      () => this.props.save("responsibilities", this.state)
    );
  };


  delete = (id) => {
    this.setState({ [id]: undefined }, () =>
      this.props.save("responsibilities", this.state)
    );
  };

  render() {
    return (
      <div className="responsibilities">
        {Object.keys(this.state).map((id) => {
          if (this.state[id])
            return (
              <Responsibility
                save={this.save}
                key={id}
                id={id}
                delete={this.delete}
              />
            );
        })}
        <button type="button" onClick={this.handleAdd}>
          Add Responsibility
        </button>
      </div>
    );
  }
}

class Responsibility extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      hasError: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    }, () => this.props.save(this.props.id, this.state.text));
    
  };

  static getDerivedStateFromError(error){
    return {hasError: true}
  }

  componentDidCatch(error, errorInfo){
    console.log(error, errorInfo);
  }

  render() {
    return (
      <div className="responsibility">
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button type="button" onClick={() => this.props.delete(this.props.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Responsibilities;