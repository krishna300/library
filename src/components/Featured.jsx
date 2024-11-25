import React, { useContext } from 'react'
import { IoPieChartOutline } from "react-icons/io5";
import { AppContext } from '../context/AppContext';

const Featured = () => {
  const {filtered} = useContext(AppContext) 
  return (
    <div className='mx-auto w-[50vw]'>
        {filtered.filter(newsItem => newsItem.featured).length >0 && (
            <>
                <h1 className='text-3xl'>Featured</h1>
                <p className='text-slate-600'>Curated top picks from this week</p>
            </>
        )}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
            {filtered.filter(newsItem => newsItem.featured).map(newsItem => { 
                return (
                    <div className='min-w-[25vw] bg-white m-2 p-4 flex gap-2'>
                        <div className='flex justify-center items-center'>
                            <IoPieChartOutline size={70} color='gray'/>
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>{newsItem.title}</h1>
                            <p className='text-[12px]'>{newsItem.desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>

        {filtered.filter(newsItem => newsItem.trending).length >0 &&
            <>
                <h1 className='text-3xl mt-3'>Trending</h1>
                <p className='text-slate-600'>Most popular by community</p>
            </>
        }
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
            {filtered.filter(newsItem => newsItem.trending).map(newsItem => { 
                return (
                    <div className='min-w-[25vw] bg-white m-2 p-4 flex gap-2'>
                        <div className='flex justify-center items-center'>
                            <IoPieChartOutline size={70} color='gray'/>
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>{newsItem.title}</h1>
                            <p className='text-[12px]'>{newsItem.desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default Featured
