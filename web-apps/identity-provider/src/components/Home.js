import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Wallet, MemoryAccount } from '@aeternity/aepp-sdk'

export class Home extends Component {

    confirmDialog(method, params, { id }) {
        return Promise.resolve(window.confirm(`User ${ id } wants to run ${ method } ${ params }`))
    }

    isRunningInFrame = () => window.parent !== window

    async created() {

        const { 
            url, 
            internalUrl, 
            compilerUrl, 
            publicKey, 
            privateKey, 
            aeppUrl,
            setHeight,
            setBalance
        } = this.props;

        this.client = await Wallet({
            url: url,
            internalUrl: internalUrl,
            compilerUrl: compilerUrl,
            accounts: [MemoryAccount({ keypair: { secretKey: privateKey, publicKey: publicKey } })],
            address: publicKey,
            onTx: this.confirmDialog,
            onChain: this.confirmDialog,
            onAccount: this.confirmDialog,
            onContract: this.confirmDialog
        })

        if (!this.isRunningInFrame) this.$refs.aepp.src = aeppUrl
        else window.parent.postMessage({ jsonrpc: '2.0', method: 'ready' }, '*')

        setHeight(await this.client.height());
        try {
            setBalance(await this.client.balance(publicKey))
        } catch (error) {
            console.log(error);
            setBalance(0)
        }
    }

    componentDidMount() {
        this.created().then(r => {
            // console.log(r)
            // console.log(this.client)
        }).catch(e => {
            console.log(e)
        })
    }



    render() {

        const { 
            publicKey,
            aeppUrl,
            height,
            balance
        } = this.props;

        return (
            <div key="1">
                {this.isRunningInFrame ? (
                                <div>
                                    <div style={ walletDetails }>
                                        <h1>Wallet Aepp</h1>
                    
                                        <div className="border">
                                            <div>
                                                <div>
                                                    <span style={ walletDetailsLabel }>Public Key:</span> {publicKey}
                                                </div>
                                            </div>
                                            
                                            { height > 0 ? (
                                                <div>
                                                    <div>
                                                        <div className="p-2 w-1/4">
                                                            <span style={ walletDetailsLabel }>Height:</span> { height }
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="p-2 w-1/4">
                                                            <span style={ walletDetailsLabel }>Balance:</span> { balance }
                                                        </div>
                                                    </div>    
                                                </div>
                                            ) : '' }
                                            
                                        </div>
                                    </div>
                    
                                    <iframe style={ iframe } title="identity" v-show={aeppUrl} ref="aepp" src="about:blank" frameBorder="1"></iframe>
                                </div>
                ) : '' }

            </div>
        )
    }
}

// styles
const walletDetails = {
    "border": "1px solid #F7286E",
    "borderRadius": "10px",
    "padding": "20px 20px 40px 20px",
    "background": "#311b58",
    "color": "white",
    "fontFamily": "Avenir, Helvetica, Arial, sans-serif"
}

const walletDetailsLabel = {
    "fontWeight": "bold",
    "color": "#F7286E"
}

const iframe = {
    "marginTop": "20px",
    "width": "100%",
    "height": "100vh"
}

const mapStateToPros = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        setHeight: (height) => {
            dispatch({ type: "SET_HEIGHT", height });
        },
        setBalance: (balance) => {
            dispatch({ type: "SET_BALANCE", balance });
        }
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(Home)
