import React from "react";
import { Link } from "react-router-dom";

export default function Card({ data }) {
    console.log(data)
    return (
        <div className='w-80 h-60 flex gap-2 flex-col border-black scrollbar-thin'>
            <div className='relative'>
                <Link to = {`/watch/${data.videoId}`}>                    
                <img src={data.videoThumbnail} className='h-34 w-76 rounded' />
                </Link>
                <span className='absolute bottom-3 right-3 text-sm text-white bg-gray-800/75 rounded px-2 py-0.5 z-10'>
                    {data.videoDuration}
                </span>
            </div>
            <div className='flex gap-2'>
                <div className='min-w-fit'>
                    <a href="#">
                        <img src={data.channelInfo.image} alt="channel image" className='h-9 w-9 rounded-full' />
                    </a>
                </div>
                <div>
                    <h3 >
                        <a href="#" className='text-sm line-clamp-2'>{data.videoTitle}</a>
                    </h3>
                    <div className='text-sm text-gray-800'>
                        <div>
                            <a href="#" className='hover:text-red-500'>{data.channelInfo.name}</a>
                        </div>
                        <div>
                            <span className="after:content-['•'] after:mx-1">
                                {data.videoViews} Views
                            </span>
                            <span>
                                {data.videoAge}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}