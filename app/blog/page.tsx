'use client'

import { Posts } from "@/components/Posts"
import { getAllPosts } from "@/sevices/getPosts"
import { Metadata } from "next"
import Link from "next/link"
import { useEffect, useState } from "react"

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

export const metadata: Metadata = {
  title: 'Blog | Next App',
}

// export default async function Blog() {
//     const posts = await getData()

export default function Blog() {
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllPosts()
            .then(setPosts)
            .finally(() => {setLoading(false)})
    }, [])

    return (
        <>
            <h1>Blog page</h1>
            {loading ? (<h3>Loading</h3>
            ) : (
                <Posts posts={posts} />
            )}
        </>
    )
}