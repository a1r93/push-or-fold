import { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import Ante from './components/Ante';
import HandsPicker from './components/HandsPicker';
import Position from './components/Position';
import Solution from './components/Solution';
import { TAnte, TPosition } from './components/Solution/ranges/types';
import StackSize from './components/StackSize';
import { AppContainer, Column, SolutionWrapper } from './style';
import { GlobalStyle } from './styles/GlobalStyle';
import { getPersistedSelectedTheme } from './styles/themes';

export function App() {
    const [selectedHand, setSelectedHand] = useState<string | undefined>(undefined);
    const [selectedPosition, setSelectedPosition] = useState<TPosition | undefined>(undefined);
    const [selectedStack, setSelectedStack] = useState<number | undefined>(undefined);
    const [selectedAnte, setSelectedAnte] = useState<TAnte>('ante10');
    const [theme, setTheme] = useState<DefaultTheme>(getPersistedSelectedTheme());

    const resetAll = () => {
        setSelectedHand(undefined);
        setSelectedPosition(undefined);
        setSelectedStack(undefined);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AppContainer>
                <HandsPicker
                    selectedHand={selectedHand}
                    setSelectedHand={setSelectedHand}
                    onReset={resetAll}
                    setTheme={setTheme}
                />
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
        </ThemeProvider>
    );
}
