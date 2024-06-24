import React, { useState, useEffect } from "react"
import "./homepage.css"
import axios from "axios"

const Homepage = ({setLoginUser}) => {

  const d = new Date().toLocaleDateString();
  const t = new Date().toLocaleTimeString();

  var apiUrl="http://localhost:9002"

    const[post,setPost] = useState([])

    const fetchPosts = async () => {
      const res = await axios.get(`${apiUrl}/list`);
      setPost(res.data);
    };

    useEffect(() => {
        fetchPosts();
      }, []);

    return (
        <>
            <div style={{backgroundColor:'black'}}>
            <h1 style={{color:'Highlight', textAlign:'center', fontWeight:'bold', fontFamily:'monospace', backgroundColor:'black', color:'white'}}>Welcome To the Homepage</h1>
           
            <h2 style={{backgroundColor:'yellowgreen'}}>Today's date is:- <span style={{'color':'white','fontWeight':'bold'}}>{d} <br></br>{t}</span> </h2>
            </div>
            <br></br>
            <div className="homepage" style={{ alignItems:'center'}}>
       <center><table className='table table-bordered  p-5'   style={{textAlign:'center', border:'3px ridge black'}}>
              <tr>
                <th style={{backgroundColor:'orange', color:'white'}}>Name</th>
                <th>Email</th>
                <th style={{backgroundColor:'green', color:'white'}}>Password</th>
              </tr>

              {
                   post.map((e)=>
                    {
                      return(
                        <>
                         <tr>
                          <td style={{backgroundColor:'orange', color:'white'}}>{e.name}</td>
                          <td>{e.email}</td>
                          <td style={{backgroundColor:'green', color:'white'}}>{e.password}</td>
                         </tr>
                         </>
                      )
                    })


              }
              
            </table></center>

            <center><button className="btn btn-success"  onClick={() => setLoginUser({})} >Logout</button></center>
            </div>
      </>
    )
}

export default Homepage