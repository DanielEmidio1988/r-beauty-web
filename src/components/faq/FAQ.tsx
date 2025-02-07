import {BsFillPlusCircleFill} from "react-icons/bs"
import style from "./FAQ.module.scss";
import { FAQProps } from "./FAQTypes";
import { useFAQViewModel } from "./FAQViewModel";

function FAQ(props: FAQProps){
    const { activeQuestion, setQuestionFAQ } = useFAQViewModel(props);

    return(
        <div className={`${style.faq_area}`}>
            {props.faqData && props.faqData.map((faq, index)=>{
                const isActive = activeQuestion === index;
                return(
                    <div 
                        className={`${style.faq_area___box} ${isActive && style.active}`}
                        key={index}
                        onClick={()=> setQuestionFAQ(index)}
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