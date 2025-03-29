import { Metadata } from "next"
import Link from "next/link"

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        // const response = await fetch('https://jsonplaceholder.typicode.com/postssdfgsdggd', {

        next: {
            revalidate: 60
        }
    });

    // if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`)
    // }

    return response.json()
}

export const metadata: Metadata = {
  title: 'Blog | Next App',
}

export default async function Blog() {
    const posts = await getData()

    return (
        <>
            <h1>Blog page</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}