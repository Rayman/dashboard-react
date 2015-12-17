/** In this file, we create a React component which incorporates components provided by material-ui */

import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';
import FontIcon from 'material-ui/lib/font-icon';
import ActionAndroid from 'material-ui/lib/svg-icons/action/android.js';
import IconButton from 'material-ui/lib/icon-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';

import HardwareStatusButton from './hardware-status-button';

const HardwareStatus = {
  STALE: 0,
  IDLE: 1,
  OPERATIONAL: 2,
  HOMING: 3,
  ERROR: 4
};

const Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getInitialState() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
      allStatus: HardwareStatus.OPERATIONAL,
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  componentWillMount() {
    // let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
    //   accent1Color: Colors.deepOrange500,
    // });

    // this.setState({muiTheme: newMuiTheme});
  },

  render() {
    return (
      <div>
        <HardwareStatusButton bodyPart="all"        status='stale'/>
        <HardwareStatusButton bodyPart="base"       status='idle'/>
        <HardwareStatusButton bodyPart="spindle"    status='operational'/>
        <HardwareStatusButton bodyPart="left_arm"   status='homing'/>
        <HardwareStatusButton bodyPart="right_arm"  status='error'/>
        <HardwareStatusButton bodyPart="head"       status='idle'/>
      </div>
    );
  },
});

export default Main;
