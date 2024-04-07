import React from 'react'

type AgentActivityProps = {
    setTableRender: React.Dispatch<React.SetStateAction<string>>;
}

const AgentActivityTable: React.FC<AgentActivityProps> = ({ setTableRender }) => {
    const agentActivityList = [
        {
            id: '12432456',
            propertyType: 'residential apartment',
            regDate: '5/7/21',
            status: 'done',
            location: 'Molete',
            activity: 'filed a complaint'
        },
        {
            id: '167789009',
            propertyType: 'studio apartment',
            regDate: '5/7/21',
            status: 'inProgress',
            location: 'ringroad',
            activity: 'purchased a property'
        },
        {
            id: '1269809856',
            propertyType: 'bungalow apartment',
            regDate: '3/5/21',
            status: 'rejected',
            location: 'ojota',
            activity: 'requested from an agent'
        },

    ]

    const activityStatus = (status: string)=>{
        switch (status) {
            case 'done':
                return 'bg-[#ECFDF5] text-[#064E3B]'
            case 'rejected':
                return 'bg-[#FEF2F2] text-[#991B1B]'
            case 'inProgress':
                return 'bg-[#FFF2D0] text-[#E79B04]'
            default:
                return ''
        }
    }

    return (
        <div>
            <table className='w-full'>
                <thead className='border-b-2 border-gray-200'>
                    <tr>
                        <th className='text-[11.9px] py-[1rem] text-gray-500 font-semibold text-left w-[15%]'>REQUEST ID</th>
                        <th className='text-[11.9px] text-gray-500 font-semibold text-left w-[13%]'>DATE</th>
                        <th className='text-[11.9px] text-gray-500 font-semibold text-left w-[20]'>PROPERTY TYPE </th>
                        <th className='text-[11.9px] text-gray-500 font-semibold text-left w-[20%]'>LOCATION</th>
                        <th className='text-[11.9px] text-gray-500 font-semibold text-left w-[20%]'>ACTIVITY</th>
                        <th className='text-[11.9px] text-gray-500 font-semibold text-left w-[12%]'>STATUS</th>
                    </tr>
                </thead>
                <tbody className='text-[13.6px] text-[#191D23] divide-y divide-gray-100 h-full overflow-y-scroll'>
                    { agentActivityList.map(item =>
                        <tr key={item.id} >
                            <td className='py-[0.9rem]'>{item.id}</td>
                            <td className='py-[0.9rem]'>{item.regDate}</td>
                            <td className='py-[0.9rem]'>{item.propertyType}</td>
                            <td className='py-[0.9rem]'>{item.location}</td>
                            <td className='py-[0.9rem]'>{item.activity}</td>
                            <td className='py-[0.9rem]'>
                                <span className={`rounded-md px-[.5rem] py-[.2rem] ${activityStatus(item.status)}`}>
                                    {item.status}
                                </span>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default AgentActivityTable
