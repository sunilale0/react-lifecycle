import React, {Component} from 'react';
import './App.css';
// import List from './List';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded:false
    }
  }
  

  componentWillMount(){
    console.log('[App.js] componentWillMount()')
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(res=>{
      return res.json();
    }).then(data =>{
      console.log(data);
      this.setState({
        isLoaded:true,
        items:data
      })
    })
    console.log('[App.js] componentDidMount()')
  }


  getList = () =>{
    // method to make api call
  }


  render(){
    var {isLoaded, items} = this.state;
    if(!isLoaded){
        return <div>
          Loading...
        </div>    
    }else{
    return(
      // <div>
      //   Just something
      //   <List name = {this.state.items}/>
      // </div>
      // DISCONTINUED FOR NOW

      <div className = 'App'> 
       <h1>People's Details</h1>
          <div className = 'Names'>
         
              <ul>
                {
                  items.map(el=>{
                    return (
                      <li key ={el.id}>
                     <strong>Name:</strong>  {el.name} | <strong>UserName:</strong> {el.username} | {' '} <a href={`https://${el.website}`}>
                        Website
                      </a>
                      </li>
                    )
                  })
                }
              </ul>
          </div>
      </div>

      
    )
    }
  }



}

export default App;
