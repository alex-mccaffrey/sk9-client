import React from 'react'
import { Route, Redirect } from 'react-router-dom'
//import TokenService from '../../services/token-service'
import ApiContext from "./ApiContext"

export default function PrivateRoute({ component, ...props }) {
  const Component = component
const context = useContext(ApiContext);
  return (
    <Route
      {...props}
      render={componentProps => (
        this.context
          ? <Component {...componentProps} />
          : <Redirect
              to={{
                pathname: '/landing',
                state: { from: componentProps.location }
              }}
            />
      )}
    />
  )
}