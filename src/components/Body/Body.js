import React from "react";
import "./Body.css"
import Header from "../Header/Header";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {useDataLayerValue} from "../../context/DataLayer";
import SongRow from "../SongRow/SongRow";


function Body({ spotify }) {

    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify}/>
            <div className="body__info">
                <img src={discover_weekly?.images[0].url}/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover weekly</h2>
                    <p>{ discover_weekly?.description }</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon/>
                </div>
                { discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track}/>
                )) }
                <iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="380"
    frameBorder="0" allowTransparency="true" allow="encrypted-media"/>
            </div>
        </div>
    )
}

export default Body
