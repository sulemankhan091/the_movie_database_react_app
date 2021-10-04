import React, { Children } from "react";

// styles
import { Wrapper , Content } from "./Grid.styles";

// Children is a default prop of React Component

const Grid = ({header,children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>
            {children}
        </Content>
    </Wrapper>
)

export default Grid;