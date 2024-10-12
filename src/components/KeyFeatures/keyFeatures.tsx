import FeaturesCard from './featuresCard';
import performanceIcon from '../../assets/icons/performance.svg'
import controlIcon from '../../assets/icons/control.svg'
import chartIcon from '../../assets/icons/chart.svg'
import machineIcon from '../../assets/icons/machine.svg'
import leafIcon from '../../assets/icons/leaf.svg'



import './style.scss'

const KeyFeatures = () => {
    return (
        <div className="keyFeatures">
            <div className='lowerArc'></div>
            <div className='title'>
                <h1>ویژگی های کلیدی سالمینا</h1>
                <span>از مهمترین ویژگی های سالمینا میتوان به موارد زیر اشاره کرد:</span>
            </div>
            <div className='featureCardsWrapper'>
                <FeaturesCard width='32%' icon={performanceIcon} title='تحلیل الگوی مصرف و بهبود آن' description='تحلیل الگوی مصرف و همراهی با شما برای رسیدن به عادات تغذیه‌ای سالم‌تر با ایجاد آگاهی از محصولات سالم‌تر'/>
                <FeaturesCard width='32%'  icon={controlIcon} title='تحلیل الگوی مصرف و بهبود آن' description='تحلیل الگوی مصرف و همراهی با شما برای رسیدن به عادات تغذیه‌ای سالم‌تر با ایجاد آگاهی از محصولات سالم‌تر'/>
                <FeaturesCard width='32%' icon={chartIcon} title='تحلیل الگوی مصرف و بهبود آن' description='تحلیل الگوی مصرف و همراهی با شما برای رسیدن به عادات تغذیه‌ای سالم‌تر با ایجاد آگاهی از محصولات سالم‌تر'/>
                <FeaturesCard width='49%' icon={machineIcon} title='تحلیل الگوی مصرف و بهبود آن' description='تحلیل الگوی مصرف و همراهی با شما برای رسیدن به عادات تغذیه‌ای سالم‌تر با ایجاد آگاهی از محصولات سالم‌تر'/>
                <FeaturesCard width='49%' icon={leafIcon} title='تحلیل الگوی مصرف و بهبود آن' description='تحلیل الگوی مصرف و همراهی با شما برای رسیدن به عادات تغذیه‌ای سالم‌تر با ایجاد آگاهی از محصولات سالم‌تر'/>
                <div style={{width: '32%'}}></div>
            </div>
        </div>
    );
}

export default KeyFeatures;
