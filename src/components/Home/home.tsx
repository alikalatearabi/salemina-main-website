import { Button } from 'antd';
import downloadIcon from '../../assets/icons/download.svg'
import bazarIcon from '../../assets/icons/cafeBazar.svg'
import myketIcon from '../../assets/icons/myket.svg'

import './style.scss'

const Home = () => {
    return (
        <div className='home'>
            <div className='homeText'>
                <h1>سالمینا</h1>
                <p>دستیار دیجیتال شما در انتخاب سالم ترین هاست</p>
                <div className='buttonsWrapper'>
                    <Button type="primary" className='directDownload' href="" download>
                        <img src={downloadIcon} />
                        <span>دانلود مستقیم</span>
                    </Button>
                    <Button type="primary" className='unDirectDownload' href="" download>
                        <span>دانلود از کافه بازار</span>
                        <img src={bazarIcon} />
                    </Button>
                    <Button type="primary" className='unDirectDownload' href="" download>
                        <span>دانلود از مایکت</span>
                        <img src={myketIcon} />
                    </Button>
                </div>
            </div>
            <div>
                {/* <img src={homeImage} alt='homeImage' className='homeImage' /> */}
            </div>
        </div>
    );
}

export default Home;
