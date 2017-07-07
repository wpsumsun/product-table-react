import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const products=[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

class ProductCategoryRow extends Component{
    render(){
        return(
            <tr><td colSpan="2">{this.props.category}</td></tr>
        )
    }
}
class ProductRow extends  Component{

    render(){
        var name=this.props.product.stocked ?
             this.props.product.name :
             <span  style={{color:'red'}}>{this.props.product.name}</span>;
        return(
            <tr><td>{name}</td><td>{this.props.product.price}</td></tr>
        )
    }
}

class ProductTable extends Component{
    render(){
        var rows=[];
        var lastCategory=null;
        this.props.products.map((product)=>{
            if(product.category!==lastCategory){
                rows.push(<ProductCategoryRow category={product.category} />)
            }
            rows.push(<ProductRow product={product} />)
            lastCategory=product.category
        })

        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
        
        
    }
}

class SearchBar extends Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="search..."/>
                <div>
                    <input type="checkbox" />{'  '}Only show products in stock
                </div>
            </form>    
        )
    }
}

class FilterableProductTable extends Component{
    render(){
        return(
            <div>
                <SearchBar />
                <ProductTable products={this.props.products}/>
            </div>
        )
    }
}

ReactDOM.render(<FilterableProductTable products={products}/>, document.getElementById('root'));
registerServiceWorker();
