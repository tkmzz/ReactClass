import React, { Component, Fragment } from 'react'
import axios from 'axios'

import './style.css'

class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: props.match.params.id,
            loading: true,
            data: {},
        }
    }

    componentDidMount() {
        axios.all([
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}`),
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}/description`)
        ])
            .then(([item, description]) => {
                this.setState({
                    data: {
                        ...item.data,
                        description: description.data.plain_text,
                    },
                    loading: false,
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    renderContent() {
        const { data } = this.state;
        console.log(data)
        return (
            <Fragment>
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--6-col">
                        <img src={data.pictures[0].url} />
                    </div>
                    <div className="mdl-cell mdl-cell--6-col">
                        <h2 className="title">{data.title}</h2>
                        <h4 className="price">Preço: {data.base_price} {data.currency_id}</h4>
                        <h4 className="qtd">Quantidade: {data.available_quantity}</h4>
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                            Comprar
                        </button>
                    </div>
                    <p>{data.description}</p>
                </div>
            </Fragment>
        )
    }
    render() {
        const { loading } = this.state;
        return loading ?
            <div>Loading...</div> :
            this.renderContent()
    }
}

export default Product;