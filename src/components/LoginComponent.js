import React from 'react'

function LoginComponent(props){
   
        return(
            <div>
           <form onSubmit={props.handleChangeCheckNameInDataBase}>
                <input
                    type="text"
                    value={props.data.name}
                    name="name"
                    placeholder="Name"
                    onChange={props.handleChange}
                />
                <input type="submit" value="Check login"></input>
                <p>{props.data.isInTheDB ? "Hello "+props.data.user.firstName : "Please enter a valid logging"}</p>
                <p>{props.data.loading ? "loading..." : ""}</p>
            </form>
            <form>
                <input
                    type="text"
                    value={props.data.password}
                    name="password" 
                    placeholder="password"
                    onChange={props.handleChange}
                />
                <br />
           </form>
           <div>
           <p>{props.isLogged ? "online" : "offline"}</p>
           <button onClick={props.handleClick}>connect</button>
           </div>
           </div>
        )
    }

export default LoginComponent
