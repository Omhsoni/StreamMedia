import React, { useEffect } from "react"; 
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { HomePgVideos } from "../store/reducers/HomePgVideos";
import Spinner from "../components/spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/card";

export default function Home(){

    const dispatch = useAppDispatch();
    const videos = useAppSelector((state) =>state.StreamMedia.videos);

    useEffect(() => {
        dispatch(HomePgVideos(false));
        // console.log(videos);
    },[dispatch]);

    return(
        <div className="bg-blue-100 h-dvh overflow-hidden">
            <div style={{height:"10vh"}}>
                <Navbar/>
            </div>
            <div className="flex" style={{height:"52.5vh"}}>
                <Sidebar/>
                {
                    videos.length ? (
                        <InfiniteScroll
                        dataLength={videos.length}
                        next={()=> dispatch(HomePgVideos(true))}
                        hasMore={videos.length<500}
                        loader={<Spinner/>}
                        height={600}
                        >
                            <div className="grid gap-y-14 gap-x-8 grid-cols-3 p-4 ">
                            {videos.map((item, index) => {
                                return <Card data={item} key={`${item.videoId}-${index}`} />;
                            })};
                            </div>

                        </InfiniteScroll>
                    ):(
                        <Spinner/>
                    )
                }
            </div>
        </div>
    )
}