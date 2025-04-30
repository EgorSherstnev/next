'use client'

import { Posts } from "@/components/Posts"
import { PostSearch } from "@/components/PostSearch"
import { getAllPosts } from "@/sevices/getPosts"
import { UsePosts, usePosts } from "@/store"
import { Metadata } from "next"
import Link from "next/link"
import { useEffect, useState } from "react"
import { shallow } from "zustand/shallow"

// async function getData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         // const response = await fetch('https://jsonplaceholder.typicode.com/postssdfgsdggd', {

//         next: {
//             revalidate: 60
//         }
//     });

//     // if (!response.ok) {
//     //     throw new Error(`HTTP error! status: ${response.status}`)
//     // }

//     return response.json()
// }

// export const metadata: Metadata = {
//   title: 'Blog | Next App',
// }

// export default async function Blog() {
//     const posts = await getData()

export default function Blog() {
    // const [posts, setPosts] = useState<any[]>([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     getAllPosts()
    //         .then(setPosts)
    //         .finally(() => {setLoading(false)})
    // }, [])

    return (
        <>
            <h1>Blog page</h1>
            {/* <PostSearch onSearch={setPosts}/> */}
            <PostSearch />
            <Posts />
        </>
    )
}