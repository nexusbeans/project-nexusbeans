import React, { useState } from "react";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import PageBread from "../../Components/PageBread/PageBread";

function Faq() {
  const [accordionItems, setAccordionItems] = useState([
    { id: 1, question: "How do you prioritize your work?", answer: "..." },
    { id: 2, question: "Open a Business Bank Account?", answer: "..." },
    { id: 3, question: "What is required of a consultant?", answer: "..." },
    { id: 4, question: "How do consultants solve problems?", answer: "..." },
  ]);

  const [activeItem, setActiveItem] = useState(null);

  const toggleAccordion = (itemId) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  return (
    <MainLayout>
      <main className="FAQ_page">
        <PageBread
          backgroundText={"FAQ's"}
          mainHeading={"Question & Ans."}
          pageName={"FAQ's"}
        />

        <section>
          <div className="faq__area section-padding">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 xl-mb-10">
                  <div className="faq-collapse">
                    {accordionItems.map((item) => (
                      <div className="faq-collapse-item" key={item.id}>
                        <div className="faq-collapse-item-card">
                          <div
                            className={`faq-collapse-item-card-header ${
                              activeItem === item.id ? "active" : ""
                            }`}
                            onClick={() => toggleAccordion(item.id)}
                          >
                            <h6>
                              <span className="far fa-question-circle" />
                              {item.question}
                            </h6>
                            <i
                              className={`far ${
                                activeItem === item.id ? "fa-minus" : "fa-plus"
                              }`}
                            ></i>
                          </div>
                          {activeItem === item.id && (
                            <div className="faq-collapse-item-card-header-content">
                              <p>{item.answer}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
         
                {/* ... (similar code for the second column) */}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="faq__two section-padding pt-0">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-7 col-lg-6 lg-mb-30">
                  <div className="faq__two-left">
                    <div className="faq__two-left-image">
                      <img src="assets/img/pages/faq-1.jpg" alt="" />
                      <img
                        className="faq__two-left-image-one"
                        src="assets/img/pages/faq-2.jpg"
                        alt=""
                      />
                      <div className="faq__two-left-image-question left-right-animate">
                        <img src="assets/img/icon/questions.png" alt="" />
                        <h6>Have any questions?</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-5 col-lg-6">
                  <div className="faq__two-right">
                    <div className="faq__two-right-title">
                      <span className="subtitle-one">Faq Questions</span>
                      <h2>Have any questions And answers</h2>
                    </div>
                    <div className="faq__collapse mt-35">
                      <div className="faq__collapse-item">
                        <div className="faq__collapse-item-card">
                          <div className="faq__collapse-item-card-header">
                            <h6>
                              <span className="far fa-question-circle" />
                              How do you prioritize your work?
                            </h6>
                            <i className="far fa-plus" />
                          </div>
                          <div className="faq__collapse-item-card-header-content display-none">
                            <p>
                              Pellentesque eget dui tellus. Donec semper
                              tincidunt egestas. Vivamus lectus ipsum, tempor
                              quis mattis in, ornare ut tortor.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="faq__collapse-item">
                        <div className="faq__collapse-item-card">
                          <div className="faq__collapse-item-card-header">
                            <h6>
                              <span className="far fa-question-circle" />
                              Open a Business Bank Account?
                            </h6>
                            <i className="far fa-minus" />
                          </div>
                          <div className="faq__collapse-item-card-header-content active">
                            <p>
                              Pellentesque eget dui tellus. Donec semper
                              tincidunt egestas. Vivamus lectus ipsum, tempor
                              quis mattis in, ornare ut tortor.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="faq__collapse-item">
                        <div className="faq__collapse-item-card">
                          <div className="faq__collapse-item-card-header">
                            <h6>
                              <span className="far fa-question-circle" />
                              What is required of a consultant?
                            </h6>
                            <i className="far fa-plus" />
                          </div>
                          <div className="faq__collapse-item-card-header-content display-none">
                            <p>
                              Pellentesque eget dui tellus. Donec semper
                              tincidunt egestas. Vivamus lectus ipsum, tempor
                              quis mattis in, ornare ut tortor.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="faq__collapse-item">
                        <div className="faq__collapse-item-card">
                          <div className="faq__collapse-item-card-header">
                            <h6>
                              <span className="far fa-question-circle" />
                              How do consultants solve problems?
                            </h6>
                            <i className="far fa-plus" />
                          </div>
                          <div className="faq__collapse-item-card-header-content display-none">
                            <p>
                              Pellentesque eget dui tellus. Donec semper
                              tincidunt egestas. Vivamus lectus ipsum, tempor
                              quis mattis in, ornare ut tortor.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default Faq;
