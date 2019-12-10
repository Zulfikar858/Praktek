import React from 'react';

const Button = props => {
    return(
        <div style={styles.button}>
     {props.title}
      </div>
    )
}

export default Button
const styles ={
    button:{
        display:'flex', backgroundColor: 'limegreen',margin: 15, padding: 16,paddingLeft: 40, paddingRight: 40, color: '#fff', borderRadius: 10, borderStyle: 'solid', borderWidth: 2,
        }
}