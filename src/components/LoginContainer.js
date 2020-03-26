import React from 'react'
import LoginComponent from './LoginComponent'
import { isTSEntityName } from '@babel/types'

class LoginContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            isLogged : false,
            isInTheDB : false,
            loading : false,
            name : "",
            password : "",
            user : {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeCheckNameInDataBase = this.handleChangeCheckNameInDataBase.bind(this)
    }

    handleChange(event){
        this.setState({
            name : event.target.value
        })
    }

    handleChangeCheckNameInDataBase(event){
        
        this.setState({loading : true})
        const log = this.state.name
          fetch("/api/users/user/'"+log+"'")
          .then(response => response.json())
          .then(data => 
            this.setState({
                loading : false,
                isInTheDB : true,
                user : data
            }))
        console.log(this.state.user.firstName)
        event.preventDefault()
    }

    render(){
        return(
            <LoginComponent 
            handleChangeCheckNameInDataBase = {this.handleChangeCheckNameInDataBase}
            handleChange = {this.handleChange}
            data = {this.state}
            />

        )
    }
}

export default LoginContainer