import React from 'react';

export interface Props {

}

export const Data = (props: Props) => {

var date = new Date().toLocaleDateString();

return (<span>{date}</span>);
}