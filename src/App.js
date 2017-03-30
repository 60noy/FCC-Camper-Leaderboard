import React, { Component } from 'react';
import styles from './styles/App.css';
import Main from './components/Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <div className={styles.container}>
        <Main/>
      </div>
    </MuiThemeProvider>

    );
  }
}

export default App;
