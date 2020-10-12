import React, { forwardRef } from 'react'
import './VideoCard.css'
import TextTruncate from 'react-text-truncate';
import ThumbUpSharpIcon from '@material-ui/icons/ThumbUpSharp';
const base_Url = "https://image.tmdb.org/t/p/original/";
const VideoCard = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className="videoCard">
            <img src={`${base_Url}${movie.backdrop_path || movie.poster_path}`} alt="" />

            <TextTruncate
                line={2}
                element="p"
                truncateText="…"
                text={movie.overview}
            />

            <h2>{movie.title || movie.original_name}</h2>
            <p className="videoCard__stats">
                {
                    movie.media_type && `${movie.media_type} •  `
                }
                {
                    movie.release_date || movie.first_air_date
                } •
                <ThumbUpSharpIcon /> {" "}
                {movie.vote_count}
            </p>
        </div>
    )
})

export default VideoCard
