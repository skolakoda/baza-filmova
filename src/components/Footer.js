import React, {Component} from 'react'
class Footer extends Component {

  render() {
    const datum = new Date().toLocaleDateString('sr')

    return (
      <footer>
        <p>Danas je {datum} </p>
      </footer>
    )
  }

}

export default Footer