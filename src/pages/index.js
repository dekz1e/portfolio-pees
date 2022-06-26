import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import { Home } from '../components/Home';
import { Kontakt } from '../components/Kontakt';
import { Realizacje } from '../components/Realizacje';
import { graphql } from 'gatsby';

const IndexPage = ({
	data: {
		allDatoCmsProject: { nodes },
	},
}) => {
	
	return (
		<Layout>
			<Header />
			<Home />
			<Realizacje nodes={nodes}  />
			<Kontakt  />
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
	query {
		allDatoCmsProject {
			nodes {
				id
				info
				image {
					filename
					url
				}
				title
				slug
			}
		}
	}
`;
