import React from 'react';
import { chain, connect, InjectedConnector, getAccount,fetchToken, getNetwork } from '@wagmi/core';


function App() {
    
    connect({
        connector: new InjectedConnector(),
    });
    const account = getAccount()
    // const token = await fetchToken({
    //     address: '0xc18360217d8f7ab5e7c516566761ea12ce7f9d72',
    // })
    const { chain, chains } = getNetwork()
    
    return (
        <div className="container">
            <>
                <button className="address-button" type="submit">
                    <b>{"account"}</b>
                </button>
            </>

            <button
                className="connect-button"
                type="button"
                onClick={() => connect}
            >
                <b>Connect wallet</b>
                <img
                    className="metamask-logo"
                    src="https://cdn3.emoji.gg/emojis/1385-metamask.png"
                    alt="metamask"
                />
            </button>
        </div>
    );
};

export default App;
