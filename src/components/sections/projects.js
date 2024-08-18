import React, { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { srConfig, projects } from "configData";
import sr from "utils/sr";
import { Icon } from "components/icons";
import { usePrefersReducedMotion } from "hooks";
import Link from "next/link";

export const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }
  .inline-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 2rem;
  }

  .projects-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .educations-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: flex;
    gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      flex-direction: column;
    }
    li {
      flex: 1;
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`;

export const StyledProject = styled.li`
  position: relative;
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

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
    overflow: auto;
  }

  .project-top {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 35px;

    .folder {
      color: var(--green);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);

      a {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 5px 7px;

        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: "";
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .project-description {
    color: var(--light-slate);
    font-size: 17px;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }

  .duration {
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: 1.75;
  }
`;

const Projects = () => {
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
  }, []);

  const projectInner = (project) => {
    const { name, description, stacks, link, external } = project;
    const techs = stacks.split(",");

    return (
      <div className="project-inner">
        <header>
          <div className="project-top">
            <div className="folder">
              <Icon name="Folder" />
            </div>
            <div className="project-links">
              {link && (
                <a
                  href={link}
                  aria-label="GitHub Link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="GitHub" />
                </a>
              )}
              {external && (
                <a
                  href={external}
                  aria-label="External Link"
                  className="external"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="External" />
                </a>
              )}
            </div>
          </div>

          <h3 className="project-title">
            <a href={link} target="_blank" rel="noreferrer">
              {name}
            </a>
          </h3>

          <div className="project-description">
            <p>{description}</p>
          </div>
        </header>

        <footer>
          {techs && (
            <ul className="project-tech-list">
              {techs.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    );
  };

  return (
    <StyledProjectsSection id="projects">
      <h2 className="numbered-heading">Some Of My Projects</h2>
      {/* <h2 ref={revealTitle}>Some Of My Projects</h2> */}

      <ul className="projects-grid">
        {prefersReducedMotion ? (
          <>
            {projects &&
              projects.map((project, i) => (
                <StyledProject key={i}>{projectInner(project)}</StyledProject>
              ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {projects &&
              projects.map((project, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= 6 ? (i - 6) * 300 : 300}
                  exit={false}
                >
                  <StyledProject
                    key={i}
                    ref={(el) => (revealProjects.current[i] = el)}
                    style={{
                      transitionDelay: `${i >= 6 ? (i - 6) * 100 : 0}ms`,
                    }}
                  >
                    {projectInner(project)}
                  </StyledProject>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </ul>

      <div className="inline-link">
        <Link
          className="archive-link"
          href="https://github.com/sparkydman"
          target="_blank"
          rel="noreferrer"
        >
          View More On Github
        </Link>
      </div>
    </StyledProjectsSection>
  );
};

export default Projects;
