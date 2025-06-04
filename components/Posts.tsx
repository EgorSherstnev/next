'use client'

import { usePosts } from '@/store'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { shallow } from 'zustand/shallow'

const Posts = () => {
    const { posts, loading } = usePosts(state => ({
        posts: state.posts,
        loading: state.loading
    }), shallow)

    useEffect(() => {
        usePosts.getState().getAllPosts()
    }, [])

    return loading ? (
        <h3>Loading</h3>
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
}

export { Posts }
