import React, { Component } from 'react';

interface Props {
  placeholder: string;
}
interface State {
  inputValue: string;
}

class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { inputValue: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    const savedValue = localStorage.getItem('searchValue');
    if (savedValue) {
      this.setState({ inputValue: savedValue });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.inputValue);
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <div className="bg-gray-600 px-2 flex h-16 items-center">
        <input
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button
          className="bg-teal-600 text-white px-4"
          onClick={() => console.log('Search for', this.state.inputValue)}
        >
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
