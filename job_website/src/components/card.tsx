import React from 'react'

function Card({
    children
}) {
    let containsDevelopers = false;
  React.Children.forEach(children, (child) => {
      console.log(child)
    if (typeof child === "string" && child.includes("Developers")) {
      containsDevelopers = true;
    } else if (React.isValidElement(child)) {
      if (
        typeof child.props.children === "string" &&
        child.props.children.includes("Developers")
      ) {
        containsDevelopers = true;
      }
    }
  });
    return (
    <div style={{  
              color: 'black',  
                    padding: '10px',  
                          flexDirection: 'row', 
backgroundColor: containsDevelopers ? "yellow" : "grey"
                                    }}> 
{ children }
</div>
    )
}

export default Card
