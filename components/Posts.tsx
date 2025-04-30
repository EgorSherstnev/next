'use client'

import { usePosts } from '@/store'
import Link from 'next/link'
import React, { useEffect } from 'react'

// type Props = {
//     posts: any[]
// }
const Posts = () => {
    const [ posts, loading, getAllPosts ] = usePosts((state) => ([
        state.posts,
        state.loading,
        state.getAllPosts
        ]
    ))

    useEffect(() => {
        getAllPosts()
    }, [getAllPosts])
    return (loading ? ( <h3>Loading</h3> 
        ) : (     
        <ul>
            {posts.map((post: any) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            ))}
        </ul> 
        )
    )
}

export {Posts}