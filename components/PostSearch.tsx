'use client'

import { usePosts } from '@/store'
import React, { useState, useCallback } from 'react'

const PostSearch = () => {
    const [search, setSearch] = useState('')
    const getPostsBySearch = usePosts(state => state.getPostsBySearch)

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = React.useCallback(async (event) => {
        event.preventDefault();
        await getPostsBySearch(search);
    }, [getPostsBySearch, search])

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='search' 
                placeholder='search' 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
            />
            <button type='submit'>Search</button>
        </form>
    )
}

export { PostSearch }