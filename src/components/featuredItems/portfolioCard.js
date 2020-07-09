/* eslint react/prop-types: 0 */
import React from 'react'
// import {  graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from "../../components/layout";

export default function portfolioCard({ data }) {
    console.log(data)
    return (
      <Layout>
        <div>Hello world</div>
      </Layout>
    )
  }

  portfolioCard.propTypes = {
    data: PropTypes.array,
  };

  