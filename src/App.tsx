import { useState } from 'react';

import HandsGrid from './components/HandsGrid';
import Position from './components/Position';
import Solution from './components/Solution';
import { TPosition } from './components/Solution/ranges';
import StackSize from './components/StackSize';
import { AppContainer, Column, SolutionWrapper } from './style';
import { GlobalStyle } from './styles/GlobalStyle';

export function App() {
    const [selectedHand, setSelectedHand] = useState<string | undefined>(undefined);
    const [selectedPosition, setSelectedPosition] = useState<TPosition | undefined>(undefined);
    const [selectedStack, setSelectedStack] = useState<number | undefined>(undefined);

    const resetAll = () => {
        setSelectedHand(undefined);
        setSelectedPosition(undefined);
        setSelectedStack(undefined);
    };

    return (
        <>
            <GlobalStyle />
            <AppContainer>
                <HandsGrid selectedHand={selectedHand} setSelectedHand={setSelectedHand} onReset={resetAll} />
                <Column>
                    <StackSize setSelectedStack={setSelectedStack} selectedStack={selectedStack} />
                    <Position setSelectedPosition={setSelectedPosition} selectedPosition={selectedPosition} />
                    <SolutionWrapper>
                        <Solution hand={selectedHand} stack={selectedStack} position={selectedPosition} />
                    </SolutionWrapper>
                </Column>
            </AppContainer>
        </>
    );
}
