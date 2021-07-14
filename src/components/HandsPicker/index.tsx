import { useState } from 'react';
import { DefaultTheme } from 'styled-components';

import { Row } from '../../styles/layouts';
import { getThemeName, persistSelectedTheme, themes } from '../../styles/themes';
import { Button } from '../Button';
import Switch from '../Switch';
import HandsGrid from './HandsGrid';
import { StyledSection } from './style';

interface IProps {
    selectedHand: string | undefined;
    setSelectedHand: (value: string | undefined) => void;
    onReset: () => void;
    setTheme: (theme: DefaultTheme) => void;
}

const HandsPicker = ({ onReset, selectedHand, setSelectedHand, setTheme }: IProps) => {
    const [view, setView] = useState<'grid' | 'inline'>(getThemeName());

    const toggleIsSelected = (value: string) => {
        if (selectedHand === value) {
            setSelectedHand(undefined);
        } else {
            setSelectedHand(value);
        }
    };

    const onSwitchClick = (isChecked: boolean) => {
        const selected = isChecked ? 'inline' : 'grid';
        setView(selected);
        persistSelectedTheme(selected);
        const selectedTheme = themes[selected];
        setTheme(selectedTheme);
    };

    return (
        <StyledSection
            title="Choose a hand"
            grid={13}
            background="secondary"
            headerSlot={
                <Row align="center">
                    <Switch
                        isChecked={view === 'inline'}
                        setIsChecked={onSwitchClick}
                        label={view === 'grid' ? 'Grid view' : 'Card by card'}
                    />
                    <Button onClick={onReset}>Reset all</Button>
                </Row>
            }
        >
            {view === 'grid' ? (
                <HandsGrid selectedHand={selectedHand} toggleIsSelected={toggleIsSelected} />
            ) : (
                <HandsGrid selectedHand={selectedHand} toggleIsSelected={toggleIsSelected} />
            )}
        </StyledSection>
    );
};

export default HandsPicker;
