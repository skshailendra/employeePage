import React , {useState , useEffect} from 'react';
import axios from "axios";
import classes from './InputFormHooks.module.scss';
import { withRouter } from "react-router-dom";
import {FormURL} from '../../store/url-store';
import formdata from '../../Formdata/formdata';
import Input from '../../UI/Input/Input';
const InputFormHooks = (props) => {
    const [formsElemData , setFormsElemData] = useState(formdata);
    const [formsElemArray, setformsElemArray] = useState([]);
    useEffect(()=>{
        
        for (let key in formsElemData) {
            formsElemArray.push({
              id: key,
              config: formdata[key]
            });
        }
    },[]);
     // Check Validation
    const checkValidation = (value, rules) => {
        let isValid = true;
        if (rules && rules.required) {
        isValid = value.trim() !== "" && isValid;
        }
        return isValid;
    };
    const inptChangedHandler  = (event,id)=>{
       
        const copyFormData = {
            ...formsElemData
            };
        const copyFormId = {
        ...copyFormData[id]
        };
        copyFormId.value = event.target.value;
        copyFormData[id] = copyFormId;
        copyFormData[id] = copyFormId;
        copyFormData[id].valid = checkValidation(
        copyFormId.value,
        copyFormId.validation
        );
        copyFormId.touched = true;
        let formsIsValid = true;
        for (let ipInden in copyFormData) {
        formsIsValid = copyFormData[ipInden].valid && formsIsValid;
        }
        console.log(formsIsValid);
        debugger;
        setFormsElemData({
            ...formsElemData,
            [formsElemData[id]] :  copyFormData
        })
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        console.log("called");
        // const formData = {
        //     'name': name,
        //     'oracleId': oracleId,
        //     'skillSet':'ReactJs',
        //     'location':'Bangalore'

        // }
        // // Call HTTP service and post this formdata
        // axios.post(
        //     FormURL,
        //     formData
        // )
        // .then(response => {
        // console.log(response);
        // props.history.push("/" + formData.oracleId);
        // })
        // .catch(function(error) {
        // console.log("error " + error);
        // });
    }
    return (
        <form onSubmit={submitHandler} className={classes.FormElement}>
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
              changed={event => inptChangedHandler(event, formElem.id)}
            />
          ))}
          <button className={classes.SubmitForm} >Submit Form</button>
        </form>
    )
}

export default withRouter(InputFormHooks);