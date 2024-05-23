import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getVideoDetails } from "../store/reducers/getVideoDetails";
import Navbar from "../components/navbar";

export default function Watch() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentPlaying = useAppSelector((state) => state.StreamMedia.currentPlaying);

  useEffect(() => {
    if (!id) {
      navigate("/");
    } else {
      dispatch(getVideoDetails(id));
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    console.log("Current Playing Video:", currentPlaying); // Log currentPlaying to debug
  }, [currentPlaying]);

  return (
    <div>
      {currentPlaying && currentPlaying.videoId === id ? (
        <div className="bg-blue-100 h-screen overflow-hidden">
          <div style={{ height: "10vh" }}>
            <Navbar />
          </div>

          <div className="flex justify-center items-center" style={{ height: "90vh" }}>
            <iframe
              src={`https://www.youtube.com/embed/${id}?autoplay=1`}
              width="800"
              height="450"
              allowFullScreen
              title={currentPlaying.videoTitle}
            ></iframe>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
