import React from 'react';
import './App.css';
import { createClient, configureChains, chain,WagmiConfig } from 'wagmi'
import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets, lightTheme,
} from '@rainbow-me/rainbowkit';
import { publicProvider } from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

const {chains, provider} = configureChains([chain.mainnet, chain.polygon], [publicProvider()]);

const {connectors} =getDefaultWallets({
    appName:"BCW frontend",
    chains,
});

const wagmiClient = createClient({
    connectors,
    provider,
})

// const bwcTheme = merge(lightTheme(), {
//     colors: {
//         accentColor: '#F4FEFE',
//         accentColorForeground: '#2D84EB',
//         actionButtonBorder:'solid',
//     },
//     fonts: {
//         body: 'Inter',
//     },
//     shadows: {
//         connectButton: '2px',
//         dialog: '...',
//         profileDetailsAction: '...',
//     },
//    
// } as Theme);


function App() {
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}
                                theme={lightTheme({
                                    accentColor: '#F4FEFE',
                                    accentColorForeground: '#2D84EB',
                                    borderRadius: 'large',
                                    fontStack: 'rounded',
                                    overlayBlur: 'large',
                                })}>
                <ConnectButton showBalance={true} chainStatus={"name"}  accountStatus={"address"} />
            </RainbowKitProvider>

        </WagmiConfig>
    )
}
export default App;


