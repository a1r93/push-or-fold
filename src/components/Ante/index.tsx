import Section from '../Section';
import { Oval } from '../Section/style';
import { TAnte } from '../Solution/ranges/types';

const antes: TAnte[] = ['ante0', 'ante10', 'ante12', 'ante20'];

const messages = {
    ante0: 'O%',
    ante10: '10%',
    ante12: '12.5%',
    ante20: '20%',
};

interface IProps {
    selectedAnte: TAnte | undefined;
    setSelectedAnte: (value: TAnte) => void;
}

const Ante = ({ selectedAnte, setSelectedAnte }: IProps) => {
    const toggleSelectedStack = (ante: TAnte) => {
        setSelectedAnte(ante);
    };

    return (
        <Section grid={4} title="The ante" background="secondary" gap={8}>
            {antes.map((ante: TAnte, index: number) => (
                <Oval
                    key={index}
                    isSelected={selectedAnte === ante}
                    onClick={() => toggleSelectedStack(ante)}
                    background="primary"
                    selectedBackground="selected"
                >
                    {messages[ante]}
                </Oval>
            ))}
        </Section>
    );
};

export default Ante;
