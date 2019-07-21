import React from "react";
import { Helmet } from "react-helmet";

import st_johns from "../../static/images/st_johns.jpg";

export default ({ title, description, path }) => (
  <Helmet>
    <title>{title} - rileyflynn.me</title>
    <meta name="description" content={description} />
    <meta name="image" content={st_johns} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={"https://rileyflynn.me" + path} />
    <meta property="og:title" content={title + " - rileyflynn.me"} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={st_johns} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@BootlegJohn" />
    <meta name="twitter:title" content={title + " - rileyflynn.me"} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={st_johns} />
  </Helmet>
);
