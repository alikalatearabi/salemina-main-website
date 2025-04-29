import StoryImage from '../../assets/images/storyPage.jfif';
// import Blog from '../Blog/blog';
import { storyDescription, storyText } from './story_page_text';

import './style.scss';

const StoryPage = () => {
    return (
        <div className="story-page-container">
            <img src={StoryImage} alt="Story" className="story-image" />
            <div className="ellipse-background"></div>

            <div className="content-section first-section">
                <h2 className="section-title">داستان شکل گیری سالمینا</h2>
                <p className="text-content">{storyDescription}</p>
                <p className="text-content">{storyText.part1}</p>
                <p className="text-content">{storyText.part2}</p>
            </div>

            <div className="content-section last-section">
                <h2 className="section-title">اهداف سالمینا</h2>
                <p className="text-content">
                    اهداف سالمینا بر پایه ارتقای سلامت عمومی، آگاهی‌بخشی، و ایجاد تغییرات مثبت در عادات غذایی جامعه بنا شده است
                </p>
                <ul className="story-list">
                    <li className="story-list-item">
                        ارتقای آگاهی تغذیه‌ای جامعه: افزایش آگاهی عمومی درباره اهمیت تغذیه سالم و ارائه اطلاعات دقیق و کاربردی به کاربران برای انتخاب محصولات غذایی سالم‌تر
                    </li>
                    <li className="story-list-item">
                        بهبود سلامت فردی: کمک به کاربران در مدیریت و بهبود سلامت شخصی خود، از طریق ارائه تحلیل‌های دقیق مصرف مواد غذایی و هشدارهای شخصی‌سازی‌ شده
                    </li>
                    <li className="story-list-item">
                        کاهش ریسک بیماری‌ها: پیشگیری از بیماری‌های مرتبط با تغذیه با ارائه هشدارهای ریسک بر اساس الگوی مصرف و اطلاعات سلامت فردی کاربران
                    </li>
                    <li className="story-list-item">
                        تسهیل انتخاب‌های غذایی سالم: ایجاد امکان دسترسی سریع و آسان به اطلاعات تغذیه‌ای و رتبه‌بندی محصولات بر اساس نیازها و ملاحظات فردی
                    </li>
                    <li className="story-list-item">
                        افزایش دانش تغذیه‌ای جامعه: ارائه اطلاعات معتبر در حوزه تغذیه و سلامت به کاربران، برای کمک به آن‌ها در کسب آگاهی از وضعیت سلامتی محصولات و انتخاب‌ محصولات غذایی سالم‌تر.
                    </li>
                </ul>
                <div style={{ marginBottom: '100px' }}></div>
            </div>

            {/* <div>
                <Blog />
            </div> */}
        </div>
    );
};

export default StoryPage;
