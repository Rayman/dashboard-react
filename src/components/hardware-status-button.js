/** In this file, we create a React component which incorporates components provided by material-ui */

import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';

import ActionAndroid from 'material-ui/lib/svg-icons/action/android.js';
import ActionFace from 'material-ui/lib/svg-icons/action/face';
import HardwareKeyboardArrowLeft from 'material-ui/lib/svg-icons/hardware/keyboard-arrow-left';
import HardwareKeyboardArrowRight from 'material-ui/lib/svg-icons/hardware/keyboard-arrow-right';
import ActionSwapVert from 'material-ui/lib/svg-icons/action/swap-vert';
import HardwareGamepad from 'material-ui/lib/svg-icons/hardware/gamepad';

const levelColorMap = {
  stale:        Colors.grey500,
  idle:         Colors.indigo500,
  operational:  Colors.green500,
  homing:       Colors.lime500,
  error:        Colors.red500,
};

const iconMap = {
  all: ActionAndroid,
  base: HardwareGamepad,
  spindle: ActionSwapVert,
  left_arm: HardwareKeyboardArrowLeft,
  right_arm: HardwareKeyboardArrowRight,
  head: ActionFace,
}

const HardwareStatusButton = React.createClass({
  render() {
    const Icon = iconMap[this.props.bodyPart];
    return (
      <FloatingActionButton mini={true} backgroundColor={levelColorMap[this.props.status]}>
        <Icon />
      </FloatingActionButton>
    );
  },
});

export default HardwareStatusButton;
