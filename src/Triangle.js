import React,{Component} from 'react';


function Triangle(vertices,color)
{
    

    const pathdata=[

        'M', vertices[0][0], vertices[0][1],
        'L', vertices[1][0], vertices[1][1],
        'L', vertices[2][0], vertices[2][1],
        'Z'


    ].join(' ');
    return(
    <path d={pathdata} fill={color} />
    );
}

const vertices=[
    [0,60],
    [30,0],
    [60,0],
  ];

export default Triangle;