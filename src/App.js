import './App.css';
import Neonrabbits from  './img/Neonrabbits.png'
import index1 from  './img/index1.png'
import index2 from  './img/index2.png'
import index3 from  './img/index3.png'
import index4 from  './img/index4.png'
import bg1 from  './img/bg1.png'
import bg2 from  './img/bg2.jpg'
import bg3 from  './img/bg3.png'
import bg4 from  './img/bg4.png'
import logo from  './img/logo.png'
import icon1 from  './img/icon1.png'
import icon2 from  './img/icon2.png'
import icon3 from  './img/icon3.png'
import icon4 from  './img/icon4.png'
import pic1 from  './img/pic1.png'
import pic2 from  './img/pic2.png'
import pic3 from  './img/pic3.png'
import pic4 from  './img/pic4.png'
import pic5 from  './img/pic5.png'
import pic6 from  './img/pic6.png'
import './index.css';

// import MobileHtml from './mobile.js'

// import { useMediaQuery } from 'react-responsive'
// const isMobileDevice = useMediaQuery({
//     minWidth:"800px",
// });

function App() {
  return (
    <div className="App">
        <section>
          <div className="navbar">
            <div className="basic-width">
              <div style={{'display':'flex','align-items':'center'}}>
                <img className={'logo'} src={logo}/>
                <img className={'logo-content'} src={Neonrabbits}/>
              </div>
              <button
                  style={{
                      'cursor':'pointer'
                  }}
                  onClick={() => window.location = 'mailto:contact@neonrabbits.io'}
                  className={'contact-us'}>
                Contact Us
              </button>
            </div>
          </div>

          <div className="basic-width flex-half"
            style={{
                'height':'900px',
            }}
          >
            <div style={{
              'display': 'flex',
              'justify-content':'center',
              'flex-direction':'column '
            }}>
                <div className="title-1">
                  Neonrabbits
                </div>
                <div className="content-1" style={{
                  'margin-bottom':'32px'
                }}>
                  Neonrabbits are connecting the dots of their lives, and always on adventures together at Neonspace
                </div>
                <div style={{
                  'text-align': 'left'
                }}>
                  <div className="button-1">
                    Minting Soon You Are Early
                  </div>
                </div>


            </div>

            <div style={{'position':'relative'}}>

                <img src={index4}
                    style={{
                        'position':'absolute',
                        'top':'174px',
                        'left':'0px',
                        'width':'600px'
                    }}
                />
                {/*<img src={index2}*/}
                {/*     style={{*/}
                {/*         'position':'absolute',*/}
                {/*         'top':'258px',*/}
                {/*         'left':'184px',*/}

                {/*     }}*/}
                {/*/>*/}
                {/*<img src={index3}*/}
                {/*     style={{*/}
                {/*         'position':'absolute',*/}
                {/*         'top':'306px',*/}
                {/*         'left':'368px',*/}

                {/*     }}*/}
                {/*/>*/}

            </div>


          </div>
        </section>
        <section style={{
            'backgroundImage': `url(${bg2})`,
            'height':'900px',
        }}>
            <div className="basic-width flex-half"
                 style={{
                     'height':'900px'
                 }}
            >
                <div style={{
                    'display': 'flex',
                    'justify-content':'center',
                    'flex-direction':'column '
                }}>
                        <img style={{
                            'width':'520px'
                        }} src={bg1}/>
                </div>
                <div style={{
                    'display': 'flex',
                    'justify-content':'center',
                    'flex-direction':'column ',
                    'align-items: ' : 'start',
                    'text-align':'left'
                }}>
                    <div className="title-2">
                        We Are Neonrabbits
                    </div>
                    <div className="content-2">
                        Neonrabbits are 10,000 NFT PFPs, each exhibiting unique traits. Our purpose is to facilitate the meaningful human connection within and around web3. We strive to learn and prosper collectively. Neonrabbits can also participate in building Neonspace anytime as a DAO
                    </div>
                    <div className="title-3">
                        What is Neonspace
                    </div>
                    <div className="content-2">
                        Neonspace serves as a habitat for Neonsabbits to reside, collaborate in building and thrive as a DAO.
                        <br/>
                        It also serves as a social platform for connecting with web3 industry professionals and enthusiasts, as well as managing community interactions.    </div>
                </div>

            </div>
        </section>

        <section style={{
            'background':'#F3FBFF',
            'height':'1200px',
        }}>

            <div className="basic-width"
            style={{
                'justify-content':'center',
                'flex-direction':'column ',
                'height':'1200px',
            }}
            >

                <div className="width100">
                        <div className="title-4 center">
                            Neonrabbits Love Utilities
                        </div>
                        <div style={{
                            'margin-top':'16px',
                            'margin-bottom':'20px'
                        }} className="content-3">
                            Neonrabbits are not only about sweeping the floor or degens. We are here for actual utilities.
                        </div>
                </div>

                <div className="width100 flex-row">

                    <div className="block-1">
                        <div className="icon-bg-1">
                            <img src={icon1}/>
                        </div>
                        <div className="title-5">
                            Access to Neonspace
                        </div>
                        <div className="content-4">
                            The first benefit of being part of Neonrabbits is an access to the Neonspace, which is a social platform for web3 professionals and enthusiasts.
                        </div>
                    </div>

                    <div className="block-1">
                        <div className="icon-bg-1">
                            <img src={icon2}/>
                        </div>
                        <div className="title-5">
                            Holders only events
                        </div>
                        <div className="content-4">
                            Neonrabbits will host series of online and offline community events where builders can connect and collaborate, discuss how we can co-build Neonspace together, and what kind of community functions Neonrabbits holders want to see from Neonspace.
                        </div>
                    </div>


                    <div>

                    </div>

                </div>

                <div className="width100 flex-row">

                    <div className="block-1">
                        <div className="icon-bg-1">
                            <img src={icon3}/>
                        </div>
                        <div className="title-5">
                            DAO, and proof of
                            contribution
                        </div>
                        <div className="content-4">
                            Neonrabbits who share a passion for building Neonspace can participate anytime as a DAO member through our on-chain protocols and collect carrots as proof of contribution. One can also submit community proposals to improve building and participation process.
                        </div>
                    </div>

                    <div className="block-1">
                        <div className="icon-bg-1">
                            <img src={icon4}/>
                        </div>
                        <div className="title-5">
                            Beyond Neonrabbits, and a
                            new asset
                        </div>
                        <div className="content-4">
                            Once Neonrabbits achieve targeted objective, we will broaden the scope of Neonspace residents by introducing a new on-chain asset.
                        </div>
                    </div>


                    <div>

                    </div>

                </div>


            </div>

        </section>

        <section style={{
            'background':'#000',
            'height':'1300px',
            'position': 'relative'
        }}>

            <img style={{
                'position': 'absolute',
                'width': '766px',
                'height': '375px',
                'left': '0px',
                'top': '0px'
            }} src={bg3}/>

            <img style={{
                'position': 'absolute',
                'width': '1351.75px',
                'height': '131.34px',
                'right': '0px',
                'bottom': '0px'
            }} src={bg4}/>

            <div className="basic-width"
                 style={{
                     'justify-content':'center',
                     'flex-direction':'column ',
                     'height':'1300px'
                 }}
            >


                <div className="title-6">
                    Neonrabbits Builders
                </div>

                <div style={{
                    'margin-top':'48px'
                }} className="width100 flex">
                    <img style={{
                        'width':'520px'
                    }} src={pic6}/>

                    <div>
                        <div className="box-content-1">
                            <div className="title-7">
                                Christine
                            </div>
                            <div className="content-5">
                                Initiator
                            </div>
                            <div className="content-6">
                                Former experience as a web3 investor at crypto VC firms, and was one of key decision makers for over 200 web3 project investments. Before entering crypto, Christine worked at startup incubators.
                            </div>

                        </div>

                        <div className="box-content-1" style={{
                            'margin-top': '24px'
                        }}>
                            <div className="title-7">
                                Mr.Y
                            </div>
                            <div className="content-5">
                                Tech lead
                            </div>
                            <div className="content-6">
                                A serial entrepreneur, a software developer. His first startup, a community management tool, had over 30 million users.
                            </div>

                        </div>

                        <div className="box-content-1" style={{
                            'margin-top': '24px'
                        }}>
                            <div className="title-7">
                                Peti Triot
                            </div>
                            <div className="content-5">
                                Contributor & Advisor
                            </div>
                            <div className="content-6">
                                Peti Triot is one of the leading artists in the Blockchain $1 Trillion Club. He has never been exposed to the Internet and only works on the blockchain. Petit Triot links installation art with NFTs. He exhibited the world's first blockchain-based artwork in Seoul, Korea.
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

        <section style={{
            'height':'240px',
            'background':'linear-gradient(#6D52FF, #854BF9)'
        }}>
            <div className="basic-width"
                 style={{
                     'justify-content':'center',
                     'flex-direction':'column ',
                     'height':'240px',
                     'position':'relative',
                 }}
            >
                <div className="title-8">
                    Follow us on twitter to get the latest updates
                </div>
                <div>
                    <div
                        onClick={() => window.open('https://twitter.com/Neonrabbitsnft')}
                        style={{
                            'cursor':'pointer'
                        }}
                        className="button-2">
                        To Follow
                    </div>
                </div>

                <img className="pic-block-2" src={pic5}/>

            </div>

        </section>
        <section style={{
            'height':'184px',
            'background':'#000000'
        }}>
            <div className="basic-width"
                 style={{
                     'justify-content':'flex-end',
                     'flex-direction':'column ',
                     'height':'184px',

                 }}
            >
                <div className="title-9" >
                    2023-2023 Company. All rights reserved.
                </div>
            </div>
        </section>
    </div>
  );
}

export default App;
