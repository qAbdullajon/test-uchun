"use client"

import { useEffect, useState } from 'react'
import { PostType } from '@/interface'
import axios from 'axios'

const HomePageComponents = () => {
  const [data, setData] = useState<PostType[]>()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        setData(data)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }

    getPosts()
  }, [])
  return (
    <>
      {
        loading ?
          'Loading...' :
          <table border={1} style={{ marginTop: '10px' }}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {
                data?.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
      }
    </>
  )
}

export default HomePageComponents