import React from 'react';

const Avatar = ({image="", width=70, height=70}) => (
    <img src={image} alt='app user' width={width} height={height}/>
) 

export default Avatar