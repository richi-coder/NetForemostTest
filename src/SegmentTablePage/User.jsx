function User({ userData }) {
  return (
    <div className="flex flex-row gap-x-7 items-center justify-end">
        <div>{userData.name.title} {userData.name.first}</div>
        <div>{userData.gender}</div>
        <div>{userData.location.city}</div>
        <img src={userData.picture.large} className="rounded-full" alt="" />
    </div>
  )
}

export default User