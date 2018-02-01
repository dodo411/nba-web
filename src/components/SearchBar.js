import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from "nba";


export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        const players = nba.searchPlayers(value);
        this.setState({
            dataSource: !value ? [] :
                nba.searchPlayers(value).map(players => players.fullName)
        });
    }

    onSelect = (name) => {
        this.props.handleSelectPlayer(name);
    }

    render() {
        const { dataSource } = this.state;
        return (
            <AutoComplete
                className="search-bar"
                dataSource={dataSource}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search NBA Player"
                size="large"
            >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        );
    }
}

