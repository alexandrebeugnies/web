import React,{useState} from 'react'

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);
    
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

    return (
    <>
        <form action="" onSubmit={submitForm}>
        <div>
            
            <input type="text" name="username" id="username" autoComplete="off" value={username} placeholder="Username" onChange={(e)=> setUsername(e.target.value)}/>
        </div>
        <div>
            
            <input type="password" name="password" id="password" autoComplete="off" value={password} placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
        </div>


        <button type="submit">Connection</button>
        </form>

        <div>
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
