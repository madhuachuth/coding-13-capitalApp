import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {countryId: countryAndCapitalsList[0].id}

  onChangeCountry = event => {
    this.setState({countryId: event.target.value})
  }

  getCountryDetails = countryId => {
    const countryName = countryAndCapitalsList.find(
      country => country.id === countryId,
    )
    return countryName.country
  }

  render() {
    const {countryId} = this.state
    const country = this.getCountryDetails(countryId)

    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select className="select-element" onChange={this.onChangeCountry}>
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country? </p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
