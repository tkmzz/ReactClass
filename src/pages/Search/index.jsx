import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

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
            <li key={item.id}>
                <span>{item.id}</span>
                <span>{item.title}</span>
                <Link
                    to={`product/${item.id}`}>
                    Mostrar produto
                </Link>
            </li>
        )
    }

    render() {
        return (
            <Fragment>
                <input type="text" onChange={this.onSearch} />

                <ul>
                    {this.state.results.map(this.renderItem)}
                </ul>
            </Fragment>
        );
    }
}

export default Search;