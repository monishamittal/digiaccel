import React from 'react'
import Addquestion from './Addquestion'
import Registeradmin from './Registeradmin'


const Admin = () => {
  return (
    <div>
      <Registeradmin />
      <form>
        <div >
          <label>Adminname </label>
          <input type="text" name="uname" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div >
          <label>Password </label>
          <input type="password" name="pass" required />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      <Addquestion />
    </div>

  )
}

export default Admin