import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import parseRecommendedVideos from "../../utils/parseRecommended";

const API_KEY = "AIzaSyCwGb5KESdew-un-1UVNslfFPbbcuqAaOM";

export const getRecommendedVideos = createAsyncThunk(
    "StreamMedia/App/getRecommendedVideos",
    async (videoId, { getState }) => {
        const { StreamMedia: { currentPlaying: { channelInfo:{id:channelId}} },
        } = getState(); 

        const response = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search/activities?&key=${API_KEY}&channelId=${channelId}part=snippet,contentDetails&type=video&maxResults=20&type=videoId=${videoId}`);

        const items = response.data.items;
        console.log(items);
        
        const parsedData = await parseRecommendedVideos(items,videoId);

        return { parsedData }
    }
);
