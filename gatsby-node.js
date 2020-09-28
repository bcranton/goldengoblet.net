const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query GamesQuery {
      allGamesCsv {
        nodes {
          name
          winner
          slug
          theme
          imageFile {
            publicURL
          }
          scores {
            id
            name
            youtube {
              channel
            }
            days {
              score
              place
              youtube
              notes
              name
            }
          }
        }
      }
    }
  `);
  result.data.allGamesCsv.nodes.forEach((data, index) => {
    notes = data.scores
      ? data.scores
        .map((node) => node.days.map((day) => day.notes))
        .flat()
        .filter(Boolean)
      : [];
    if (index === 0) {
      createPage({
        path: "/",
        component: path.resolve(`./src/templates/ScorePage.js`),
        context: { notes, ...data },
      });
    }
    createPage({
      path: data.slug,
      component: path.resolve(`./src/templates/ScorePage.js`),
      context: { notes, ...data },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type GamesCsv implements Node {
      scores: [ScoreCsv] @link(by: "slug", from: "slug")
    }

    type ScoreCsv implements Node {
      game: GamesCsv @link(by: "slug", from: "slug")
      youtube: YoutubeCsv @link(by: "name", from: "name")
    }
  `;
  createTypes(typeDefs);
};

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    GamesCsv: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            query: {
              filter: {
                relativePath: { eq: source.image },
              },
            },
            type: "File",
            firstOnly: true,
          });
        },
      },
    },
  });
};
