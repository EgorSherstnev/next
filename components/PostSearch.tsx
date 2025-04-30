'use client'

// import { getPostsBySearch } from '@/sevices/getPosts'
import { usePosts } from '@/store'
import React, { useState } from 'react'

// type Props = {
//     onSearch: (value: any[]) => void
// }

// const PostSearch = ({onSearch}: Props) => {
const PostSearch = () => {
    const [search, setSearch] = useState('')
    const [getPostsBySearch] = usePosts(state => [
        state.getPostsBySearch
    ])

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async(event) => {
        event.preventDefault()

        await getPostsBySearch(search)

        // const posts = await getPostsBySearch(search)

        // onSearch(posts)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='search' 
                placeholder='search' 
                value={search} 
                onChange={event => setSearch(event.target.value)} 
            />
            <button type='submit'>Search</button>
        </form>
    )
}

export {PostSearch}