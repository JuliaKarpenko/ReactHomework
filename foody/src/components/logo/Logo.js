import React from 'react';

const Logo = ({image="", width=80, height=80}) => (
    <img src={image} alt='app logo' width={width} height={height}/>
) 

export default Logo;