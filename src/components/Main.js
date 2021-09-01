import ReactTypingEffect from 'react-typing-effect';
import { buyNft } from '../store/interactions'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Identicon from 'identicon.js';
import Loading from './Loading'
import {
  contractSelector,
  metadataSelector,
  nftStateSelector,
  networkSelector
} from '../store/selectors'



class Main extends Component {
  render() {
    try{
      return (
        
        <div className="Main">
          <div className="container-fluid mt-5" style={{ color: "#d2691e", "backgroundColor": "#1D1D1D" }}>

          <br></br>
         <h1>⭐⭐⭐NFT TO THE MOON⭐⭐⭐</h1> 
         <h1>🚀🚀🚀</h1>
          <div>
            
            <ReactTypingEffect
              text={[
                "◽Welcome to the rinkeby test networks ",
                "◽Take a look around",
                "◽If any thing you like BUY it",
                "◽◽OWN EXCLUSIVE NFT'S◽◽",
                '◽Like! 👍 Rate!⭐⭐⭐⭐⭐◽',
                '◽◽All for fun and enjoy ❤️',
                '◽◽HIGH GRADE CRYPTO💮FLOWERS◽◽',
                "◽Breeded on the tron network",
                "◽List on opensea the NFT's you buy",
                "◽◽MORE! demand MORE! breeding◽◽",
                "◽◽powered by smart contracts◽◽"
              ]}
              speed='40'
              eraseSpeed='10'
              eraseDelay='2000'
              cursorRenderer={cursor => <h1>{cursor}</h1>}
              displayTextRenderer={(text, i) => {
                return (
                  <h3>
                    {text.split('').map((char, i) => {
                      const key = `${i}`;
                      return (
                        <span
                          key={key}
                          style={i%2 === 0 ? {} : {}}
                        >{char}</span>
                      );
                    })}
                  </h3>
                );
              }}
            />
            </div>
            <h4>Gardened by Aimcom</h4> 
            <h4>⭐⭐⭐</h4>
            <br></br>&nbsp;
            <img src={'https://ipfs.io/ipfs/QmQyxjoSDofoJX3AaxeXBZo7WhKTq1bVZf1gD96m3cD1hs?filename=CoverStory.jpeg'} style={{ width: '955px', height: '500px' }} alt="adam"/>
            <div className="row">
              <main role="main" className="col-lg-12 d-flex text-center">
                <div className="content mr-auto ml-auto">
                  <div className="row justify-content-around" style={{ width: '1000px', fontSize: '10px'}}>

                  {this.props.metadata.map((nft, key) => {
                    return(
                      <div className="p-3" key={key}>
                      {this.props.nftState[nft.id]
                        ? <a href={nft.image} target="_blank" rel="noopener noreferrer">
                            <img src={`data:image/png;base64,${nft.img}`} style={{ border: '1mm ridge #8B8B8B', width: '200px', height: '300px' }} alt="art"/>
                          </a>                          //<p style="background-color:#ffdbae;">Content here</p> background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),
                        : <a href={nft.image} target="_blank" rel="noopener noreferrer">
                            <img
                              src={`data:image/png;base64,${nft.img}`} style={{ border: '1mm ridge #8B4513', width: '200px', height: '300px' }} alt="art"
                            />
                          </a>
                      }
                        <p style={{backgroundImage:"#ffdbae;"}}></p>
                        <table style={{ width: '200px' }}>
                          <thead>
                            <tr>
                              <th className="text-center" style={{color: "#8B8B8B"}}>ID: </th>
                              <th style={{position:"left", color: "#8B4513"}}>{nft.id}</th>
                            </tr>
                            <tr>
                              <th className="text-center" style={{color: "#8B8B8B"}}>NAME: </th>
                              <th style={{color: "#FFFFFF"}}>{nft.name}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th className="text-left" style={{color: "#8B8B8B"}}>URI: </th>
                              <td>
                                <a href={nft.uri} target="_blank" rel="noopener noreferrer" style={{color: "#55FF55"}}>
                                  link
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th className="text-left" style={{color: "#8B8B8B"}}>CFLOWER: </th>
                              <td>
                                <a href={nft.spects} target="_blank" rel="noopener noreferrer" style={{color: "#55FF55"}}>
                                  Spects
                                </a>
                              </td>
                            </tr>
                            {this.props.nftState[nft.id]
                            ? <tr>
                                <th className="text-left" style={{color: "#8B8B8B"}}>Owner:</th>
                                <th>
                                  <img
                                    alt="id"
                                    className="ml-2 id border border-success"
                                    width="15"
                                    height="15"
                                    src={`data:image/png;base64,${new Identicon(this.props.nftState[nft.id], 30).toString()}`}
                                  />{' '}
                                  <a
                                    href={`https://rinkeby.etherscan.io/address/` + this.props.nftState[nft.id]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: "#55FF55", "fontWeight": "normal"}}
                                  >
                                    {this.props.nftState[nft.id].substring(0,8) + '...'}
                                  </a>
                                </th>
                              </tr>
                            : <tr>
                                <th className="text-left" style={{color: "#8B8B8B"}}>Price: </th>
                                <th style={{color: "#FFFFFF"}}>{nft.price/10**18} ETH</th>
                              </tr>
                            }
                                                        <tr>
                              <th className="text-left" style={{color: "#8B8B8B"}}>DESCRIPTION: </th>
                              <th style={{color: "#FFFFFF"}}>{nft.attributes[0][0]}</th>
                            </tr>
                          </tbody>
                        </table><p></p>
                          {this.props.nftState[nft.id]
                            ? <button
                                type="Success"
                                className="btn btn-block"
                                style={{border: '1px ridge #8B8B8B', color: "#8B8B8B", width: '200px'}}
                                onClick={(e) => buyNft(this.props.dispatch, nft.id, nft.price)}
                                disabled
                              >
                                <b>S o l d</b>
                              </button>
                            : <button
                                type="Success"
                                className="btn btn-block btn-outline"
                                style={{border: '1px ridge #55FF55', color: "#55FF55", width: '200px'}}
                                onClick={(e) => buyNft(this.props.dispatch, nft.id, nft.price)}
                              >
                                <b>B u y</b>
                              </button>
                          }&nbsp;
                        </div>
                    )
                  })}

                  </div>
                </div>
              </main>
            </div>
          </div>
          <br></br>
    
      <h3>My Discord Server here Welcome!</h3>
      <button http={`https://discord.gg/jNNx4E46`}>
    </button>
  


<div id="music-container"></div>
<footer>
          {this.props.contract
            ? <div style={{color: "#8B8B8B", fontSize: "14px"}}>
                NFT deployed at:&nbsp;
                <a
                  href={`https://${this.props.network}.etherscan.io/address/` + this.props.contract._address}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{color: "#55FF55"}}
                >
                {this.props.contract._address}
                </a>
              </div>
            : <div> Wrong network </div>
          }
          </footer>
        </div>
      )
    } catch(e){
      return(
        <Loading />
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    metadata: metadataSelector(state),
    contract: contractSelector(state),
    nftState: nftStateSelector(state),
    network: networkSelector(state)
  }
}

export default connect(mapStateToProps)(Main)