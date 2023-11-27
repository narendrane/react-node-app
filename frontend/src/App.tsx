import React, { useState, useEffect } from 'react'; 
import axios from "axios"; 
import Register from './Register'
import './App.css'; 
import { RenderClick } from './RenderClick';
import { CounterContext } from './CounterContext'
import Arithmetic from './Arithmetic';
import {Counter} from './Counter'

const App = () => { 
	const [data, setData] = useState<any>([]); 
  const [users, setUsers] = useState<any>(); 
/* 	useEffect(() => { 
		axios.get('http://localhost:5000/api/products').then( 
			response => { 
				setData(response.data); 
			} 
		).catch(error => { 
			console.error(error); 
		}) 
	}, []) 
	useEffect(() => { 
		axios.get('http://localhost:5000/api/users').then( 
			response => { 
				setUsers(response.data); 
			} 
		).catch(error => { 
			console.error(error); 
		}) 
	}, [])  */
	return ( 
		<div className="App"> 
    <Arithmetic/>
	<Counter/>
{/*     <RenderClick />
    <CounterContext />
			{ 
				<div className='products'> 
					{data?.map((data: any) => { 
						return ( 
							<div key={data?.id}> 
								<img className='img'
									src={data.image} 
									alt="img" /> 
								<h1>{data.name}</h1> 
								<p>{data.description}</p> 
							</div> 
						); 
					}) 
					} 
				</div>        
			} 
      {
        				<div className='users'> 
                {users?.map((data: any) => { 
                  return ( 
                    <div key={data.id}> 
                      <h1>{data.name}</h1> 
                      <p>{data.email}</p> 
                      <p>{data.date}</p>
                    </div> 
                  ); 
                }) 
                } 
              </div> 
      }
      
      <Register/> */}
		</div> 
	); 
} 
export default App;
