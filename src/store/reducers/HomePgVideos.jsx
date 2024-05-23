import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import parseData from "../../utils/parseData";

const API_KEY = "AIzaSyCwGb5KESdew-un-1UVNslfFPbbcuqAaOM";

export const HomePgVideos = createAsyncThunk(
    "StreamMedia/App/searchPageVideos",
    async (isNext, { getState }) => {
        const { StreamMedia: { nextPageToken : nextPageTokenfromState, videos } } = getState(); 

        const response = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="Marvel Entertainment"&key=${API_KEY}&part=snippet&type=video&${isNext ? `pageToken=${nextPageTokenfromState}` : "" }`
        );

        const items = response.data.items;
        console.log(items);
        
        const parsedData = await parseData(items);

        return { parsedData:[...videos,...parsedData],nextPageToken:nextPageTokenfromState}
    }
);
