import React from "react";
import '@fontsource/roboto/400.css';
import MenuIcon from '@mui/icons-material/Menu';
import NotStartedRoundedIcon from '@mui/icons-material/NotStartedRounded';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import VideoCallRoundedIcon from '@mui/icons-material/VideoCallRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { changeSearchTerm, clearVideos } from "../features/StreamMedia/streamMediaSlice";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";

export default function Navbar() {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector((state) => state.StreamMedia.searchTerm);

    const handleSearch = () => {
        if (location.pathname !== '/search') navigate("/search");
        else {
            dispatch(clearVideos);
            dispatch(getSearchPageVideos(false));
        }

    }

    return (
        <div className="flex justify-between px-10 h-16 items-center bg-[#212121] sticky text-white">

            <div className="flex gap-4 items-center text-2xl text-white">
                <div>
                    <MenuIcon sx={{ fontSize: 40 }} />
                </div>
                <div className="text-red">
                    <NotStartedRoundedIcon sx={{ fontSize: 40 }} className="text-orange-500" />
                    <span className="italic px-1 underline ">StreamMedia</span>
                </div>
            </div>

            <div className="flex items-center justify-center gap-5">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                }}>
                    <div className="flex items-center bg-zinc-900 h-10 px-1 pr-1 rounded-2xl">
                        <div className="flex items-center text-white gap-5">
                            <input type="text" placeholder="Search" className="w-96 px-3 bg-zinc-900 focus:outline-none border-grey rounded-xl text-lg" value={searchTerm} onChange={e=>dispatch(changeSearchTerm(e.target.value))} />
                        </div>
                        <button className="flex items-center justify-center bg-zinc-700 rounded-r-xl">
                            <ManageSearchIcon sx={{ fontSize: 30 }} className="text-2xl m-1" />
                        </button>
                    </div>
                </form>
                <div className="flex items-center justify-center bg-zinc-800 rounded-full">
                    <SettingsVoiceIcon sx={{ fontSize: 30 }} className="text-3xl m-2" />
                </div>
            </div>

            <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center bg-zinc-800 rounded-full gap-2">
                    <VideoCallRoundedIcon sx={{ fontSize: 30 }} className="text-3xl m-2" />
                </div>
                <div className="flex items-center justify-center bg-zinc-800 rounded-full gap-2 ">
                    <NotificationsNoneRoundedIcon sx={{ fontSize: 30 }} className="text-3xl m-2" />
                    <span className="absolute bottom-10 ml-9 text-xs bg-red-600 px-1 rounded-full">9+</span>
                </div>
                <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="profie-img" className="w-9 h-9" />
            </div>
        </div>
    )
}