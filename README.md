# AeonNet
AeonNet is a Trading Time Value Tokenisation System deployed on Aeternity Application Architecture with Smart Contracts written on Sophia, a functonal programming language. It is designed as a decentralised application where traders can sell the tokens that they have curated over the time. All time locks are aggregated using Digital Signatures and Hash Time Locked Contract (HTLC) for verification purpose.  

## Summary
- Decentralised Trading Time Tokens Powered by Aeternity Architecture based Hash Time Locked Contracts (HTLC). 

## Concept
- A financial derivative is a contract whose value depends upon the value of some underlying asset, such as a stock. 
- The contract specifies the rights and obligations between the buyer and the seller to receive or deliver future cash flows based on some future event.
- One of the most popular types of derivative is option. 
- Option is a contract between two parties on trading an asset at a future date. 
- There are two basic types of option: call and put. 
- A call option gives the holder the right (not the obligation) to buy an underlying asset for a specified strike price by a certain expiration date. 
- A put option gives the holder the right (not the obligation) to sell an underlying asset for a specified strike price by a certain expiration date.
- Options trading is the trading of instruments that gives the right to buy or sell a specific security on a specific date at a specific price.
- Time value refers to the portion of an option's premium that is attributable to the amount of time remaining until the expiration of the option contract. 
- The premium of any option consists of two components: its intrinsic value and its time value.
- Time Value is also considered as an extrinsic or instrumental value in the options trading context. 
- It is the premium a rational investor would pay over its current exercise value (intrinsic value).
- It is based on the probability that it will increase in value before expiry. 
- This value is always greater than zero in a fair market, thus an option is always worth more than its current exercise value. 
- Time value decays to zero at expiration, with a rule that it will lose ​1⁄3 of its value during the first half of its life and ​2⁄3 in the second half.

## Components
- Hash Time Locks implemented through the Time Stamping Transactions in a Blockchain
- Time Value Token created as a Non Fungible Token in the Aeternity Token Standard
- Time Value Aggregation using Time Lock Properties such as Sequence, Route and Order

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
- https://www.ally.com/do-it-right/investing/trading-options-for-beginners/
