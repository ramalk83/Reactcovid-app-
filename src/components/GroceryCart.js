

import React, { Component } from 'react'

import {connect} from 'react-redux'

class GroceryCart extends Component {

 total(){
        return this.props.items.reduce((total,item)=>{
            return total+item.price
        },0)
    }
  render() {
      if (this.props.items.length === 0){
          return <div>
              <p>cart is empty</p>
          </div>
      }
    return (
      <div id="grocery-cart">
        <table border="1">
          <tbody>
          <tr>
            <th>Item Name</th>
            <th>Item Price</th>
          </tr>
          {this.props.items.map((item,index)=>{
           return <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
                 <td>
                 <button onClick={()=>this.props.removeCart(item)}> remove</button>
                  </td>
            </tr>
          })
          }
          </tbody>
        </table>
        <p>Total : ${this.total()}</p>
      </div>
    )
  }
}

function mapStateToProps(state){
    return{
   items:state.cart
    }
  }
  
  function mapDispatchToProps(dispatch){
    return{
    removeCart:(index)=>{
      dispatch({
        type:'REMOVE_CART',
        index
      })
    }
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(GroceryCart)