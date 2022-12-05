import * as React from 'react';
import { WagmiConfig, createClient, configureChains, chain } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import App from './App';
import ReactDOM from 'react-dom';

const { chains, provider, webSocketProvider } = configureChains(
    [chain.mainnet, chain.polygon],
    [publicProvider()],
);

//set up connectors
//const connectors = new MetaMaskConnector(chains);

// Set up client
const client = createClient({
    autoConnect: false,
    connectors: [
        new MetaMaskConnector({ chains }),
        new InjectedConnector({ chains }),
    ],
    provider,
    webSocketProvider,
});

ReactDOM.render(
    <React.StrictMode>
        <WagmiConfig client={client}>
            <App />
        </WagmiConfig>
    </React.StrictMode>,
    document.getElementById('root'),
);
