import React, { useContext } from 'react'
import { Route, Switch } from 'react-router'
import Login from './auth/Login'
import Benefit from './benefit/Benefit'
import ListUser from './ListUser/ListUser'
import Dirarect from './RegisterDirarect/Dirarect'
import {GlobalState} from '../../GlobalState'
import NotFound from './ultils/NotFound/NotFound'

function Pages() {
    const state = useContext(GlobalState)
    const [isLooged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Benefit} />
                <Route path="/register" exact component={Dirarect} />
                <Route path="/login" exact component={Login} />
                <Route path="/all_infor" exact component={isAdmin ? ListUser : NotFound} />
            </Switch>
        </div>
    )
}

export default Pages
