import React, { Component, PropTypes } from 'react'

import HardwareStatusButton from './hardware-status-button';

import robot from '../robot';
import { Hardware } from 'robot-api';

window.h = Hardware.levels;


const LevelMap = {};

for (const level in Hardware.levels) {
  LevelMap[Hardware.levels[level]] = level.toLowerCase();
}

export default class HardwareContainer extends Component {

  constructor(props) {
    super(props);
  }

  onStatus = (status) => {
    this.setState(status);
  };

  onClick(name) {
    console.log('click', name);
  };

  componentWillMount() {
    this.setState(robot.hardware.status);
  }

  componentDidMount() {
    robot.hardware.on('status', this.onStatus);
  }

  componentWillUnmount() {
    robot.hardware.off('status', this.onStatus);
  }

  render() {
    return (
      <div>
        {Object.keys(this.state).map((name) => {
          const { level } = this.state[name]
          return <HardwareStatusButton key={name} bodyPart={name} status={LevelMap[level]} onClick={ this.onClick.bind(this, name) } />
        })}
      </div>
    );
  }
}
