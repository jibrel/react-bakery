import React, { Component } from 'react';
import './List.css';
import Order from './Order';
import ReactList from 'react-list';

class List extends Component {
  state = {
    orders: [
      {
        key: 1,
        name: "Haley Cortez",
        order: "hey",
        status: "ready",
        day: "Wed 11",
        time: "13:00 PM",
        location: "Store",
        items: [
          {
            count:10,
            item: "Blueberry Cheese Cake"
          },{
            count:4,
            item: "Vanilla Blueberry Cake"
          },{
            count:6,
            item: "Vanilla Pastry"
          }
        ]
      },
      {
        key: 2,
        name: "Elaine LeBlanc",
        order: "hey",
        status: "ready",
        day: "Wed 11",
        time: "18:00 PM",
        location: "Bakery",
        items: [
          {
            count:10,
            item: "Blueberry Cheese Cake"
          },{
            count:4,
            item: "Vanilla Blueberry Cake"
          },{
            count:6,
            item: "Vanilla Pastry"
          }
        ]
      },
      {
        key: 3,
        name: "Jessica Carver",
        order: "hey",
        status: "new",
        day: "Thu 12",
        time: "13:00 PM",
        location: "Store",
        items: [
          {
            count:10,
            item: "Blueberry Cheese Cake"
          },{
            count:4,
            item: "Vanilla Blueberry Cake"
          },{
            count:6,
            item: "Vanilla Pastry"
          }
        ]
      },
      {
        key: 4,
        name: "Kerry Rich",
        order: "hey",
        status: "problem",
        day: "Thu 13",
        time: "10:00 AM",
        location: "Store",
        items: [
          {
            count:10,
            item: "Blueberry Cheese Cake"
          },{
            count:4,
            item: "Vanilla Blueberry Cake"
          },{
            count:6,
            item: "Vanilla Pastry"
          }
        ]
      },
      {
        key: 5,
        name: "Octavia Moore",
        order: "hey",
        status: "cancelled",
        day: "Fri 13",
        time: "14:00 PM",
        location: "Bakery",
        items: [
          {
            count:10,
            item: "Blueberry Cheese Cake"
          },{
            count:4,
            item: "Vanilla Blueberry Cake"
          },{
            count:6,
            item: "Vanilla Pastry"
          }
        ]
      },
      {
        key: 6,
        name: "Sylvia Blevins",
        order: "hey",
        status: "cancelled",
        day: "Fri 13",
        time: "14:00 PM",
        location: "Bakery",
        items: [
          {
            count:10,
            item: "Blueberry Cheese Cake"
          },{
            count:4,
            item: "Vanilla Blueberry Cake"
          },{
            count:6,
            item: "Vanilla Pastry"
          }
        ]
      },
      {
        key: 7,
        name: "Ferdinand Carver",
        order: "hey",
        status: "cancelled",
        day: "Fri 13",
        time: "14:00 PM",
        location: "Bakery",
        items: [
          {
            count:10,
            item: "Blueberry Cheese Cake"
          },{
            count:4,
            item: "Vanilla Blueberry Cake"
          },{
            count:6,
            item: "Vanilla Pastry"
          }
        ]
      },
      {
        key: 8,
        name: "Haley Lyons",
        order: "hey",
        status: "cancelled",
        day: "Fri 13",
        time: "14:00 PM",
        location: "Bakery",
        items: [
          {
            count:10,
            item: "Blueberry Cheese Cake"
          },{
            count:4,
            item: "Vanilla Blueberry Cake"
          },{
            count:6,
            item: "Vanilla Pastry"
          }
        ]
      },
      {
        key: 9,
        name: "Lael Maldonado",
        order: "hey",
        status: "cancelled",
        day: "Fri 13",
        time: "14:00 PM",
        location: "Bakery",
        items: [
          {
            count:10,
            item: "Blueberry Cheese Cake"
          },{
            count:4,
            item: "Vanilla Blueberry Cake"
          },{
            count:6,
            item: "Vanilla Pastry"
          }
        ]
      },
      {
        key: 10,
        name: "Skyler Patton",
        order: "hey",
        status: "cancelled",
        day: "Fri 13",
        time: "14:00 PM",
        location: "Bakery",
        items: [
          {
            count:10,
            item: "Blueberry Cheese Cake"
          },{
            count:4,
            item: "Vanilla Blueberry Cake"
          },{
            count:6,
            item: "Vanilla Pastry"
          }
        ]
      }]
  };
  renderItem(index, key) {
    return <Order key={key} onClick={() => this.onOrderClick(index)} order={this.state.orders[index]} />;
  }

  onOrderClick(index){
    console.log("Order " + index + " was clicked");
  }

  render() {
    return (
      <div className="list">
        <ReactList
            itemRenderer={this.renderItem.bind(this)}
            length={this.state.orders.length}
            type='uniform'
          />
      </div>
    );
  }
}

export default List;
