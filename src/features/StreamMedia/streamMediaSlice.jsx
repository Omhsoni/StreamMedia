import { createSlice } from "@reduxjs/toolkit";
import { HomePgVideos } from "../../store/reducers/HomePgVideos";
import { getSearchPageVideos } from "../../store/reducers/getSearchPageVideos";
import { getRecommendedVideos } from "../../store/reducers/getRecommendedVideos";
import { getVideoDetails } from "../../store/reducers/getVideoDetails";

const  initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm:"",
    searchResult: [],
    nextPageToken: null,
    recommendedVideo: [],
};

const streamMediaSlice = createSlice({
    name: "StreamMedia",
    initialState,
    reducers:{
        clearVideos:(state)=>{
            state.videos = [];
            state.nextPageToken = null;
        },
        changeSearchTerm:(state,action) => {
            state.searchTerm = action.payload;
        },
        clearSearchTerm:(state)=>{
            state.searchTerm = "";
        }
    },
    extraReducers:(builder) => {
        builder.addCase(HomePgVideos.fulfilled,(state,action)=> {
            // console.log("Action Payload:", action.payload);
            if(action.payload && action.payload.parsedData){
                state.videos = action.payload.parsedData;
                state.nextPageToken = action.payload.nextPageToken;
            }
        }); 
        builder.addCase(getSearchPageVideos.fulfilled,(state,action)=> {
            // console.log("Action Payload:", action.payload);
            if(action.payload && action.payload.parsedData){
                state.videos = action.payload.parsedData;
                state.nextPageToken = action.payload.nextPageToken;
            }
        }); 
        builder.addCase(getRecommendedVideos.fulfilled,(state,action)=> {
            // console.log("Action Payload:", action.payload);
            if(action.payload && action.payload.parsedData){
                state.recommendedVideo = action.payload.parsedData;
            }
        }); 
        builder.addCase(getVideoDetails.fulfilled,(state,action)=> {
            // console.log("Action Payload:", action.payload);
            if(action.payload ){
                state.currentPlaying = action.payload;
                
            }
        });
    }
});

export const {clearVideos,changeSearchTerm,clearSearchTerm} = streamMediaSlice.actions;
export default streamMediaSlice.reducer;