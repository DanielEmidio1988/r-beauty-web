import {BsFillPlusCircleFill} from "react-icons/bs"
import style from "./FAQ.module.scss";
import { useFAQ, FAQProps } from "./useFAQ";


function FAQ(props: FAQProps){
    const logic = useFAQ();

    return(
        <div className={`${style.faq_area}`}>
            {props.faqData && props.faqData.map((faq, index)=>{
                const isActive = logic.activeQuestion === index;
                return(
                    <div 
                        className={`${style.faq_area___box} ${isActive && style.active}`}
                        key={index}
                        onClick={()=> logic.setQuestionFAQ(index)}
                    >
                        <div className={`${style.faq_area___box___question}`}>
                            <h6>{faq.title} <BsFillPlusCircleFill/></h6>
                        </div>
                        <div className={`${style.faq_area___box___response}`}>
                            <p>{faq.content}</p>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}

export default FAQ;