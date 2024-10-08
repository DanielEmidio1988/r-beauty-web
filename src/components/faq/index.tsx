import React, {useState} from "react";
import {BsFillPlusCircleFill} from "react-icons/bs"
import { IFaq } from "../../pages/home";
import style from "./FAQ.module.scss"

interface Props{
    faqData: IFaq[]
}

function FAQ({faqData}: Props){
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

    function setQuestionFAQ(index: number){
        setActiveQuestion(activeQuestion === index ? null : index);

    }

    return(
        <div className={`${style.faq_area}`}>
            {faqData && faqData.map((faq, index)=>{
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