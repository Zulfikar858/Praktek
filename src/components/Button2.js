import React from 'react';

const Button2 = props => {
    return(
        <div style={styles.button}>
     {props.title}
      </div>
    )
}

export default Button2;
const styles ={
    button:{
        display:'flex', backgroundColor: '#00B894',margin:15, padding: 10,paddingLeft: 40, paddingRight: 40, color: '#fff', borderRadius: 10, borderStyle: 'solid', borderWidth: 2,
        }
}