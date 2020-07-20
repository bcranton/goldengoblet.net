import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import { Helmet } from "react-helmet"
import { SpoilerProvider } from "../context/SpoilerContext"

const Layout = ({ theme, currentGame, navButtons, variant, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allGamesCsv {
        nodes {
          slug
          name
        }
      }
    }
  `)
  return (
    <>
      <Helmet>
        <body className={`${theme}-theme`} />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Playball&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <SpoilerProvider>
        <Navbar variant={variant} expand="lg">
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="mr-auto">
              <NavDropdown title={currentGame || "Games"} id="gamesDropdown">
                {data.allGamesCsv.nodes
                  .slice()
                  .reverse()
                  .map(({ name, slug }) => (
                    <NavDropdown.Item as={Link} to={`/${slug}`} key={slug}>
                      {name}
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
              <Nav.Link
                as={Link}
                to="/medals"
                id="medalsLink"
                activeClassName="active"
              >
                Medals
              </Nav.Link>
            </Nav>
            <Nav>{navButtons}</Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>{children}</Container>
      </SpoilerProvider>
    </>
  )
}

Layout.defaultProps = {
  theme: null,
  currentGame: null,
  navButtons: null,
  variant: "dark",
}

export default Layout
