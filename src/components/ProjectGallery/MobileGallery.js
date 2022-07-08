import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
	grid-template-columns: 1fr;

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

const StyledPanelWrapper = styled.div`
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem 0;
`;

const StyledImageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem 0;
`;

const StyledImage = styled.img`
	z-index: 1;
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 20px;
`;

// const StyledImageTitle = styled.h2`
// 	color: ${({ theme }) => theme.colors.white};
// 	font-size: ${({ theme }) => theme.fs.xl};
// `;

function MobileGallery({ gallery }) {
	return (
		<>
			<StyledContainer>
				<StyledPanelWrapper>
					{gallery.map((item, i) => (
						<StyledImage src={item.url} />
					))}
				</StyledPanelWrapper>
			</StyledContainer>
		</>
	);
}

export default MobileGallery;
