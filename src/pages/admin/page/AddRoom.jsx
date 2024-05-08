import React, { useContext } from 'react';
import myContext from '../../../context/data/myContext';

const addRoom = () => {
    const context = useContext(myContext);
    const { rooms, setRooms, addRoom } = context;

    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className='bg-gray-800 px-10 py-10 rounded-xl'>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Room</h1>
                    </div>
                    <div>
                        <input
                            type="text"
                            value={rooms.roomId}
                            onChange={(e) => setRooms({ ...rooms, roomId: e.target.value })}
                            name='roomId'
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Room ID'
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={rooms.password}
                            onChange={(e) => setRooms({ ...rooms, password: e.target.value })}
                            name='password'
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Password'
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={rooms.maps}
                            onChange={(e) => setRooms({ ...rooms, maps: e.target.value })}
                            
                            name='maps'
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Maps'
                        />
                    </div>
                    <div className='flex justify-center mb-3'>
                        <button
                            onClick={addRoom}
                            className='bg-yellow-500 w-full text-black font-bold px-2 py-2 rounded-lg'
                        >
                            Add Room
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default addRoom;
