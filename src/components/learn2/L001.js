import React, { Component, Fragment } from 'react';


// Variant 1
// function ListItem({ item }) {
//     return (
//         <>
//             <dt>{item.name}</dt>
//             <dd>{item.price}</dd>
//         </>
//     );
// }


// Variant 2
function ListItem({ item }) {
    return (
        <Fragment>
            <dt>{item.name}</dt>
            <dd>{item.price}</dd>
        </Fragment>
    );
}

class Glossary extends Component {
    render() {
        const products = this.props.products;

        return (
            <div>
                <dl>
                    {products.map(item => (
                        <ListItem item={item} key={item.name} />
                    ))}
                </dl>
            </div>
        )
    }

}

class NewClass extends Component {
    render() {
        return (
            <Glossary products={PRODUCTS} />
        )
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

export default NewClass;