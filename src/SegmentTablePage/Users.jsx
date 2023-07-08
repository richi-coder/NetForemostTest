import User from "./User"

function Users({ usersData }) {
    console.log(usersData, 'USERSSSS');
    
  return (
    <>
        {
            usersData ?
            usersData.map((user, i) => <User key={i} userData={user} />) :
            null
        }
    </>
  )
}

export default Users