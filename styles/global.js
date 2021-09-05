import React from "react";
import Theme from "./theme";

export default () => {
  return (
    <style>
      {`
        body {
          margin: 0;
          font-size: 1rem;
          color: ${Theme.colors.dark1};
          background-color: ${Theme.colors.light1};
          font-family: ${Theme.fonts.body};
        }
        * {
          box-sizing: border-box;
          scroll-behavior: smooth;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: ${Theme.fonts.heading} !important;
        }
        a{
          text-decoration: none;
          color: ${Theme.colors.dark1};
        }
        a:hover {
          color: ${Theme.colors.dark};
        }
        .gray-filter {
          filter: grayscale(1);
        }

        /* Works on Firefox */
        * {
            scrollbar-width: thin;
            scrollbar-color: ${Theme.colors.dark2} ${Theme.colors.dark};
        }
        /* Works on Chrome, Edge, and Safari */
        *::-webkit-scrollbar {
            width: 12px;
        }
        *::-webkit-scrollbar-track {
            background: ${Theme.colors.dark};
        }
        *::-webkit-scrollbar-thumb {
            background-color: ${Theme.colors.dark2};
            border-radius: 20px;
            border: 3px solid ${Theme.colors.dark};
        }
    `}
    </style>
  );
};
