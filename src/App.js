import React, { Component } from 'react';
import './App.css';
import Background from './img/bg.jpg';
import { Button, Button2 } from './components';
import logo from './img/call (2).png';
class App extends Component {
    render(){  
      return(
          <div style={styles.background}>
          <div style={styles.overlay}>
                <div style={styles.container}>
                        <div style={styles.h1}>
                            Save your Earth
                            <div style={styles.p}>
                              
                            </div>
                            <div style={styles.subTittle}>
              Menanam satu pohon,menghasilkan sejuta manfaat 
                        </div>
                        </div>  
                        <div style={styles.wrapperInput}> 
                            <Button2 title="Donasi Pohon"/>
                            <Button title="Hubungi Kami"/>
                            <img
                           src={logo}
                           alt= 'logo'/>
                        </div>

                    </div>
                </div>
            </div>
      );
    }
  }
 
  // let w = window.innerWidth;
  let w = window.innerWidth;
  let h = window.innerHeight;
  const styles = {
    background: {
      display: 'flex',
      backgroundImage: `url(${Background})`,
      height: '100%',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgoundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    overlay: {
      
      height: h,
      width: '100%'
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Pangolin'
    },
    h1: {
      alignSelf: 'left',
      marginTop: 100,
      marginRight: 700,
      color: 'black',
      fontSize: 50,
      fontFamily: 'Pangolin',
      textAlign: 'left',
      maxWidth: 700
    },
    h2: {
      color: 'orange',
      textAlign: 'center',
      maxWidth: 700,
    },
    wrapperInput: {
      display: 'flex',
      alignSelf: 'left',
      textAlign:'left',
      marginTop: 40,
      alignItems: 'left',
      cursor: 'pointer',
      marginRight: 800
    },
    subTittle: {
    color: 'black',
    fontFamily: "Pangolin",
    marginTop: 20,
    fontSize:28,
    textAlign: 'center',
    alignSelf: 'center'
  },
  }

export default App;
