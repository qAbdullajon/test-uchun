import { notFound } from 'next/navigation'
import { PostType } from '@/interface'
import Link from 'next/link'
import axios from 'axios'
import React from 'react'

const getData = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=8")
  return data
}

const PostsPage = async () => {
  const data = await getData()
  if (!data.length) {
    notFound()
  }

  return (
    <table border={1} style={{ marginTop: '10px' }}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {
          data?.map((item: PostType) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <Link href={`/posts/${item.id}`}>{item.title}</Link>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default PostsPage