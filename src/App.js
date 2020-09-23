import React from 'react';
import { Switch, Route, useParams, withRouter} from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import Menu from './components/Menu';
import Home from './components/Home';
import Blog from './components/Blog';
import User from './components/User';
import Authform from './components/Auth/AuthForm';
import AuthContext from './contexts/AuthContext';
import jwt from 'jsonwebtoken';
import CreateBlog from './components/Blog/CreateBlog';
import City from './components/City';
import Me from './components/Me';
import CountryList from './components/CountryList';
import Country from './components/Country';
import UpdateBlog from './components/Blog/UpdateBlog';


const checkToken = () => {
  const token = localStorage.getItem('token');
  if(token){
    let res = false;
    jwt.verify(token,'ZhvFBXkydeydyxi3CuR6101UAP1uNgCDYPjzD1UHj4NcYr4RlOsetTEiH2t0Sr4A', function(err, decoded) {
      if(err){
        localStorage.removeItem('token');
      }else res = true;
    })
    return res
  }
}

const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (checkToken()) {
      next();
    }
    next.redirect('/login');
  }next();
};

function App({history}) {
  const [loggedIn, setLoggedIn] = React.useState(checkToken);
  const guardAuth = () =>{
    history.push('/login')
  }
  const toHome = () =>{
    history.push('/')
  }
  return (
      <GuardProvider guards={[requireLogin]} >
        <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
            <Menu guardAuth={guardAuth}/>
            <div className="container mt-4">
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/register' render={props => <Authform {...props} role='register'/>}/>
                <Route exact path='/login' render={props => <Authform {...props} role='login'/>}/>

                <Route exact path='/country' component={CountryList}/>
                <Route exact path='/country/:id' children={<ParamIdForComponent component={Country}/>}/>
                <Route exact path='/city/:id' children={<ParamIdForComponent component={City}/>}/>
                <Route exact path='/user/:id' children={<ParamIdForComponent component={User}/>}/>
                <Route exact path='/blog/:id' children={<ParamIdForComponent component={Blog}/>}/>
                
                
                <GuardedRoute exact path='/me' component={Me} meta={{auth: true}}/>
                <GuardedRoute exact path='/update/blog/:id' children={<ParamIdForComponent component={UpdateBlog} data={{guardAuth, toHome}}/>} meta={{auth: true}}/>
                <GuardedRoute exact path='/create/blog/:id' children={<ParamIdForComponent component={CreateBlog} data={{guardAuth, toHome}}/>} meta={{auth: true}}/>
              </Switch>
            </div>
          </AuthContext.Provider>
        </GuardProvider>
);
}

function ParamIdForComponent({component: Component, data}){
  return <Component id={useParams().id} {...data}/>
}



export default withRouter(App);
