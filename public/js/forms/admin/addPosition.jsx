const React = require('react')
  , $ = require('jquery')
  , TextInput = require('../../components/textInput.jsx')
  , TextArea = require('../../components/textArea.jsx')
  , ListFileDropper = require('../../components/listFileDropper.jsx')
  , Rx = require('rxjs')
  , user = require('../../services/user');

class addPositionForm extends React.Component {
  componentDidMount () {
    const nameElement = this.refs.nameElement
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

      , imageListElement = this.refs.imageListElement

      , userIdElement = this.refs.userIdElement
      , submitElement = this.refs.submitElement
      , submitStream = Rx.Observable.fromEvent(submitElement, 'click');

    submitStream.subscribe(function(value) {

      $.post('/api/article', {
        title: nameElement.state.text
      , description: descriptionElement.state.text
      , images: imageListElement.getAllFiles()
      , area: areaElement.state.text
      , price: priceElement.state.text
      , floor: floorElement.state.text
      , constructionYear: constructionYearElement.state.text
      , country: countryElement.state.text
      , province: provinceElement.state.text
      , city: cityElement.state.text
      , zipCode: zipCodeElement.state.text
      , street: streetElement.state.text
      , houseNr: houseNrElement.state.text
      , appartmentNr: appartmentNrElement.state.text
      , telephone: telephoneElement.state.text
      , email: emailElement.state.text
      , userId: userIdElement.value
      }, data => {
        console.log('fetch complete', data);
      });

    }.bind(this));

    if(this.props.id) {
      $.get(`/api/article/${this.props.id}`, data => {
        let article = data[0]

        nameElement.setState({ text: article.title })
        descriptionElement.setState({ text: article.description })
        //imageListElement.getAllFiles()
        areaElement.setState({ text: article.area })
        priceElement.setState({ text: article.price })
        floorElement.setState({ text: article.floor })
        constructionYearElement.setState({ text: article.constructionYear })
        countryElement.setState({ text: article.country })
        provinceElement.setState({ text: article.province })
        cityElement.setState({ text: article.city })
        zipCodeElement.setState({ text: article.zipCode })
        streetElement.setState({ text: article.street })
        houseNrElement.setState({ text: article.houseNr })
        appartmentNrElement.setState({ text: article.appartmentNr })
        telephoneElement.setState({ text: article.telephone })
        emailElement.setState({ text: article.email })
      });
    }
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
            <div className="form-group">
              <label>
                Image
              </label>
              <ListFileDropper ref="imageListElement"/>
            </div>
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
            <input type="hidden"
                   name="userId"
                   ref="userIdElement"
                   value={user.getUserId()} />

            <button className="btn btn-primary btn-block"
                    ref="submitElement">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = addPositionForm;