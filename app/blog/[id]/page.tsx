import { Metadata } from "next"

type Props = {
    params: {
        id: string,
    }
}

export async function generateMetadata ({
    params: { id }
}: Props): Promise<Metadata> {
   return {
      title: `Post ${id} | Next App`,
   }
}

export default function Post({params: { id }}: Props) {
   return <h1>Post page {id}</h1>
}