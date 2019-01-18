import React, {Component} from "react";



class ProductCategoryRow extends Component {
    /*myFunc = (chanId) => {
        const { channels } = this.props;
        const addGenre = filter(channels, channel => +channel.genres === +chanId && channel.isPurchased === false);
        return addGenre.length;
    };*/

    render() {
        const { products } = this.props;

        return (
            products.map(product => {
                return <tr className="thead-light" key={product.name}>
                    <td colSpan="2">{product.category}</td>
                </tr>
            })
        );
    }
}

class ProductRow extends Component {
    render() {
        const { products } = this.props;

        return (
            products.map(product => {
                return <tr key={product.name}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            })
        );
    }
}

class ProductTable extends Component {
    render() {
        const { products } = this.props;

        return (
            <table className="table table-hover table-bordered">
                <thead className="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    <ProductCategoryRow products={products} />
                    <ProductRow products={products} />
                </tbody>
            </table>
        );
    }
}

class SearchBar extends Component {
    handleFilterTextChange = (e) =>  {
        this.props.onFilterTextChange(e.target.value);
    };

    handleInStockChange = (e) => {
        this.props.onInStockChange(e.target.checked);
    };

    render() {
        const {filterText, inStockOnly} = this.props;

        return (
            <form>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search..."
                        value={filterText}
                        onChange={this.handleFilterTextChange}
                    />
                </div>
                <div className="form-group form-check">
                    <label>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            checked={inStockOnly}
                            onChange={this.handleInStockChange}
                        />
                        {' '}
                        Only show products in stock
                    </label>
                </div>
            </form>
        );
    }
}

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };
    }

    handleFilterTextChange = (filterText) => {
        this.setState({
            filterText: filterText
        });
    };

    handleInStockChange = (inStockOnly) => {
        this.setState({
            inStockOnly: inStockOnly
        });
    };

    render() {
        const {filterText, inStockOnly} = this.state;

        return (
            <div>
                <SearchBar
                    filterText={filterText}
                    inStockOnly={inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockChange}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={filterText}
                    inStockOnly={inStockOnly}
                />
            </div>
        );
    }
}

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class NewClass extends Component {
    render() {
        return (
            <FilterableProductTable products={PRODUCTS} />
        )
    }
}

export default NewClass;