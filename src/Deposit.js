import React, {useState, useContext} from 'react'
import {AnchorEarn, CHAINS, NETWORKS, DENOMS} from '@anchor-protocol/anchor-earn';
import { UserContext } from './UserContext'


const Deposit = () => {

    
    const [value] = useContext(UserContext);
    const [amount, setAmount] = useState("0.00")
    const [status, setStatus] = useState(null)
    const [txFee, setTxFee] = useState(null)
    const [wallet_address, setWallet_address] = useState(null)

    const addDeposit = () => {

        if(value != null){
            const anchorEarn = new AnchorEarn({
                chain: CHAINS.TERRA,
                network: NETWORKS.TEQUILA_0004,
                address: value,
                mnemonic: 'road omit kangaroo region ketchup woman lawn dolphin drip erupt defense nurse orange timber write industry like boost regular intact ten artefact buyer sting'
            });

            async function depositData() {
                try { 
                    const deposit = await anchorEarn.deposit({
                        amount: amount, 
                        currency: DENOMS.UST,
                        log: (data) => {
                            console.log("THIS IS DATA" + data)
                        }
                    });
                    console.log(deposit)
                    setStatus(deposit.status)
                    setAmount(0.00)
                
                } catch (e) {
                    alert(e)
                } finally {
                    console.log('Cleaned Up')
                }
            
            }
            depositData(); 
        }
    }

    const resetOnFocus = (e) => {
        e.target.value = '';
    }

    const resetOnBlur = (e) => {
        e.target.value = '0.00';
    }

    return (
        <div>
        
            <input 
                value={amount} 
                onChange={e => setAmount(e.target.value)} 
                onFocus={(e) => resetOnFocus(e)}
                onBlur={(e) => resetOnBlur(e)}
                ></input>
            
            <button onClick={addDeposit} >
                Deposit
            </button>
            <button>
                AXIOS
            </button>
            <br />
            <div>{" Status: " + status} {"...."} {" Fee: " + txFee}</div>
            
        </div>
    )
}
export default Deposit;
