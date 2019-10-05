import React, { Component } from "react";
import InputForm from "../InputForm/InputForm";
import Modal from "../../UI/Modal/Modal";
import styles from "./HomePage.module.scss";
import * as actionTypes from '../../store/actions/actions';
import { connect } from 'react-redux';

class HomePage extends Component {
  render() {
    return (
      <div className={styles.HomePage}>
        <button className={styles.Button} onClick={this.props.ongetStartedHandler}>
          Get Started
        </button>
        <Modal show={this.props.getStrd}>
          <InputForm />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    getStrd: state.reducer.getStarted
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ongetStartedHandler : () => dispatch({type:actionTypes.GET_STARTED}) 
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (HomePage);
