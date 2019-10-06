import React, { Component } from "react";
import Formdata from "../../Formdata/formdata";
import { withRouter } from "react-router-dom";
import Input from "../../UI/Input/Input";
import * as actionTypes from '../../store/actions/actions';
import axios from "axios";
import { connect } from 'react-redux';
import styles from './InputForm.module.scss';
class InputForm extends Component {
  // state = {
  //   Formdata,
  //   formsIsValid: false
  // };

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
  
  submitHandler = event => {
    event.preventDefault();
    const formData = {};
    for (let formElem in this.props.Formdata) {
      formData[formElem] = this.props.Formdata[formElem].value;
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
    for (let key in this.props.Formdata) {
      formsElemArray.push({
        id: key,
        config: this.props.Formdata[key]
      });
    }
    let form = (
      <form onSubmit={this.submitHandler} className={styles.FormElement}>
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
            changed={event => this.props.inptChangedHandler(event, formElem.id,this.checkValidation)}
          />
        ))}
        <button className={styles.SubmitForm}  disabled={!this.props.formsValid}>Submit Form</button>
      </form>
    );
    return <div className="Forms">{form}</div>;
  }
}
const mapStateToProps = state =>{
  return {
    Formdata: state.inputform.Formdata,
    formsValid: state.inputform.formsIsValid
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inptChangedHandler : (event,id,checkValidation) => dispatch({type:actionTypes.FORMS_VALID, event:event, id:id , checkValidation:checkValidation}) 
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(InputForm));
