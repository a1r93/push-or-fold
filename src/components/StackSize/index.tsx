import Section from '../Section';
import { Cell } from '../Section/style';

interface IProps {
    selectedStack: number | undefined;
    setSelectedStack: (value: number | undefined) => void;
}

const StackSize = ({ selectedStack, setSelectedStack }: IProps) => {
    const toggleSelectedStack = (stack: number) => {
        if (selectedStack === stack) {
            setSelectedStack(undefined);
        } else {
            setSelectedStack(stack);
        }
    };

    return (
        <Section grid={5} title="Choose a stack" background="orange">
            {[...Array(20)].map((elemnt, index: number) => (
                <Cell
                    key={index}
                    isSelected={selectedStack === index + 1}
                    onClick={() => toggleSelectedStack(index + 1)}
                    background={'red'}
                    selectedBackground="green"
                >
                    {index + 1}
                </Cell>
            ))}
        </Section>
    );
};

export default StackSize;
