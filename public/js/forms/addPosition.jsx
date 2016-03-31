const React = require('react')
  , $ = require('jquery')
  , TextInput = require('../components/textInput.jsx')
  , TextArea = require('../components/textArea.jsx')
  , FileDropper = require('../components/fileDropper.jsx')
  , Rx = require('rxjs');

class addPositionForm extends React.Component {
  componentDidMount () {
    const submitElement = this.refs.submitElement
      , nameElement = this.refs.nameElement
      , descriptionElement = this.refs.descriptionElement

      , areaElement = this.refs.areaElement
      , priceElement = this.refs.priceElement
      , floorElement = this.refs.floorElement
      , constructionYearElement = this.refs.constructionYearElement

      , countryElement = this.refs.countryElement
      , provinceElement = this.refs.provinceElement
      , cityElement = this.refs.cityElement
      , zipCodeElement = this.refs.zipCodeElement
      , streetElement= this.refs.streetElement
      , houseNrElement = this.refs.houseNrElement
      , appartmentNrElement = this.refs.appartmentNrElement

      , telephoneElement = this.refs.telephoneElement
      , emailElement = this.refs.emailElement

      , imageElement = this.refs.imageElement

      , submitStream = Rx.Observable.fromEvent(submitElement, 'click');

    submitStream.subscribe(function(value) {

      $.post('/api/article', {
        title: nameElement.state.text
      , description: descriptionElement.state.text
      , image: imageElement.state.image
      , imageName: imageElement.state.imageName
      , areaElement: areaElement.state.text
      , priceElement: priceElement.state.text
      , floorElement: floorElement.state.text
      , constructionYear: constructionYearElement.state.text
      , countryElement: countryElement.state.text
      , provinceElement: provinceElement.state.text
      , cityElement: cityElement.state.text
      , zipCodeElement: zipCodeElement.state.text
      , streetElement: streetElement.state.text
      , houseNrElement: houseNrElement.state.text
      , appartmentNrElement: appartmentNrElement.state.text
      , telephoneElement: telephoneElement.state.text
      , emailElement: emailElement.state.text
      }, data => {
        console.log('fetch complete', data);
      });

    }.bind(this));
  }

  render() {
    return (
      <div>
        <div className="row">
          <section className="col-sm-3">
            <h3>
              Estate details
            </h3>
            <TextInput label="Name"
                       name="name"
                       ref="nameElement"
            />
            <TextArea label="Description"
                       name="description"
                       ref="descriptionElement"
            />
          </section>
          <section className="col-sm-3">
            <h3>
              Estate data
            </h3>
            <TextInput label="Area"
                       name="area"
                       ref="areaElement"
            />
            <TextInput label="Price"
                       name="price"
                       ref="priceElement"
            />
            <TextInput label="Floor"
                       name="floor"
                       ref="floorElement"
            />
            <TextInput label="Year of construction"
                       name="constructionYear"
                       ref="constructionYearElement"
            />
          </section>
          <section className="col-sm-3">
            <h3>
              Estate address
            </h3>
            <TextInput label="Country"
                       name="country"
                       ref="countryElement"
            />
            <TextInput label="Province"
                       name="province"
                       ref="provinceElement"
            />
            <TextInput label="City"
                       name="city"
                       ref="cityElement"
            />
            <TextInput label="Zip Code"
                       name="zipCode"
                       ref="zipCodeElement"
            />
            <TextInput label="Street"
                       name="street"
                       ref="streetElement"
            />
            <TextInput label="House Number"
                       name="houseNr"
                       ref="houseNrElement"
            />
            <TextInput label="Appartment Number"
                       name="appartmentNr"
                       ref="appartmentNrElement"
            />
          </section>
          <section className="col-sm-3">
            <h3>
              Contact information
            </h3>
            <TextInput label="Telephone"
                       name="telephone"
                       ref="telephoneElement"
            />
            <TextInput label="Email"
                       name="email"
                       ref="emailElement"
            />
          </section>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <FileDropper ref="imageElement"/>
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button className="btn btn-primary btn-block"
                    ref="submitElement">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = addPositionForm;