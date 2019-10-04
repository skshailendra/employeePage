import React, { Component } from "react";
import Formdata from "../../Formdata/formdata";
import { withRouter } from "react-router-dom";
import Input from "../../UI/Input/Input";
import axios from "axios";
class InputForm extends Component {
  state = {
    Formdata,
    formsIsValid: false
  };

  componentDidMount() {
    console.log(this.props);
  }
  // Check Validation
  checkValidation = (value, rules) => {
    let isValid = true;
    if (rules && rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    return isValid;
  };
  inputChangedHandler = (event, id) => {
    const copyFormData = {
      ...this.state.Formdata
    };
    const copyFormId = {
      ...copyFormData[id]
    };
    copyFormId.value = event.target.value;
    copyFormData[id] = copyFormId;
    copyFormData[id].valid = this.checkValidation(
      copyFormId.value,
      copyFormId.validation
    );
    copyFormId.touched = true;
    let formsIsValid = true;
    for (let ipInden in copyFormData) {
      formsIsValid = copyFormData[ipInden].valid && formsIsValid;
    }
    console.log(formsIsValid);
    this.setState({
      Formdata: copyFormData,
      formsIsValid: formsIsValid
    });
  };

  submitHandler = event => {
    event.preventDefault();
    const formData = {};
    for (let formElem in this.state.Formdata) {
      formData[formElem] = this.state.Formdata[formElem].value;
    }
    console.log(formData);
    // Call HTTP service and post this formdata
    axios
      .post(
        "https://employeename-ad814.firebaseio.com/employeeData.json",
        formData
      )
      .then(response => {
        console.log(response);
        this.props.history.push("/" + formData.oracleId);
      })
      .catch(function(error) {
        console.log("error " + error);
      });
  };
  render() {
    const formsElemArray = [];
    for (let key in this.state.Formdata) {
      formsElemArray.push({
        id: key,
        config: this.state.Formdata[key]
      });
    }
    let form = (
      <form onSubmit={this.submitHandler}>
        {formsElemArray.map(formElem => (
          <Input
            key={formElem.id}
            elementtype={formElem.config.elementType}
            elementconfig={formElem.config.elementConfig}
            value={formElem.config.value}
            valuetype={formElem.config.valuetype}
            invalid={!formElem.config.valid}
            shouldValidate={formElem.config.validation}
            touched={formElem.config.touched}
            changed={event => this.inputChangedHandler(event, formElem.id)}
          />
        ))}
        <button disabled={!this.state.formsIsValid}>Submit Form</button>
      </form>
    );
    return <div className="Forms">{form}</div>;
  }
}

export default withRouter(InputForm);
