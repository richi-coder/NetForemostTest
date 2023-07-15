export const fetchPosts = async() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const res = await fetch(url);
    const data = await res.json();
    return data;
}


export const fetchOnePost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return fetch(url)
                    .then(res => res.json)
                    .then(data => data)
                    .catch(err => console.log(err))
}