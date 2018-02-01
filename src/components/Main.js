import React from 'react';
import { ShotChart } from './ShotChart'
import nba from 'nba';
import { Profile } from "./Profile"
import { DataViewContainer } from "./DataViewContainer"
import {SearchBar} from "./SearchBar"

export class Main extends React.Component {

    state = {
        playerId: nba.findPlayer('Stephen Curry').playerId,
        playerInfo: {},
    }

    componentDidMount() {
        this.loadPlayerInfor('Stephen Curry');
    }

    loadPlayerInfor = (playerName) => {
        nba.stats.playerInfo({PlayerID: nba.findPlayer(playerName).playerId}).then((info) => {
                const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
                console.log(playerInfo);
                this.setState({ playerInfo: playerInfo });
            }
        )
    }
    handleSelectPlayer = (playerName) => {
        this.loadPlayerInfor(playerName);
    }
    render() {
        return (
            <div className="main">
                <SearchBar handleSelectPlayer={this.handleSelectPlayer}/>
                <div className="player">
                    <Profile playerInfo = {this.state.playerInfo}/>
                    <DataViewContainer playerId={this.state.playerInfo.playerId}/>
                </div>

            </div>
        );
    }
}