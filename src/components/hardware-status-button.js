/* eslint key-spacing: [2, { "align": "value" }] */

import React, {Component, PropTypes} from 'react';
import Colors from 'material-ui/lib/styles/colors';
import FloatingActionButton from 'material-ui/lib/floating-action-button';

import ActionAndroid from 'material-ui/lib/svg-icons/action/android.js';
import HardwareGamepad from 'material-ui/lib/svg-icons/hardware/gamepad';
import ActionSwapVert from 'material-ui/lib/svg-icons/action/swap-vert';
import HardwareKeyboardArrowLeft from 'material-ui/lib/svg-icons/hardware/keyboard-arrow-left';
import HardwareKeyboardArrowRight from 'material-ui/lib/svg-icons/hardware/keyboard-arrow-right';
import ActionFace from 'material-ui/lib/svg-icons/action/face';

const levelColorMap = {
  stale:       Colors.grey500,
  idle:        Colors.indigo500,
  operational: Colors.green500,
  homing:      Colors.lime500,
  error:       Colors.red500
};

const iconMap = {
  /* eslint camelcase:0 */
  all:       ActionAndroid,
  base:      HardwareGamepad,
  spindle:   ActionSwapVert,
  left_arm:  HardwareKeyboardArrowLeft,
  right_arm: HardwareKeyboardArrowRight,
  head:      ActionFace
};

class HardwareStatusButton extends Component {
  render() {
    const Icon = iconMap[this.props.bodyPart];
    return (
      <FloatingActionButton mini backgroundColor={levelColorMap[this.props.status]}
          onMouseDown={this.props.onClick}
          >
        <Icon />
      </FloatingActionButton>
    );
  }
}

HardwareStatusButton.propTypes = {
  bodyPart: PropTypes.number,
  status:   PropTypes.number,
  onClick:  PropTypes.number
};

export default HardwareStatusButton;
