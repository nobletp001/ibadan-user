'use client'
import React, { useState } from 'react'

import Image from 'next/image'
import DownloadIcon from '@/public/download.svg';
import FilterIcon from '@/public/filter.svg';
import SearchIcon from '@/public/search.svg';
import BackArrowIcon from '@/public/backArrow.svg';
import MessageIcon from '@/public/smsTracking.svg';
import CallIcon from '@/public/call.svg';
import Link from 'next/link';
import AgentRequestModal from '@/components/Modal/AgentRequestModal';


type Params = { 
        agentId: string
}

const AgentTable: React.FC<Params> = ({agentId}) => {
    const [showRequestModal, setShowRequestModal] = useState<boolean>(false)
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
    
    const activityStatus = (status: string) => {
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
        <div className='w-full py-[3.4rem] px-[2.1rem] bg-white'>

            {/* Table Title */}
            <div className=''>
                <div className='flex justify-between'>                
                        <div>
                            <div className='flex gap-2 items-center'>
                                <Link href={'/agents'}  className='hover:bg-gray-100 rounded-full p-3 cursor-pointer'>
                                    <Image src={BackArrowIcon} alt='' />
                                </Link>
                                <span>BACK</span>
                            </div>
                            <h3 className='mt-[1.7rem] text-[1.6rem] font-bold'>Jehny Wilson,{agentId}</h3>
                            <div className='flex gap-6 text-[.9rem] text-gray-400 mt-2'>
                                <div className='flex gap-2'>
                                    <Image src={MessageIcon} alt='' />
                                    <span>jennywison@gmail.com</span>
                                </div>
                                <div className='flex gap-2'>
                                    <Image src={CallIcon} alt='' />
                                    <span>+234 808 8269 876</span>
                                </div>
                            </div>
                        </div>
                   
                    <div className='flex gap-4'>
                        <div className='border-gray-400 border-[1px] px-[1rem] max-h-[38px] flex gap-2 items-center rounded-sm'>
                            <Image src={DownloadIcon} alt='' />
                            <span>Download PDF Report</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between my-[1.7rem] bg-[#F7F8F9] w-full p-[.64rem]'>
                <div className='relative h-[2.1rem] w-[22.5rem]'>
                    <input type="text" className='w-full h-full text-[.8rem] placeholder:text-gray-400  py-[.42rem] px-[2rem] border-[1px] border-gray-100 rounded-sm focus:border-none outline-none focus:ring-[1px] focus:ring-[#52ADA2]' placeholder='Search by name or location' />
                    <Image src={SearchIcon} alt='' width={20} className='absolute top-[50%] translate-y-[-50%] left-3' />
                </div>
                <div className='gap-2 flex items-center px-3 bg-white'>
                    <Image src={FilterIcon} alt='' />
                    <span className='text-gray-400'>Filter</span>
                </div>
            </div>
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
                        {agentActivityList.map(item =>
                            <tr key={item.id} >
                                <td className='py-[0.9rem] cursor-pointer' onClick={()=>{setShowRequestModal(!showRequestModal)}}>{item.id}</td>
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
            <AgentRequestModal requestID={'57687'} showRequestModal={showRequestModal} setShowRequestModal={setShowRequestModal}/>
        </div>
    )
}

export default AgentTable
