import Section from '../Section';
import { Cell } from '../Section/style';
import { TAnte } from '../Solution/ranges/types';

const positions: TAnte[] = ['ante10', 'ante12'];

const messages = {
    ante10: '10%',
    ante12: '12.5%',
};

interface IProps {
    selectedAnte: TAnte;
    setSelectedAnte: (value: TAnte) => void;
}

const Ante = ({ selectedAnte, setSelectedAnte }: IProps) => {
    const toggleSelectedStack = (ante: TAnte) => {
        setSelectedAnte(ante);
    };

    return (
        <Section grid={4} title="The ante" background="orange" gap={20}>
            {positions.map((ante: TAnte, index: number) => (
                <Cell
                    key={index}
                    isSelected={selectedAnte === ante}
                    onClick={() => toggleSelectedStack(ante)}
                    background="red"
                    selectedBackground="green"
                >
                    {messages[ante]}
                </Cell>
            ))}
        </Section>
    );
};

export default Ante;
