
import React from 'react'
import AgentTable from './component/AgentTable'

type Params = {
  params:{
      agentId: string
  }
}
const Page : React.FC<Params> = ({params:{agentId}}) =>  {

  return (
    <div>
      <AgentTable agentId={agentId} />
    </div>
  )
}

export default Page
