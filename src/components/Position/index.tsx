import Section from '../Section';
import { Cell } from '../Section/style';
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
        <Section grid={4} title="Your position" background="orange" margin={[0, 0, 16]} gap={20}>
            {positions.map((position: TPosition, index: number) => (
                <Cell
                    key={index}
                    isSelected={selectedPosition === position}
                    onClick={() => toggleSelectedStack(position)}
                    background="red"
                    selectedBackground="green"
                >
                    {position}
                </Cell>
            ))}
        </Section>
    );
};

export default Position;
