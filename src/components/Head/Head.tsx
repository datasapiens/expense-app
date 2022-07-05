import { Helmet } from "react-helmet-async";

const FAVICON = "https://github.githubassets.com/favicons/favicon.svg";

export interface HeadProps {
  title?: string;
  description?: string;
}

export const Head = ({ title = "", description = "" }: HeadProps = {}) => (
  <Helmet
    title={title ? `${title} | Expenses App` : undefined}
    defaultTitle="Expenses App"
    meta={[
      {
        content: description,
        name: "description",
      },
    ]}
    link={[
      {
        rel: "icon",
        type: "image/png",

        href: FAVICON,
        sizes: "16x16",
      },
    ]}
  />
);
