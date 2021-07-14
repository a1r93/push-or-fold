import { useState } from 'react';

import { Row } from '../../styles/layouts';
import { Button } from '../Button';
import Switch from '../Switch';
import HandsGrid from './HandsGrid';
import { StyledSection } from './style';

interface IProps {
    selectedHand: string | undefined;
    setSelectedHand: (value: string | undefined) => void;
    onReset: () => void;
}

const HandsPicker = ({ onReset, selectedHand, setSelectedHand }: IProps) => {
    const [view, setView] = useState<'grid' | 'individual'>('grid');

    const toggleIsSelected = (value: string) => {
        if (selectedHand === value) {
            setSelectedHand(undefined);
        } else {
            setSelectedHand(value);
        }
    };

    const onSwitchClick = (isChecked: boolean) => {
        setView(isChecked ? 'individual' : 'grid');
    };

    return (
        <StyledSection
            title="Choose a hand"
            grid={13}
            background="orange"
            headerSlot={
                <Row align="center">
                    <Switch
                        isChecked={view === 'individual'}
                        setIsChecked={onSwitchClick}
                        label={view === 'grid' ? 'Grid view' : 'List view'}
                    />
                    <Button onClick={onReset}>Reset all</Button>
                </Row>
            }
        >
            {view === 'grid' ? <HandsGrid selectedHand={selectedHand} toggleIsSelected={toggleIsSelected} /> : <div />}
        </StyledSection>
    );
};

export default HandsPicker;
