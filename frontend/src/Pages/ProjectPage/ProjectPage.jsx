import React from "react";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import PageBread from "../../Components/PageBread/PageBread";

const projects = [
  {
    name: "Skv Interior",
    imageSrc: "data/image/projects/imgs1.jpg",
    website: "https://skvinterior.in/",
    description: "Skv Interior design company",
  },
  {
    name: "Aakasa",
    imageSrc: "data/image/projects/imgs2.jpg",
    website: "https://aakasa.in/",
    description: "NGO Trust and services",
  },
  {
    name: "Noblehearingand Application",
    imageSrc: "data/image/projects/imgs2.jpg",
    website: "https://noblehearingandspeechtherapy.com",
    description: "Noblehearingand speechtherapy",
  },
];

function ProjectPage() {
  return (
    <MainLayout>
      <main>
        <PageBread
          backgroundText="case study"
          mainHeading="Our Projects"
          pageName="Projects"
        />
        <section>
          <div className="project__one section-padding">
            <div className="container">
              <div className="row">
                {projects.map((project, index) => (
                  <div className="col-md-6 mb-30" key={index}>
                    <div className="project__one-item">
                      <img
                        className="img__full"
                        src={project.imageSrc}
                        alt={project.name}
                      />
                      <div className="project__one-item-content">
                        <span>{project.name}</span>
                        <h4>
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {project.description}
                          </a>
                        </h4>
                      </div>
                      <div className="project__one-item-icon">
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fal fa-long-arrow-up" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default ProjectPage;
