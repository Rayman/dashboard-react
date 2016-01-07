/** In this file, we create a React component which incorporates components provided by material-ui */

import React, {Component} from 'react';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
// import Colors from 'material-ui/lib/styles/colors';

import HardwareContainer from './hardware';

export default class Main extends Component {

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  }

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    };
  }

  // componentWillMount() {
  //   let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
  //     accentColor: Colors.deepOrange500,
  //   });

  //   this.setState({muiTheme: newMuiTheme});
  // }

  render() {
    return (
      <div>
        <HardwareContainer/>
      </div>
    );
  }
}
