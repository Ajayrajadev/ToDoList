import React from 'react';

const Footer = ({length}) => {
    const year=new Date();
  return (
    <footer>
        {length}{length===1?" List item":
        " List items"}
    </footer>
)
}

export default Footer