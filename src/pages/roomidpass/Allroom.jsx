import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
const Allroom = () => {
    const context = useContext(myContext)
    const { mode, room } = context
    return (
        <Layout>
            <div>
                <div className='  px-4 md:px-0 mb-16'>
                    <h1 className=' text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '' }}>RoomID & Password</h1>
                    <div className=" flex justify-end">
                    </div>
                    <div className="relative overflow-x-auto ">
                        <table className="w-full text-sm text-left text-yellow-500 dark:text-gray-400  ">
                            <thead className="text-xs border border-gray-600 text-black  bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        S.No
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        RoomID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Password
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Maps
                                    </th>


                                </tr>
                            </thead>

                            {room.map((item, index) => {

                                const { roomId, password, maps } = item;
                                return (

                                    <tbody className=''>
                                        <tr className="bg-gray-50 border-b  dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                {index + 1}
                                            </td>
                                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                                {item.roomId}
                                            </th>
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                {item.password}
                                            </td>
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                {item.maps}
                                            </td>

                                        </tr>

                                    </tbody>


                                )
                            })}

                        </table>

                    </div>
                    <h5>Note: Who all have registered for the slot is consider as a participants else are not will get any prize</h5>
                </div>

                
            </div>

        </Layout>

    )
}

export default Allroom