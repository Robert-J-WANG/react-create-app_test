import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  getStudentDate = () => {
    axios.get('http://localhost:3000/api1/students')
      .then(
        response => {
          console.log('成功了', response.data);
        },
        error => {
          console.log('失败了', error);
        }
      )
  }
  getCarDate = () => {
    axios.get('http://localhost:3000/api2/cars')
      .then(
        response => {
          console.log('成功了', response.data);
        },
        error => {
          console.log('失败了', error);
        }
      )
  }

  render() {

    return (
      <div>
        <button type="button" onClick={this.getStudentDate}> 点我获取学生信息</button>
        <button type="button" onClick={this.getCarDate}> 点我获取学生信息</button>
      </div >
    )
  }
}
