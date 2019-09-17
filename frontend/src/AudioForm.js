import React from 'react'

class AudioForm extends React.Component {

  render() {

    return (

      <div>
        <form onSubmit={this.props.submit}>
          <input onChange={this.props.change}></input>
          <button type="submit" value="Submit" >Submit</button>
        </form>
      </div>
    );
  }
}

export default AudioForm;//