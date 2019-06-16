import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

import axios from 'axios'
import './style.css'

class Search extends Component {
    constructor() {
        super()

        this.onSearch = this.onSearch.bind(this)

        this.state = {
            results: [],
        }
    }

    onSearch(event) {
        const value = event.currentTarget.value
        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`)
            .then(({ data }) => {
                this.setState({
                    results: data.results,
                })
            })
    }

    renderItem(item) {
        return (
            <p className="card" key={item.id}>
                <Image className="imgThumb" src={item.thumbnail} thumbnail />
                <span>{item.title}</span>
                <span> </span>
                <Link
                    to={`product/${item.id}`}>
                    <button className="searchButton">
                        Mostrar produto
                    </button>
                </Link>
            </p>
        )
    }

    render() {
        return (
            <Fragment>
                <input type="text" className="inputStyle" onChange={this.onSearch} />

                <div>
                    {this.state.results.map(this.renderItem)}
                </div>
            </Fragment>
        );
    }
}

export default Search;