import React from "react"

const ChildComp = React.memo(({user}:any):React.ReactElement | JSX.Element => {

      console.log("Skinny Jack")
      return <>
       {user()}
        <div>Really Skinny Jack</div>
      </>
      
    
  })
 
 /*  export default React.memo(function ChildComp({user}:User) {
    console.log("Skinny Jack")
      return (
        <div>{user}</div>
      )
    }) */
export default ChildComp