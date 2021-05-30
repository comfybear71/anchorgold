import React, {useState, useEffect, useContext} from 'react'
import { AnchorEarn, CHAINS, NETWORKS, DENOMS } from '@anchor-protocol/anchor-earn';
import { UserContext } from './UserContext';
import { InfoContext } from './InfoContext';

const AnchorEarnConnect = () => {
    const [value] = useContext(UserContext);
    const [info, setInfo] = useContext(InfoContext);

    useEffect(() => {
        if(value != null){
            const anchorEarn = new AnchorEarn({
                name: "testnet",
                chain: CHAINS.TERRA,
                network: NETWORKS.TEQUILA_0004,
                address: value
            });

            async function fetchData() {
                const balanceInfo = await anchorEarn.balance({ currencies: [ DENOMS.UST ] });
                const market = await anchorEarn.market({ currencies: [ DENOMS.UST ] });

                // console.log(balanceInfo)
                // console.log(market)
                
                setInfo({
                    balance: balanceInfo.balances[0].account_balance,
                    deposit: balanceInfo.balances[0].deposit_balance,
                    height: balanceInfo.height,
                    liquidity: market.markets[0].liquidity,
                    APY: market.markets[0].APY
                
                })
            }
            
            // async function fetchAUSTBalance() {
            //     const aBalanceInfo = await anchorEarn.balance({ currencies: [ DENOMS.AUST ] });
            //     console.log(aBalanceInfo)
            // }
            
            fetchData(); 
            // fetchAUSTBalance();
        }
    })

    return (
        <div>
            <h1>Balance: {info.balance}</h1>
            <h1>Deposit: {info.deposit}</h1>
            <h1>Height: {info.height}</h1>
            <h1>Liquidity: {info.liquidity}</h1>
            <h1>APY: {info.APY}</h1>
            <h1>Interest Earned: {info.deposit - 19000}</h1>
        </div>
    )

}

export default AnchorEarnConnect;