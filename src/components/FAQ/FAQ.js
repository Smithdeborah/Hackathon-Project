import React from "react";
import style from "./FAQs.module.css"
import {AiOutlinePlus} from  "react-icons/ai"

const FAQ = () => {
  return (
    <>
      {/* =====Hero Section ======= */}
      <div className={style.hero}>
        <div className={style.overlay}></div>
        <div className={style.faq1}>
          <h4 className={style.faq2}>FAQ's</h4>
          <p className={style.faq3}>
            These are some of our most popular questions asked by amazing
            Lagosians
          </p>
        </div>
      </div>

      {/* ======Most Popular Question======= */}
      <div className={style.MPQ}>
        <div className={style.firstdiv}>
          <div className={style.divHead}>Most Popular Question</div>
          <div>
            <div className={style.divText}>
              How do I register on the MoveEasy Platform
            </div>
            <div className={style.pText}>
              We usually use WordPress cms to develop a website but We have also
              execillency in the others CMS like Shopify, Square Space, Wix,
              Click Funnel, etc.
            </div>
          </div>
          <div className={style.faqs}>
            Mauris id nibh eu fermentum mattis purus?
            <AiOutlinePlus />
          </div>
          <div className={style.faqs}>
            Mauris id nibh eu fermentum mattis purus?
            <AiOutlinePlus />
          </div>
          <div className={style.faqs}>
            Mauris id nibh eu fermentum mattis purus?
            <AiOutlinePlus />
          </div>
          <div className={style.faqs}>
            Mauris id nibh eu fermentum mattis purus?
            <AiOutlinePlus />
          </div>
          <div className={style.faqs}>
            Mauris id nibh eu fermentum mattis purus?
            <AiOutlinePlus />
          </div>
          <div className={style.faqs}>
            Mauris id nibh eu fermentum mattis purus?
            <AiOutlinePlus />
          </div>
        </div>
        <img className={style.faqimg} src="./img/faqImg.png" alt="/" />
      </div>
    </>
  );
};

export default FAQ;
