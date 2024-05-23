import React, { useEffect } from "react"; 
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { HomePgVideos } from "../store/reducers/HomePgVideos";
import Spinner from "../components/spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/card";
import { useNavigate } from "react-router-dom";
import { clearVideos } from "../features/StreamMedia/streamMediaSlice";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import SearchCard from "../components/searchCard";

export default function Search(){

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const videos = useAppSelector((state) =>state.StreamMedia.videos);
    const SearchTerm = useAppSelector((state)=> state.StreamMedia.SearchTerm);

    useEffect(() => {
        dispatch(clearVideos());
        if(SearchTerm === "") navigate("/");
        else{
            dispatch(getSearchPageVideos(false));
        }
        // console.log(videos);
    },[dispatch,navigate,SearchTerm]);

    return(
        <div className="bg-blue-100 h-dvh overflow-hidden">
            <div style={{height:"10vh"}}>
                <Navbar/>
            </div>
            <div className="flex" style={{height:"52.5vh"}}>
                <Sidebar/>
                {
                    videos.length ? (
                        <div className="pl-3 flex flex-col gap-6 w-full">
                        <InfiniteScroll
                        dataLength={videos.length}
                        next={()=> dispatch(getSearchPageVideos(true))}
                        hasMore={videos.length<500}
                        loader={<Spinner/>}
                        height={600}
                        >
                            <div className="my-5 grid gap-y-5 gap-x-8  p-2 ">
                            {videos.map((item, index) => {
                                return <SearchCard data={item} key={`${item.videoId}-${index}`} />;
                            })};
                            </div>

                        </InfiniteScroll>
                        </div>
                    ):(
                        <Spinner/>
                    )
                }
            </div>
        </div>
    )
}