import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { HeadComp, Nav, Social, Email, Footer } from "components";
import { GlobalStyle, theme } from "styles";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("./loader"), { ssr: false });

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = (props) => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll("a"));
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute("rel", "noopener noreferrer");
          link.setAttribute("target", "_blank");
        }
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    // if (location.hash) {
    //   const id = location.hash.substring(1); // location.hash without the '#'
    //   setTimeout(() => {
    //     const el = document.getElementById(id);
    //     if (el) {
    //       el.scrollIntoView();
    //       el.focus();
    //     }
    //   }, 0);
    // }

    handleExternalLinks();
  }, [isLoading]);

  return (
    <>
      <HeadComp />

      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <StyledContent>
              <Nav isHome={isHome} />
              <Social isHome={isHome} />
              <Email isHome={isHome} />

              <div id="content">
                {props.children}
                <Footer />
              </div>
            </StyledContent>
          )}
        </ThemeProvider>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
