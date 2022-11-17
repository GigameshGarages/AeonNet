# AeonNet
AeonNet is a Trading Time Value Tokenisation System deployed on Aeternity Application Architecture with Smart Contracts written on Sophia, a functonal programming language. It is designed as a decentralised application where traders can sell the tokens that they have curated over the time. All time locks are aggregated using Digital Signatures and Hash Time Locked Contract (HTLC) for verification purpose.  

## Summary
-  Trading Time Tokens Powered by Aeternity Architecture based Hash Time Locked Contracts (HTLC). 

## Context
- In the traditional finance, derivatives are positions on stocks and bonds that a trader does not own. 
- If a trader seeks to profit from speculating on the price fluctuations of a stock that they do not own, they can do so through derivatives markets.
- A financial derivative is a contract whose value depends upon the value of some underlying asset, such as a stock, bonds etc. 
- The contract specifies the rights and obligations between the buyer and the seller to receive or deliver future cash flows based on some future event.

## Components

- Primary NFT representing the original financial asset that gets tokenized as NFT
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

## What is next
- Options Premium stored in the Multi Signature Wallet

## References on Time Locks
- Hashed Time Locked Contracts > https://www.investopedia.com/terms/h/hashed-timelock-contract.asp
- Kaliedo Way - https://docs.kaleido.io/kaleido-services/tokens/anatomy-of-an-htlc
- ERC20 TimeLocking > https://medium.com/@parishilanrayamajhi/erc20-time-locking-explained-db7fa6fd0166
- Timelocking and Vesting > https://ethereum.stackexchange.com/questions/62126/time-lock-and-vesting-smart-contract

## References on Options Trading
- https://arxiv.org/abs/2102.10099
