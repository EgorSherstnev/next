export const getAllPosts = async () => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response = await fetch('api/posts')


    if (!response.ok) throw new Error ('unable to fetch posts.')

    return response.json()
}

export const getPostsBySearch = async (search: string) => {
    const response = await fetch(
        // `https://jsonplaceholder.typicode.com/posts?title_like=${search}&body_like=${search}`
        `api/posts?q=${search}`
    )

    if (!response.ok) throw new Error("Unable to fetch posts.")
    
    return response.json()
}