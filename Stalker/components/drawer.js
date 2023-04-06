import Drawer from 'react-native-drawer';
import React from 'react';
 
export default class MenuDrawer extends React.Component {  
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render () {
    return (
        <Drawer
        type="static"
        content={<ControlPanel />}
        openDrawerOffset={100}
        styles={drawerStyles}
        tweenHandler={Drawer.tweenPresets.parallax}
        >
          <Main />
      </Drawer>
    )
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}