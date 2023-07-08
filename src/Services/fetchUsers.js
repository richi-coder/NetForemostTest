export const fetchUsers = async (numberPage) => {
    const baseURL = `https://randomuser.me/api?page=${numberPage}&results=3`;
    const res = await fetch(baseURL);
    const users = await res.json();
    return users.results;
}