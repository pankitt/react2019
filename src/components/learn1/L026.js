import React, {Component} from "react";
import orderBy from 'lodash/orderBy';

/*class ProductCategoryRow extends Component {
    // ganreArr = (id) => {
    //     return id
    //         .map(i => i.category)
    //         .filter((val, i, obj) => obj.indexOf(val) === i);
    // };

    render() {
        const { products } = this.props;

        //const ganreArr = products.reduce((acc,elem)=>acc.add(elem.category), new Set());
        const ganreArr = products
            .map(i => i.category)
            .filter((val, i, obj) => obj.indexOf(val) === i);

        return (
            ganreArr.map((val, i) => {
                return <tr className="thead-light" data-name={val} key={val}>
                    <th colSpan="2">{val}</th>
                </tr>
            })
        );
    }
}*/

/*function addTr(props) {
    const newObj = Object.create(props);
    return newObj;
}*/


class ProductRow extends Component {
    isStocked = (e) => {
        return e ? 'red' : null;
    };

    render() {
        const { products, inStockOnly, filterText } = this.props;
        const rows = [];
        let lastCategory = null;
        const sortedProducts = orderBy(products, ['category', 'name']);


        sortedProducts.map(product => {
            if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return false;
            }
            if (inStockOnly && !product.stocked) {
                return false;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    <tr className="thead-light" key={product.category}>
                        <th colSpan="2">{product.category}</th>
                    </tr>
                );
            }
            rows.push(
                <tr key={product.name}>
                    <td><span className={this.isStocked(product.stocked)}>{product.name}</span></td>
                    <td>{product.price}</td>
                </tr>
            );
             return lastCategory = product.category
        });

        return rows;
    }
}

class ProductTable extends Component {
    render() {
        const { products, inStockOnly, filterText } = this.props;

        return (
            <table className="table table-hover table-bordered">
                <thead className="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    <ProductRow products={products} inStockOnly={inStockOnly} filterText={filterText} />
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
                        {` Only show products in stock`}
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
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'}
];

class NewClass extends Component {
    render() {
        return (
            <FilterableProductTable products={PRODUCTS} />
        )
    }
}

export default NewClass;