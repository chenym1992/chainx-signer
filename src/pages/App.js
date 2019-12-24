import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Redirect, Route, Switch } from 'react-router'
import Home from './Home'
import Header from './Header'
import CreateAccount from './CreateAccount'
import ImportAccount from './ImportAccount'
import RequestSign from './RequestSign'
import ShowPrivateKey from './ShowPrivateKey/index'
import EnterPassword from './EnterPassword'
import NodeAction from './NodeAction'
import { useRedux, setChainx } from '../shared'
import { useDispatch } from 'react-redux'
import { getCurrentChainxNode } from '../messaging'
import { getSettings } from '../messaging/index'
import spinner from '../assets/loading.gif'
import './index.scss'
import { useSelector } from 'react-redux'
import { setInitLoading } from '../store/reducers/statusSlice'

import {
  handleApiResponse,
  handlePairedResponse,
  setService
} from '../services/socketService'

window.wallet.socketResponse = data => {
  if (typeof data === 'string') data = JSON.parse(data)
  switch (data.type) {
    case 'api':
      return handleApiResponse(data.request, data.id)
    case 'pair':
      return handlePairedResponse(data.request, data.id)
    default:
      return
  }
}

setService(window.sockets)

window.sockets.initialize().then(() => console.log('sockets initialized'))

export default function App() {
  let redirectUrl = '/'

  const dispatch = useDispatch()
  const [, setIsTestNet] = useRedux('isTestNet', false)
  const loading = useSelector(state => state.status.loading)
  const initLoading = useSelector(state => state.status.initLoading)
  const homeLoading = useSelector(state => state.status.homeLoading)
  useEffect(() => {
    getSetting()
    // eslint-disable-next-line
  }, [])

  const getSetting = async () => {
    const settings = { isTestNet: true }
    setIsTestNet({ isTestNet: settings.isTestNet })
    const node = {
      name: 'testnet.w1.org.cn',
      url: 'wss://testnet.w1.chainx.org.cn/ws'
    }
    await setChainx(node.url)
    dispatch(setInitLoading(false))
  }

  return (
    <Router>
      <React.Fragment>
        <Header props />
        {(loading || initLoading || homeLoading) && (
          <div className="spinner">
            <img src={spinner} alt="spinner" />
          </div>
        )}
        {!initLoading && (
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/createAccount" component={CreateAccount} />
              <Route path="/importAccount" component={ImportAccount} />
              <Route path="/requestSign/:id?" component={RequestSign} />
              <Route path="/showPrivateKey" component={ShowPrivateKey} />
              <Route path="/enterPassword" component={EnterPassword} />
              <Route path="/addNode" component={NodeAction} />
              <Redirect to={redirectUrl} />
            </Switch>
          </div>
        )}
      </React.Fragment>
    </Router>
  )
}
