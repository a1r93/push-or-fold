import { useState } from 'react';

import Ante from './components/Ante';
import HandsPicker from './components/HandsPicker';
import Position from './components/Position';
import Solution from './components/Solution';
import { TAnte, TPosition } from './components/Solution/ranges/types';
import StackSize from './components/StackSize';
import { AppContainer, Column, SolutionWrapper } from './style';
import { GlobalStyle } from './styles/GlobalStyle';

export function App() {
    const [selectedHand, setSelectedHand] = useState<string | undefined>(undefined);
    const [selectedPosition, setSelectedPosition] = useState<TPosition | undefined>(undefined);
    const [selectedStack, setSelectedStack] = useState<number | undefined>(undefined);
    const [selectedAnte, setSelectedAnte] = useState<TAnte>('ante10');

    const resetAll = () => {
        setSelectedHand(undefined);
        setSelectedPosition(undefined);
        setSelectedStack(undefined);
    };

    return (
        <>
            <GlobalStyle />
            <AppContainer>
                <HandsPicker selectedHand={selectedHand} setSelectedHand={setSelectedHand} onReset={resetAll} />
                <Column>
                    <Ante selectedAnte={selectedAnte} setSelectedAnte={setSelectedAnte} />
                    <StackSize setSelectedStack={setSelectedStack} selectedStack={selectedStack} />
                    <Position setSelectedPosition={setSelectedPosition} selectedPosition={selectedPosition} />
                    <SolutionWrapper>
                        <Solution
                            hand={selectedHand}
                            stack={selectedStack}
                            position={selectedPosition}
                            ante={selectedAnte}
                        />
                    </SolutionWrapper>
                </Column>
            </AppContainer>
        </>
    );
}
