import React from "react";
import { Link ,Outlet} from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Users = () => {

const [searchparams,setSearchparams] = useSearchParams();
const Activeusers = searchparams.get('filter') === "active"

  return (
    <>
      <div>All Users</div>
      <nav>
        <ul>
          <li>
            <Link to="1">User1</Link>
          </li>
          <li>
            <Link to="2">User2</Link>
          </li>
          <li>
            <Link to="3">User3</Link>
          </li>
        </ul>
      </nav>

      {/* <Outlet/> */}


      <button onClick={()=>setSearchparams({filter:"active"})}>Active users</button>
      <button onClick={()=>setSearchparams({})}>Reset Filter</button>

      {
        Activeusers ? <h2>Showing all active users list....</h2> : <h2>Showing all users</h2>
      }
    </>
  );
};

export default Users;
