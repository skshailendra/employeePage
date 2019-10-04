import React, { Component } from "react";
import InputForm from "../InputForm/InputForm";
import Modal from "../../UI/Modal/Modal";
import styles from "./HomePage.module.scss";
class HomePage extends Component {
  state = {
    getStarted: false
  };
  getStartedHandler = () => {
    this.setState({
      getStarted: !this.state.getStarted
    });
  };
  render() {
    return (
      <>
        <button className={styles.Button} onClick={this.getStartedHandler}>
          Get Started
        </button>
        <Modal show={this.state.getStarted}>
          <InputForm />
        </Modal>
      </>
    );
  }
}

export default HomePage;
