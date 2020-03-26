import React from 'react'
import SportsList from './SportsList'

class Sport extends React.Component{
    constructor(){
        super()
        this.state = {
            loading : false,
            login : "monlogin",
            sport : {}

        }
    }

      componentDidMount(){
          this.setState({loading : true})
          const log = this.state.login
          fetch("/api/users/user/'"+log+"'")
          .then(response => response.json())
          .then(data => 
            this.setState({
                loading : false,
                sport : data
            }))
      }

    render(){
              const user = this.state.sport.email
    return(
      <div>
      {user}
      </div>
        )
    }

}

export default Sport