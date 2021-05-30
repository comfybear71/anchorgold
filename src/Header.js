import React, {useState, useContext} from "react";
import { Extension } from '@terra-money/terra.js';
import { UserContext } from './UserContext'

const Header = () => {

    const [value, setValue] = useContext(UserContext);

    const [wallet, setWallet] = useState();
    const ext = new Extension();

    const connect = () => {
        ext.connect();
        ext.on("onConnect", setWallet);
    }

    return (
        <div className="header">
            <h1>Anchor Gold</h1>
            {/* <div>{value}</div> */}
            
                <button  onClick={wallet ? undefined : connect}>
                    {!wallet && "Connect Wallet"}
                    {wallet?.address}
                    {setValue(wallet?.address)}   
                </button>
                
        </div>
    )

}

export default Header; 

