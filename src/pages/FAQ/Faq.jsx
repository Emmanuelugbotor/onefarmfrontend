import Layout from "../../component/layout/Layout";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import Data from "../../dommydata";
import "./Faq.scss";
const { faqData } = Data;
export default function Faq() {
  const [faq, setFaq] = useState(false);
  function handleClick(id) {
    setFaq(id);
  }
  return (
    <Layout>
      <div className="faq">
        <div className="faq_title">Frequently Asked Questions</div>
        <div className="faq_question_answer">
          <div className="faq_question_answer_left">
            {faqData.map((c) => {
              return (
                <div
                  className={faq === c.id ? "question active" : "question"}
                  key={c.id}
                  onClick={() => handleClick(c.id)}
                >
                  <div className="form__radio-button">
                    <span></span>
                  </div>

                  <p>{c.question}</p>
                  <ArrowForwardIosIcon className="icon" />
                </div>
              );
            })}
          </div>
          {faq && (
            <div className="faq_question_answer_right">
              <h2>{faqData[faq - 1].question}</h2>
              <p>{faqData[faq - 1].answer}</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
