import React from 'react'
import UserTable from './component/UserTable'

type Params = {
    params:{
       userId: string
    }
  }
const page  : React.FC<Params> = ({params:{userId}}) =>  {
  return (
    <div>
      <UserTable userId={userId}/>
    </div>
  )
}

export default page
