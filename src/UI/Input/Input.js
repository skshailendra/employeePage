import React from 'react';
import styles from './Input.module.scss';

const input = (props) => {
    let inputElem = null;
    let validationError = null;
    const inputClasses= [styles.InputElem];
    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(styles.Invalid);
    }
    if (props.invalid && props.touched) {
        validationError = <p className={styles.ValidationError}>Please enter a valid {props.valuetype}</p>;
    }
    switch(props.elementtype){
        case ('input') : 
            inputElem = <input className={inputClasses.join(' ')}         {...props.elementconfig}
            onChange={props.changed}/>
            break;
        case ('textarea') :
            inputElem = <textarea className={inputClasses.join(' ')} {...props.elementconfig}
            onChange={props.changed}/>
            break;
        case('select'):
            inputElem = (
                <select 
                    className={inputClasses.join(' ')}
                    onChange={props.changed}>
                    {props.elementconfig.options.map(option=>(
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    ))}
                 </select>
            );
            break;
        case('radio'):
            inputElem = (
                <>
                    {props.elementconfig.options.map(option =>(
                        <label key={option.value}>
                            {option.displayValue}
                            <input type={props.elementtype} className={inputClasses.join(' ')} 
                            checked={props.value === option.value}
                            value={option.value}
                            onChange={props.changed}/>
                        </label> 
                    ))
                    }
                </>
            );
            break;
        default:
            inputElem = <input className={inputClasses.join(' ')}{...props.elementconfig}/>
    }
    return (
        <div className={styles.Input}>
            <label className={styles.Label}>{props.label}</label>
            {inputElem}
            {validationError}
        </div>    
    );
}

export default input