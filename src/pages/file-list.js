import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

const FileList = ({ data }) => (
  <div>
    <h1>My Site's Files</h1>
    <Link to="/">Home</Link>
    <table>
      <thead>
        <tr>
          <th>relativePath</th>
          <th>prettySize</th>
          <th>extension</th>
          <th>birthTime</th>
        </tr>
      </thead>
      <tbody>
        {data.allFile.edges.map(({ node }, index) => (
          <tr key={index}>
            <td>{node.relativePath}</td>
            <td>{node.prettySize}</td>
            <td>{node.extension}</td>
            <td>{node.birthTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

FileList.propTypes = {
  data: PropTypes.shape({
    allFile: PropTypes.shape({
      edges: PropTypes.shape({
        node: PropTypes.shape({
          relativePath: PropTypes.string.isRequired,
          prettySize: PropTypes.string.isRequired,
          extension: PropTypes.string.isRequired,
          birthTime: PropTypes.object.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;

export default FileList;
