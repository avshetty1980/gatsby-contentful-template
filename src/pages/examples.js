import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Header from "../examples/Header";

const examples = ({ data }) => {

    const {
        site: {
            info:{authour},
            }
        } = data;

    return (
        <Layout>
                <p>hello from examples page</p>
                <Header />
                <h5>Author: {authour}</h5>
          
        </Layout>
    );
};

export const data = graphql`
query MyQuery {
  site {
    info:siteMetadata {
      title
      authour
      person {
        name
        age
      }
      data
      description
    }
    
  }
}
`

export default examples;