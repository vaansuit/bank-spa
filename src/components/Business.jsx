import React from 'react'
import {features} from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard =({ icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt='icon' className="w-[50%] h-[50%] object-contain"></img>
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
)
const Business = () => {
  return (
    <section id='features' className={layout.section}> 
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className='sm:block hidden' /> we'll handle the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue id nisi non elementum. Quisque vulputate, dolor et suscipit fringilla, felis quam elementum massa, eu feugiat orci lacus vel neque. Vivamus nec imperdiet risus. Integer fermentum orci at mi pharetra euismod. Integer commodo luctus lacus, quis pellentesque metus commodo vitae. In mattis augue quis nibh mattis, fringilla lobortis lacus molestie. Suspendisse pretium arcu arcu, ac laoreet lectus pulvinar a.
      </p>

      <Button styles="mt-10" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index}/>
      ))}
    </div>
  </section>
  )
}
  


export default Business