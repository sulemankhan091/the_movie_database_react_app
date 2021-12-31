import styled from "styled-components";

export const Wrapper = styled.button`
	display: block;
	background: var(--darkGrey);
	width: 25%;
	min-width: 200px;
	height: 60px;
	color: var(--white);
	border-radius: 30px;
	border: 0;
	font-size: var(--fontBig);
	margin: 20px auto;
	transition: all 0.3s;

	:hover {
		cursor: pointer;
	}
`;
