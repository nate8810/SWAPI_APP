import React, { Component } from "react";
import Suggestions from '../components/Suggestions';

const API_URL = 'https://swapi.co/api/'

export default class Home extends Component {

    state = {
        query: '',
        results: []
    }

    getInfo = () => {
        let searchText = this.state.query;
        fetch(
            `${API_URL}people/?search=${encodeURIComponent(searchText)}`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                this.setState({
                    results: response.results
                })
            }
            )
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            }
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1 id="header">SWAPi  APP</h1>
                    <div className="row">
                        <div className="col">
                            <div id="searchBox">
                                <p id="sq">What are you searching for?</p>
                                <form>
                                    <div className="form-group">
                                        <input type="radio" name="selector" value="People" checked="checked" className="radio" /><span className="searchText">People</span>
                                        <input type="radio" name="selector" value="Movies" className="radio" /> <span className="searchText" >Movies</span>
                                    </div>
                                    <div className="form-group search">
                                        <input
                                            id="searchBar"
                                            placeholder="e.g. Chewbacca, Yoda, Boba Fet"
                                            ref={input => this.search = input}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </form>
                                <div className="search">
                                    <button className="searchbtn btn btn-primary">SEARCH</button>
                                </div>
                            </div>
                        </div>
                        <div className="col" id="results">
                            <h2 id="resultsH2">Results</h2>
                            <Suggestions results={this.state.results} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
