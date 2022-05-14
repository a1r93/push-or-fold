import Section from '../Section';
import { Oval } from '../Section/style';
import { TPosition } from '../Solution/ranges/types';

const positions: TPosition[] = ['SB', 'BTN', 'CO', 'HJ', 'B-3', 'B-4', 'B-5', 'B-6'];

interface IProps {
    selectedPosition: TPosition | undefined;
    setSelectedPosition: (value: TPosition | undefined) => void;
}

const Position = ({ selectedPosition, setSelectedPosition }: IProps) => {
    const toggleSelectedStack = (position: TPosition) => {
        if (selectedPosition === position) {
            setSelectedPosition(undefined);
        } else {
            setSelectedPosition(position);
        }
    };

    return (
        <Section grid={4} title="Your position" background="secondary" margin={[0, 0, 12]} gap={6}>
            {positions.map((position: TPosition, index: number) => (
                <Oval
                    key={index}
                    isSelected={selectedPosition === position}
                    onClick={() => toggleSelectedStack(position)}
                    background="primary"
                    selectedBackground="selected"
                >
                    {position}
                </Oval>
            ))}
        </Section>
    );
};

export default Position;
