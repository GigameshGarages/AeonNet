## Overview
AeonNet is a Trading Time Value Tokenisation System deployed on Aeternity Application Architecture with Smart Contracts written on Sophia, a functonal programming language. Time locks represent the trading activity tokens. AeonNet aims to quantify the quality of trading activity. It tokenises the flow of monery in the financial assets. Risk in every asset is quantified based on the ratio between the value of an asset and the number of traders trading on that asset on a particular time. 

## Components

- Primary NFT representing the price of the real financial asset that gets tokenized as NFT
- Secondary NFT representing the risk associated with the financial asset
- Hash Time Locks representing the immutable relationship between asset and its risk
- Hash Time Lock is initiated when the derivative is traded on the market
- Hash Time Lock is created dependent on the value at which the derivative is traded
- Hash Time Lock is released when the risk token auction is completed
- Risk associated with the derivative is opposite of the time taken for derivative to reach an equillibrium 

## Tools
- Aeternity Node
- Aeternity Smart Contracts
- Aeternity SDK
- NodeJS
- NPM

## References on Time Locks
- Hashed Time Locked Contracts > https://www.investopedia.com/terms/h/hashed-timelock-contract.asp
- Kaliedo Way - https://docs.kaleido.io/kaleido-services/tokens/anatomy-of-an-htlc
- ERC20 TimeLocking > https://medium.com/@parishilanrayamajhi/erc20-time-locking-explained-db7fa6fd0166
- Timelocking and Vesting > https://ethereum.stackexchange.com/questions/62126/time-lock-and-vesting-smart-contract
