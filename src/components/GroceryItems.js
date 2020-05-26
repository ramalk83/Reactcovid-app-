

import React, { Component } from 'react'
import {connect} from 'react-redux'



 class GroceryItems extends Component {
  render() {
    return (
      <div id="grocery-items">
        <table border="1">
          <tbody>
          <tr>
            <th>Item Price</th>
            <th>Item Price</th>
            <th></th>
          </tr>
          {this.props.items.map((item,index)=>{
           return <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              <button onClick={()=>this.props.addtoCart(item)}> Add to cart </button>
            </td>
            </tr>
          })}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
  items:state.available
  }
}

function mapDispatchToProps(dispatch){
  return{
  addtoCart:(item)=>{
    dispatch({
      type:'ADD_TO_CART',
      item
    })
  }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GroceryItems)