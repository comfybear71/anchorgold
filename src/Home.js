import React, {useContext} from 'react';
import './Home.css'
import AnchorEarnConnect from './AnchorEarnConnect'
import Deposit from './Deposit'
import Withdraw from './Withdraw'

const Home = () => {

    // const [value] = useContext(UserContext);

    return (
        <div>
            <h1>Info:</h1>
            <AnchorEarnConnect />
            <Deposit />
            <Withdraw />
        </div>
    )
}

export default Home;