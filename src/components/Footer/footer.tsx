import { Button } from 'antd'
import './style.scss'

import downloadIcon from '../../assets/icons/download.svg'
import bazarIcon from '../../assets/icons/cafeBazar.svg'
import myketIcon from '../../assets/icons/myket.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import instagram from '../../assets/icons/insta.svg'


export default function footer() {
  return (
    <div className='footer'>
      <div className='footerTitle'>
        <h1>سالمینا</h1>
      </div>
      <div className='footerLinksWrapper'>
        <div className='footerLink'>ویژگی ها</div>
        <div className='footerLink'>نحوه کارکرد</div>
        <div className='footerLink'>درباره ما</div>
        <div className='footerLink'>تماس با ما</div>
        <div className='footerLink'>وبلاگ</div>
      </div>
      <div className='footerDownloadLinksWrapper'>
        <Button type="primary" className='directDownload' href="" download>
          <img src={downloadIcon} alt='directDownloadButton' />
          <span>دانلود مستقیم</span>
        </Button>
        <Button type="primary" className='unDirectDownload' href="" download>
          <span>دانلود از کافه بازار</span>
          <img src={bazarIcon} alt='unDirectDownload' />
        </Button>
        <Button type="primary" className='unDirectDownload' href="" download>
          <span>دانلود از مایکت</span>
          <img src={myketIcon} alt='unDirectDownload' />
        </Button>
      </div>
      <div className='footerSocialMedia'>
        <img src={linkedin} alt='linkedin' />
        <img src={instagram} alt='instagram' className='instagramIcon' />
      </div>
    </div>
  )
}
