import { apple ,image, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={image} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily <br className="sm:block hidden" /> convert your youtube videos to 
        SEO blogs 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        You can convert your youtube video into an SEO blog post a little too fast and easy.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        
      </div>
    </div>
  </section>
);

export default Billing;
