import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import PageLayouts from '@/pages/PageLayouts'
import { users } from '.'

const UserDetails = () => {

  const { query } = useRouter();
  
  const id = query.id;
  
  const UserDetails = users[id - 1];

  return (
    <>
    
      <Head>
        <title>Web3Bridge | Users</title>

      </Head>

      <PageLayouts>
        <div>UserDetails</div>
      </PageLayouts>

    </>

  )
}

export default UserDetails