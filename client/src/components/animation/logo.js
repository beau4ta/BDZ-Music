import React from 'react';
import { useSpring, animated } from 'react-spring';
import TRI from '../../assets/bdzlogo.png';

function Logo() {
    const styles = useSpring({
      loop: true,
      from: { rotateZ: 0 },
      to: { rotateZ: 360 },
    })
  
    return (
      <animated.div style={{ ...styles }}>
          <div className=''>
              <img className='logo' src={TRI}></img>
          </div>
      </animated.div>
    )
  }

  export default Logo;