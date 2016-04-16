const React = require('react')
  , $ = require('jquery')
  , TextInput = require('../../../components/textInput.jsx')
  , TextArea = require('../../../components/textArea.jsx')
  , ListFileDropper = require('../../../components/listFileDropper.jsx')
  , Rx = require('rxjs')
  , user = require('../../../services/user');

class manageArticleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: ''
    , images: []
    };
  }

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
      , idElement = this.refs.idElement
      , removeElement = this.refs.removeElement
      , removeStream = Rx.Observable.fromEvent(removeElement, 'click')
      , submitElement = this.refs.submitElement
      , submitStream = Rx.Observable.fromEvent(submitElement, 'click');

    removeStream.subscribe(function(value) {
      let id = idElement.value;

      $.ajax({
        url: `/api/article/${id}`,
        type: 'DELETE',
        success: function(result) {

        }
      });
    });

    submitStream.subscribe(function(value) {
      let id = idElement.value
        , payload = {
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
      }


      if(id) {
        $.post(`/api/article/${id}`, payload, data => {
          window.location.href = "/admin#/";
        });
      } else {
        $.post('/api/article', payload,  data => {
          window.location.href = "/admin#/";
        });
      }
    }.bind(this));

    if(this.props.id) {
      $.get(`/api/article/${this.props.id}`, function(data) {
        let article = data[0]

        nameElement.setState({ text: article.title })
        descriptionElement.setState({ text: article.description })
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

        this.setState({
          _id: article._id
        , images: article.images
        })

      }.bind(this));
    } else {
      this.clearForm();
    }
  }

  clearForm () {
    this.refs.formElement.getDOMNode().reset();
  }

  render() {
    return (
      <form className="component-form-wizard"
            ref="formElement">
        <fieldset className="component-form-wizard__area">
          <h3 className="component-form-wizard__header">
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
            <ListFileDropper ref="imageListElement"
                             images={this.state.images}/>
          </div>
        </fieldset>

        <fieldset className="component-form-wizard__area">
          <h3 className="component-form-wizard__header">
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
        </fieldset>

        <fieldset className="component-form-wizard__area">
          <h3 className="component-form-wizard__header">
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
        </fieldset>

        <fieldset className="component-form-wizard__area">
          <h3 className="component-form-wizard__header">
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
        </fieldset>

        <fieldset className="component-form-wizard__area">
          <input type="hidden"
                 name="userId"
                 ref="userIdElement"
                 value={user.getUserId()} />

          <input type="hidden"
                 name="id"
                 ref="idElement"
                 value={this.state._id} />

          <button className={`component-form-wizard__remove
                              ${this.state._id ? '' : 'is-hidden'}`}
                  ref="removeElement">
            Remove
          </button>

          <button className="component-form-wizard__submit"
                  ref="submitElement">
            Submit
          </button>
      </fieldset>
    </form>);
  }
}

module.exports = manageArticleForm;