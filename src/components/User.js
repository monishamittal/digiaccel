import React from 'react'
import Registeruser from './Registeruser'

const User = () => {
  return (
    <div>
      <Registeruser />
      <form>
        <div >
          <label>Username </label>
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
    </div>
  )
}

export default User