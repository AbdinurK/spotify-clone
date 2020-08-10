import React, { useEffect, useState } from 'react';
import Login from "./components/Login/Login";
import './App.css';
import {getTokenFromUrl} from "./services/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./context/DataLayer"
import Player from "./components/Player/Player";

const spotify = new SpotifyWebApi();

function App() {

    const [{ user, token }, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;
        if (_token) {
            dispatch({
                type: "SET_TOKEN",
                token: _token
            })
            spotify.setAccessToken(_token)
            spotify.getMe().then(user => {
                dispatch({
                    type: "SET_USER",
                    user: user
                })
            }).catch(e => console.log(e))

            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: "SET_PLAYLIST",
                    playlists: playlists
                })
            })
        }

    }, []);

  return (
    <div className="App">
        {
            token ? (
                <Player spotify={spotify}/>
            ) : (
                <Login/>
            )
        }
    </div>
  );
}

export default App;
