import React, { Component } from "react";
import styles from "./UserDetail.module.scss";
import axios from "axios";
class UserDetail extends Component {
  state = {
    employeeData: []
  };

  componentDidMount() {
    console.log("called");
    axios
      .get("https://react-hooks-7d44e.firebaseio.com/employeeData.json")
      .then(response => {
        const employeeData = [];
        for (let key in response.data) {
          if (response.data[key].officeAddress === "Bangalore") {
            response.data.officeAddress = `2870, Building Virgo, 
                   Bagmane Constellation Business Park,
                   Outer Ring Rd, Doddanekundi, 
                   Marathahalli, Bengaluru, Karnataka 560037`;
          } else {
            response.data[key].officeAddress = `Sapient Consulting Pvt. Ltd., 
                  Candor Techspace, Tower - A, 
                  Building no. 2, Sector 21, 
                  Old Delhi-Gurgaon Road, 
                  Dundahera, Gurgaon - 122016 Haryana`;
          }
          employeeData.push(response.data[key]);
        }
        this.setState({
          employeeData: employeeData
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    let displayEmployeeData = this.state.employeeData ? (
        <ul className={styles.EmployeeList}>
          {this.state.employeeData.map( (emp,idx) => (
              <li key={idx} className={styles.UserInfo}>
                <h4>{emp.name}</h4>
                <span>OracleId :{emp.oracleId}</span>
                <span>Skillset :{emp.skillSet}</span>
                <span>location :{emp.location}</span>
                <span className={styles.Address}>Office Address :{emp.officeAddress}</span>
              </li>
          ))}
        </ul>
    ) : null;
    return (
      <>
      <h3 className={styles.EmpHeading}>Employee Details</h3>
      
      {displayEmployeeData}
      
      </>
    );
  }
}

export default UserDetail;
