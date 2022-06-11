import React from 'react';
import { graphql } from 'gatsby';

const Projekt = ({
	data: {
		datoCmsProject: { title, image, info, gallery },
	},
}) => {
	return <div>{title}</div>;
};

export default Projekt;

export const query = graphql`
	query ($id: String) {
		datoCmsProject(id: { eq: $id }) {
			info
			image {
				filename
				url
			}
			slug
			title
			id
			gallery {
				filename
				url
			}
		}
	}
`;
