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
        <div className="accordion-wrapper">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            {faqData.map((item, index) => {
              return (
                <div className="accordion-item" key={index}>
                  <h2
                    className="accordion-header"
                    id={`flush-heading${item.class}`}
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${item.class}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse${item.class}`}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${item.class}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`flush-heading${item.class}`}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">{item.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
