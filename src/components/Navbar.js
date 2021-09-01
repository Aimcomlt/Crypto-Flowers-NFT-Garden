import React, { Component } from 'react'
import { connect } from 'react-redux'
import Identicon from 'identicon.js';
import eth from '../images/eth.png'
import {
  accountSelector,
  balanceSelector,
  networkSelector,
  web3Selector
} from '../store/selectors'
import './Style.css';

class Navbar extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    }
    
    this.showMenu = this.showMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({
      showMenu: true,
    });
  }
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg rounded-bottom navBorderBottom" style={{ color: "	#ffd700", "backgroundColor": "#d2691e" }}>
        
                       <div>
        <button onClick={this.showMenu}>
          Show menu
        </button>
        
        {
          this.state.showMenu
            ? (
              <div className="menu"               
                ref={(element) => {
                this.dropdownMenu = element;
              }}>
                <button> 
                  <a href={'http://terrible-religion.surge.sh/'} rel="noopener noreferrer" style={{color: "#black"}}>
                                  ORIGINAL PROJECT
                  </a> </button>
                <button>
                <a href={'https://testnets.opensea.io/assets/0xa731ad847983c00f2bc25ee82f22d3b211b08f96/17'} rel="noopener noreferrer" style={{color: "#black"}}>
                                  OPENSEA MY LISTED
                  </a>
                </button>
                <button>
                <a href={'https://a.i.btc-binance-predicter.surge.sh/'} rel="noopener noreferrer" style={{color: "#black"}}>
                                  PROJECT A.I.BTC-PREDICTOR-FUNCTION
                  </a>
                </button>
                
              </div>
            )
            : (
              null
            )
        }
      </div>

        
             
        
          { this.props.account
          ? <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <div className="container">
                  <div className="row">
                    <div className="rounded network">
                      <li className="nav-item nav-link small">
                        <b>{this.props.network}</b>
                      </li>
                    </div>
                    <div className="rounded balance">
                      <li className="nav-item nav-link small">
                        <b>{this.props.balance}</b>
                        <img src={eth} width='18' height='18' alt="eth" />
                      </li>
                    </div>
                    <div className="rounded account">
                      <li className="nav-item nav-link small">
                        { this.props.network === 'Main' || this.props.network === 'Private' || this.props.network === 'Wrong network'
                        ? <b><a
                            style={{ color: "#55FF55" }}
                            href={`https://etherscan.io/address/` + this.props.account}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                          {this.props.account.substring(0,5) + '...' + this.props.account.substring(38,42)}
                          &nbsp;
                          </a></b>
                        : <b><a
                            style={{color: "#55FF55"}}
                            href={`https://${this.props.network}.etherscan.io/address/` + this.props.account}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                          {this.props.account.substring(0,6) + '...' + this.props.account.substring(38,42)}
                          </a></b>
                        }
                        <img
                          alt="id"
                          className="id border border-success"
                          width="20"
                          height="20"
                          src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                        />
                      </li>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          : <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                { this.props.web3
                ? <button
                    type="Success"
                    className="btn btn-outline btn-block "
                    style={{ backgroundColor: "#55FF55", color: "#000000" }}
                    onClick={async () => {
                      try {
                        await window.ethereum.enable()
                      } catch (e) {
                        console.log(e)
                      }
                    }}
                  >
                    L o g i n
                  </button>
                : <button
                    className="btn btn-warning"
                    type="button"
                    onClick={() => {
                      try {
                        window.open("https://metamask.io/")
                      } catch (e) {
                        console.log(e)
                      }
                    }}
                  >
                    Get MetaMask
                  </button>
                }
              </ul>
            </div>
          }
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    web3: web3Selector(state),
    account: accountSelector(state),
    network: networkSelector(state),
    balance: balanceSelector(state)
  }
}

export default connect(mapStateToProps)(Navbar)