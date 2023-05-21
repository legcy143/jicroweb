import React from 'react'

const accountdeletion = () => {
  return (
    <div style={{padding:"1rem",textTransform:"capitalize"}}>
        <h2 style={{textAlign:"center"}}>account delete request jicro</h2>
        <hr />
        <br /><br />
        <h3>Data Deletion Request and User Rights</h3><br />
        <p>As a user, you have certain rights regarding your personal data. You have the right to access, rectify, object to, or erase the data maintained by us. If you wish to request the deletion of your personal data, please follow the steps below:</p><br /><br />
        <p> <span style={{fontWeight:"bold"}}> 1. In-App Request:</span> To initiate the data deletion request, you can fill out the request form through the `Initiate Account Deletion` option within the app.</p> <br />
        <p> <span style={{fontWeight:"bold"}}> 2. Google Play Store:</span> Alternatively, you can find the request form in the data deletion section of the Google Play Store.</p><br /><br />
        <p>Once you have submitted the request, our team will verify it accordingly. Upon successful verification, your account and all associated data will be permanently deleted within 90 days, ensuring the complete removal of your information from our systems.</p>
        <br />
        <br />

    <h3>request account delete</h3>
    <input style={{padding:"0.5rem"}} type="text" placeholder='phone number'/><br />
    <button style={{padding:"0.5rem 1rem"}} >submit</button>
    </div>
  )
}

export default accountdeletion