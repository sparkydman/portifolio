import React, { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { jobs, srConfig } from "configData";
import sr from "utils/sr";
import { usePrefersReducedMotion } from "hooks";

const StyledJobsSection = styled.section`
  .timeline {
    position: relative;
    margin: 50px auto;
    padding: 40px 0;
    width: 1000px;
    box-sizing: border-box;
  }
  .timeline:before {
    content: "";
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
  }
  .timeline ul {
    padding: 0;
    margin: 0;
  }

  @media (max-width: 1000px) {
    .timeline {
      width: 100%;
    }
  }
  @media (max-width: 767px) {
    .timeline {
      width: 100%;
      padding-bottom: 0;
    }
    .timeline:before {
      left: 20px;
      height: 100%;
    }
  }
`;

const TimelineStyles = styled.li`
  list-style: none;
  position: relative;
  width: 50%;
  padding: 20px 40px;
  box-sizing: border-box;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  &:nth-child(odd) {
    float: left;
    text-align: right;
    clear: both;

    @media (max-width: 767px) {
      width: 100%;
      text-align: left;
      padding-left: 50px;
      padding-bottom: 50px;
    }

    &:before {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      top: 24px;
      right: -6px;
      background: var(--lightest-slate);
      border-radius: 50%;
      box-shadow: 0 0 0 3px rgba(204, 214, 246, 0.2);

      @media (max-width: 767px) {
        top: -18px;
        left: 16px;
      }
    }

    .time {
      position: absolute;
      top: 12px;
      right: -200px;
      margin: 0;
      padding: 8px 16px;
      @media (max-width: 767px) {
        top: -30px;
        left: 50px;
        right: inherit;
      }
    }
  }

  &:nth-child(even) {
    float: right;
    text-align: left;
    clear: both;

    @media (max-width: 767px) {
      width: 100%;
      text-align: left;
      padding-left: 50px;
      padding-bottom: 50px;
    }

    &:before {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      top: 24px;
      left: -4px;
      background: var(--lightest-slate);
      border-radius: 50%;
      box-shadow: 0 0 0 3px rgba(204, 214, 246, 0.2);
      @media (max-width: 767px) {
        top: -18px;
        left: 16px;
      }
    }

    .time {
      position: absolute;
      top: 12px;
      left: -200px;
      margin: 0;
      padding: 8px 16px;

      @media (max-width: 767px) {
        top: -30px;
        left: 50px;
        right: inherit;
      }
    }
  }

  .content {
    ${({ theme }) => theme.mixins.boxShadow};
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
    overflow: auto;

    h2 {
      margin: 0 0 10px;
      color: var(--lightest-slate);
      font-size: var(--fz-xxl);
    }
    h4 {
      font-size: var(--fz-lg);
      color: var(--light-slate);
      margin-bottom: 1rem;
    }
    p {
      margin: 10px 0 0;
      padding: 0;
      color: var(--light-slate);
      font-size: 17px;
    }
  }

  .time p {
    margin: 0;
    padding: 0;
    color: var(--lightest-slate);
    font-size: var(--fz-xl);
  }
`;

const Jobs = () => {
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
  }, []);

  return (
    <StyledJobsSection id="jobs">
      <h2 className="numbered-heading">My Work Experience</h2>

      <div className="timeline">
        <ul>
          {prefersReducedMotion ? (
            <>
              {jobs &&
                jobs.map((job, i) => (
                  <TimelineStyles key={`job-key-${i}`}>
                    {jobComp(job)}{" "}
                  </TimelineStyles>
                ))}
            </>
          ) : (
            <TransitionGroup component={null}>
              {jobs &&
                jobs.map((job, i) => (
                  <CSSTransition
                    key={i}
                    classNames="fadeup"
                    timeout={i >= 3 ? (i - 3) * 300 : 300}
                    exit={false}
                  >
                    <TimelineStyles
                      key={i}
                      ref={(el) => (revealProjects.current[i] = el)}
                      style={{
                        transitionDelay: `${i >= 3 ? (i - 3) * 100 : 0}ms`,
                      }}
                    >
                      {jobComp(job)}
                    </TimelineStyles>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          )}
          <div style={{ clear: "both" }}></div>
        </ul>
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;

const jobComp = (job) => (
  <>
    <div className="content">
      <h2>{job.title}</h2>
      <h4>{job.employer}</h4>
      <p>{job.description}</p>
    </div>
    <div className="time">
      <p>{job.duration}</p>
    </div>
  </>
);
