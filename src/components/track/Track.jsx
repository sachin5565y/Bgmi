import React, { useContext, useState, useEffect } from 'react'
import myContext from '../../context/data/myContext'
import { Link } from 'react-router-dom';
function Track() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Yaduvanhsi sachin</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>Watch our <span className=' text-pink-500'>Live Stream</span> on Youtube</h2>

                    <div className="flex justify-center mx-4">
                        <Link to='https://www.youtube.com/@Yaduvanshi-Sachin' className='text-center text-3xl font-bold text-yellow-500'style={{ color: mode === 'dark' ? 'white' : '' }} target='_blank'>
                            Watch Now 
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Track