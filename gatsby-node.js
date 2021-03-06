const path = require("path");
const downloadImageForFile = require("./src/util/carbon.js");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve(`src/templates/pageTemplate.tsx`);

  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        sort: { order: ASC, fields: [frontmatter___weight] }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    return Promise.reject(result.errors);
  }
  const promises = [];
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    promises.push(
      (async () => {
        createPage({
          path: node.frontmatter.path,
          component: pageTemplate,
          context: {}, // additional data can be passed via context
        });
      })()
    );
  });
  await Promise.all(promises);
};
