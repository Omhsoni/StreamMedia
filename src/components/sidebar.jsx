import React from "react";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import DownloadIcon from '@mui/icons-material/Download';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

export default function Sidebar(){
    const mainLinks = [
        {
            icon: <OtherHousesIcon/>,
            name: "Home"
        },
        {
            icon: <SlowMotionVideoIcon/>,
            name: "Shorts"
        },
        {
            icon: <CardMembershipIcon/>,
            name: "Subscriptions"
        }
    ]

    const secondaryLinks = [
        {
            icon: <LibraryBooksIcon/>,
            name: "Library"
        },
        {
            icon: <GraphicEqIcon/>,
            name: "Music"
        },
        {
            icon: <ManageHistoryIcon/>,
            name: "History"
        },
        {
            icon: <DownloadIcon/>,
            name: "Downloads"
        },

    ]
    return(
        <div className="w-56 bg-[#212121] pr-4 h-dvh overflow-hidden pb-8 pt-5 ">
            <ul className=" text-white flex flex-col border-b-2 border-gray-600 text-lg">
            {mainLinks.map(
                ({icon,name}) => (
                    <li key={name} className={`m-1 pl-6 py-2 hover:bg-blue-100 rounded-md hover:text-blue-800 ${name === "Home" ? "bg-blue-100 text-blue-800" : " "}`}>
                        <a href="#" className="flex items-center gap-2">
                            {icon}&nbsp;
                            <span className="text-base tracking-wider">{name}</span>
                        </a>
                    </li>
                )
            )}
            </ul>  
            <ul className=" text-white flex flex-col border-b-1 text-lg">
            {secondaryLinks.map(
                ({icon,name}) => (
                    <li key={name} className={`m-1 pl-6 py-2 hover:bg-blue-100 rounded-md hover:text-blue-800 ${name === "Home" ? "bg-blue-100 text-blue-800" : " "}`}>
                        <a href="#" className="flex items-center gap-2">
                            {icon}&nbsp;
                            <span className="text-base tracking-wider">{name}</span>
                        </a>
                    </li>
                )
            )}
            </ul>  

        </div>
    )
}
