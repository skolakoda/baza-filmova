import React, {Component} from 'react'
class Footer extends Component {

  render() {
    const ime = "Damjan"
    const pozdrav = "Zdravo korisniče "
    const datum = new Date().toLocaleDateString('sr')

    return (
      <footer>
        <p>{pozdrav} {ime}</p>
        <p>Danas je {datum} </p>
      </footer>
    )
  }

}

export default Footer