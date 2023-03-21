import {apple, bill, google} from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt='billing' className="w-[100%] h-[100%] relative z-[5]" />
    {/* Gradiente */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}> Easily control your <br className="sm: block hidden" /> billing & invoicing.</h2> 
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue id nisi non elementum. Quisque vulputate, dolor et suscipit fringilla, felis quam elementum massa, eu feugiat orci lacus vel neque. Vivamus nec imperdiet risus. Integer fermentum orci at mi pharetra euismod. Integer commodo luctus lacus, quis pellentesque metus commodo vitae. In mattis augue quis nibh mattis, fringilla lobortis lacus molestie. Suspendisse pretium arcu arcu, ac laoreet lectus pulvinar a.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
        <img src={google} alt="google_store" className='w-[128px] h-[42px] object-contain cursor-pointer' />
      </div>
    </div>
    
  </section>
)

export default Billing