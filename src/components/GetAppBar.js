import chromeIcon from '../assets/Chrome Icon.svg'
import appleIcon from '../assets/Apple Store Icon.svg'

const GetAppBar = () => {
    function openStore (url) {
        window.open(url, '_blank', 'noopener,noreferrer')
    }
    return(
        <div className='getAppWrapper'>
            <div className='storeWrapper' onClick={() => openStore('https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk')}>
                <img src={chromeIcon} alt="chrome webs store icon" />
                <div>
                    <h3>available in the</h3>
                    <h2>chrome web store</h2>
                </div>
            </div>
            <div className='storeWrapper' onClick={() => openStore('https://apps.apple.com/app/ratepunk/id1607823726')}>
                <img src={appleIcon} alt="app store icon" />
                <div>
                    <h3>available in the</h3>
                    <h2>apple app store</h2>
                </div>
            </div>
            <div className='reviewWrapper'>
                <span>&#9733; &#9733; &#9733; &#9733; &#9733; Chrome store reviews</span>
            </div>
        </div>
    )
}

export default GetAppBar