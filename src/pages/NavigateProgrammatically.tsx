import React from 'react'
import { useNavigate } from 'react-router-dom'


const NavigateProgrammatically:React.FC = () => {
 
    // to navigate programmatically we will use useNavigate Hook

    const navigate= useNavigate();

    const goToUserPage = (id: string) => {
        // navigate programmatically to  /user/1 or /user/2
        // imagine a payment flow, navigate/redirect to success of failure page
        navigate(`/user/${id}`);
    }

  return (
    <div>
        <h1>Navigate Programmatically</h1>
        <button onClick={()=>goToUserPage("1")}>Go to user 1</button>
        <button onClick={()=> goToUserPage("2")}>Go to user 2</button>
    </div>
  )
}

export default NavigateProgrammatically