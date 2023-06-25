

import Cookies from 'js-cookie'

import './index.css'

const Home = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div>
        <button onClick={onClickLogout}>LogOut</button>
    </div>
  )
}
   
export default Home
