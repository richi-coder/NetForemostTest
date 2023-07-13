import { useEffect, useState } from "react"
import { fetchUsers } from "../services/fetchUsers";
import Users from "./components/Users";
import BringUsers from "./components/BringUsersButton";

function SegmentTablePage() {
    const [indexPage, setIndexPage] = useState(1);
    const [users, setUsers] = useState([]);
    const [buttonDisabled, setButtonDisabled] = useState(true)

    useEffect(() => {
        fetchUsers(indexPage).then((resUsers) => {
            setUsers(...users, resUsers)
            setButtonDisabled(false)
        })
    }, [])

    const printMoreUsers = (moreUsers) => {
        setIndexPage(prev => prev + 1);
        setUsers([
            ...users,
            ...moreUsers
        ])
    }
    

  return (
    <div className="w-full flex flex-col">
        <Users usersData={users} />
        <BringUsers currentIndex={indexPage} buttonDisabled={buttonDisabled} printMoreUsers={printMoreUsers} />
    </div>
  )
}

export default SegmentTablePage