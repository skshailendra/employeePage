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
      .get("https://employeename-ad814.firebaseio.com/employeeData.json")
      .then(response => {
        const employeeData = [];
        for (let key in response.data) {
          if (response.data[key].location === "Bangalore") {
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
        debugger;
        console.log(employeeData);
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
      <div className="employeeList">
        <ul>
          {this.state.employeeData.map(emp => (
            <>
              <div className={styles.UserInfo}>
                <li>Name {emp.name}</li>
                <li>OracleId :{emp.oracleId}</li>
                <li>Skillset :{emp.skillset}</li>
                <li>location :{emp.location}</li>
                <li>Office Address :{emp.officeAddress}</li>
              </div>
            </>
          ))}
        </ul>
      </div>
    ) : null;
    return (
      <div className={styles.Container}>
        <div className={styles.UserInfo}>
          <p className={styles.EmpHeading}>Employee Details</p>
          {displayEmployeeData}
        </div>
      </div>
    );
  }
}

export default UserDetail;
