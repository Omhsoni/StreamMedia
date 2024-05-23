import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import parseData from "../../utils/parseData";


const API_KEY = "AIzaSyCwGb5KESdew-un-1UVNslfFPbbcuqAaOM";

export const getSearchPageVideos = createAsyncThunk(
    "StreamMedia/App/homePageVideos",
    async (isNext, { getState }) => {
        const { StreamMedia: { nextPageToken : nextPageTokenfromState, videos, searchTerm } } = getState(); 

        const response = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&${isNext ? `pageToken=${nextPageTokenfromState}` : "" }`
        );

        const items = response.data.items;
        console.log(items);
        
        const parsedData = await parseData(items);

        return { parsedData:[...videos,...parsedData],nextPageToken:nextPageTokenfromState}
    }
);