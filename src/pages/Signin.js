import React,{useState ,useEffect} from 'react'
import  Axios  from 'axios';


const Signin = () => {
    const [response,setResponse] = useState("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);
    const [loginStatus, setLoginStatus] = useState(false);

    Axios.defaults.withCredentials = true;

    const signin = () => {
        
        Axios.post("http://localhost:8080/signin",
          {
            username: username,
            password: password,
          }).then((response) => {
              
            if (!response.data.auth) {
                setLoginStatus(false);
            }else{
                
                setLoginStatus(true);
                localStorage.setItem("token", response.data.token) // le token est compose du backend et du mot bearer , voila comment verifier dans le back-end "Bearer " + token
                
            }
          });
      };
    
      const userAuthenticated = ()=>{
          Axios.get("http://localhost:8080/isUserAuth",{headers:{
                "x-access-token": localStorage.getItem("token"),
          },
        }).then((response)=>{
              console.log(response);
          });
      };

    const submitForm = (e) =>{
        e.preventDefault();
        if (username && password) {
            const newEntry = {id: new Date().getTime().toString(), username , password};

            setAllEntry([...allEntry, newEntry]);
    
            setUsername("");
            setPassword("");
        } else{
            alert("please fill the fields");
        }
       


    }
   /* useEffect(()=>{
        fetch("http://localhost:8080/signin")
        .then(
            (r)=>{
               r.json().then(
                   data=>console.log(data)
               )
            }
        )

    },[])*/
 

    return (
    <>
        <form action="" onSubmit={submitForm}>
        <div>
            
            <input type="text" name="username" id="username" autoComplete="off" value={username} placeholder="Username" onChange={(e)=> setUsername(e.target.value)}/>
        </div>
        <div>
            
            <input type="password" name="password" id="password" autoComplete="off" value={password} placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
        </div>


        <button type="submit" onClick={signin}>Connection</button>
        
        </form>

        <div>
        {loginStatus && (
                <button onClick ={userAuthenticated}>Check if Authenticated</button>
            )}
            {
                allEntry.map((curElem)=>{
                    const {id, username, password} = curElem;

                    return(
                        
                        <div className="showDataStyles" key={id}>
                            <p>{username}</p>
                            <p>{password}</p>
                            
                        </div>
                        
                    )
                })
            }
            
        </div>
    </>
    )
   
}

export default Signin
