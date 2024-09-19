import React from 'react';
import styled from 'styled-components';

const Border = styled.div`
  border: 5px solid;
`;

export const App = () => {
  return <div>
    <Border>
      Hello, world!
    </Border>
  </div>;
};
