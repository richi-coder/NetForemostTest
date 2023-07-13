import { fetchUsers } from "../../services/fetchUsers"

function BringUsersButton({ currentIndex, buttonDisabled, printMoreUsers }) {

    const handleClick = () => {
        fetchUsers(currentIndex + 1).then(resUsers => printMoreUsers(resUsers));
    }

  return (
    <button
        onClick={handleClick}
        disabled={buttonDisabled}
    >
        Load more users!
    </button>
  )
}

export default BringUsersButton;