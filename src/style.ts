import styled from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    gap: 12px;
    margin: 0 12px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
`;

export const SolutionWrapper = styled(Column)`
    flex: 1;
    justify-content: flex-end;
    margin-bottom: 0;
`;
