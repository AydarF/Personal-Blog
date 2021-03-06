import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';

import 'typeface-merriweather';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'Merriweather',
              'Segoe UI', Roboto, 'Monserrat', 'Helvetica Neue', sans-serif;
            font-size: 14px;
            line-height: 1.4;

            @media (min-width: calc(550px + 10vw)) {
              font-size: 18px;
            }

            /* remove margin from the main div that Gatsby mounts into */
            > div {
              margin-top: 0;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #222;
              line-height: 1.1;
              font-weight: 800;

              + * {
                margin-top: 0.5rem;
              }
            }

            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }

            /* styling for the code snippets (<pre> tags) in .mdx and .md files */
            .prism-code {
              padding: 1.3125rem;
              border-radius: 10px;
              overflow: auto;
            }

            /* svg charts in big o notation blog post */
            .svgChartContainer {
              display: flex;
              flex-direction: column;
              align-items: stretch;
              justify-content: center;
              margin: 40px 0;
              padding: 0 50px 15px;
            }

            svg {
              overflow: visible;
              width: 100%;
              background: #eee;
            }
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto;
          max-width: 90vw;
          width: 550px;
          word-spacing: 1px;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
