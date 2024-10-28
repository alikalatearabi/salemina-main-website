import StoryImage from '../../assets/images/storyPage.jfif';

import Blog from '../Blog/blog';
import { storyDescription, storyText } from './story_page_text';

const StoryPage = () => {
    return (
        <div>
            <div style={{ fontFamily: 'yekan', direction: 'rtl', background: '#eeeeee' }}>
                <img
                    src={StoryImage}
                    alt="Dependency"
                    style={{
                        width: '100%',
                        height: '400px',
                        objectFit: 'cover',
                        objectPosition: '50% 90%'
                    }} />
                <div
                    style={{
                        background: '#eeeeee', 
                        width: '100%',
                        height: '100px',
                        clipPath: 'ellipse(60% 100% at 50% 100%)',
                        transform: 'translateY(-50px)'
                    }}></div>
                <div style={{
                    padding: '0px 80px 0px 80px',
                    background: '#eeeeee',
                }}>
                    <h2 style={{ fontWeight: 'bold', color: '#013C04', fontSize: '35px', marginBottom: '0px' }}>داستان شکل گیری سالمینا </h2>
                    <p style={{ color: '#464E59', lineHeight: '1.6', fontSize: '22px' }}>
                        {storyDescription}
                    </p>
                    <p style={{ color: '#464E59', lineHeight: '1.6', fontSize: '22px' }}>
                        {storyText.part1}
                    </p>
                    <p style={{ color: '#464E59', lineHeight: '1.6', fontSize: '22px' }}>
                        {storyText.part2}
                    </p>
                </div>
                <div style={{ padding: '50px 80px 0 80px' }}>
                    <h2 style={{ fontWeight: 'bold', color: '#013C04', fontSize: '35px', marginBottom: '0px' }}>اهداف سالمینا</h2>
                    <p style={{ color: '#464E59', lineHeight: '1.6', fontSize: '22px' }}>
                        اهداف سالمینا بر پایه ارتقای سلامت عمومی، آگاهی‌بخشی، و ایجاد تغییرات مثبت در عادات غذایی جامعه بنا شده است
                    </p>
                    <ul>
                        <li style={{ color: '#464E59', lineHeight: '1.6', fontSize: '22px' }}>
                            ارتقای آگاهی تغذیه‌ای جامعه: افزایش آگاهی عمومی درباره اهمیت تغذیه سالم و ارائه اطلاعات دقیق و کاربردی به کاربران برای انتخاب محصولات غذایی سالم‌تر
                        </li>
                        <li style={{ color: '#464E59', lineHeight: '1.6', fontSize: '22px' }}>
                            بهبود سلامت فردی: کمک به کاربران در مدیریت و بهبود سلامت شخصی خود، از طریق ارائه تحلیل‌های دقیق مصرف مواد غذایی و هشدارهای شخصی‌سازی‌ شده
                        </li>
                        <li style={{ color: '#464E59', lineHeight: '1.6', fontSize: '22px' }}>
                            کاهش ریسک بیماری‌ها: پیشگیری از بیماری‌های مرتبط با تغذیه با ارائه هشدارهای ریسک بر اساس الگوی مصرف و اطلاعات سلامت فردی کاربران
                        </li>
                        <li style={{ color: '#464E59', lineHeight: '1.6', fontSize: '22px' }}>
                            تسهیل انتخاب‌های غذایی سالم: ایجاد امکان دسترسی سریع و آسان به اطلاعات تغذیه‌ای و رتبه‌بندی محصولات بر اساس نیازها و ملاحظات فردی
                        </li>
                        <li style={{ color: '#464E59', lineHeight: '1.6', fontSize: '22px' }}>
                            افزایش دانش تغذیه‌ای جامعه: ارائه اطلاعات معتبر در حوزه تغذیه و سلامت به کاربران، برای کمک به آن‌ها در کسب آگاهی از وضعیت سلامتی محصولات و انتخاب‌ محصولات غذایی سالم‌تر.
                        </li>
                    </ul>
                    <div style={{ marginBottom: '100px' }}></div>
                </div>
                <div >
                    <Blog />
                </div>
            </div>
        </div>
    );
}

export default StoryPage;
