import React from "react";
import ReactDOM from "react-dom/client";
import {createServer, Model} from "miragejs";
import { App } from "./App";

createServer({

  models:{
    transaction: Model, 
  },


  seeds(server){
    server.db.loadData({
      transactions:[
        {id: 1,
          title: 'Work incoming',
          type: 'deposit',
          category: 'development',
          amount: 5000,
          createdAt: new Date()
        },
        {id: 2,
          title: 'House Fees',
          type: 'withdraw',
          category: 'house',
          amount: 2000,
          createdAt: new Date('2022-6-1')
        }
      ]
    })
  },
  routes(){
    this.namespace = "api";
    this.get('/transactions', ()=>{
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, req)=>{
      const data = JSON.parse(req.requestBody)

      return schema.create('transaction', data);
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
