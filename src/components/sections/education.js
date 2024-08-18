import React, { useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { educations } from "configData";
import { usePrefersReducedMotion } from "hooks";
import Link from "next/link";
import { StyledProject, StyledProjectsSection } from "./projects";

const Educations = () => {
  const revealEducations = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
  }, []);

  const projectInner = (edu) => {
    const { course, duration, school } = edu;

    return (
      <div className="project-inner">
        <header>
          <h3 className="project-title">{course}</h3>

          <div className="project-description">
            <p>{school}</p>
          </div>
        </header>

        <footer>
          <p className="duration">{duration}</p>
        </footer>
      </div>
    );
  };

  return (
    <StyledProjectsSection id="educations">
      <h2 className="numbered-heading">Education Background</h2>

      <ul className="educations-grid">
        {prefersReducedMotion ? (
          <>
            {educations &&
              educations.map((project, i) => (
                <StyledProject key={i}>{projectInner(project)}</StyledProject>
              ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {educations &&
              educations.map((project, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= 3 ? (i - 3) * 300 : 300}
                  exit={false}
                >
                  <StyledProject
                    key={i}
                    ref={(el) => (revealEducations.current[i] = el)}
                    style={{
                      transitionDelay: `${i >= 3 ? (i - 3) * 100 : 0}ms`,
                    }}
                  >
                    {projectInner(project)}
                  </StyledProject>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </ul>
    </StyledProjectsSection>
  );
};

export default Educations;
