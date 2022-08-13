function TextBox(){
    return(
      <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      );
  }
export default TextBox