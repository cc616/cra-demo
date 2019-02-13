import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import { changeNumber } from 'actions/home'

import './style.scss'

class Home extends Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    changeNumber: PropTypes.func.isRequired,
  }
  handleIncrease = () => {
    const { number } = this.props
    const newNumber = number + 1

    this.props.changeNumber(newNumber)
  }
  handleDecrease = () => {
    const { number } = this.props
    const newNumber = number - 1

    this.props.changeNumber(newNumber)
  }
  render() {
    const { number } = this.props

    return (
      <div>
        <p>this is home page</p>
        <Link to="/about">goto About</Link>
        <div>当前数：{number}</div>
        <div>
          <Button className="btn" type="primary" onClick={this.handleIncrease}>增加</Button>
          <Button type="primary" onClick={this.handleDecrease}>减少</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  number: state.home.number,
})

const mapDispatchToProps = dispatch => ({
  changeNumber: bindActionCreators(changeNumber, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
