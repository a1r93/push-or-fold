import { Label, SwitchAnimation, SwitchButton, SwitchContainer } from './style';

interface ISwitchProps {
    label?: string;
    isChecked: boolean;
    setIsChecked: (isChecked: boolean) => void;
}

const Switch = ({ isChecked, setIsChecked, label }: ISwitchProps) => (
    <SwitchContainer align="center" justify="flex-end" onClick={() => setIsChecked(!isChecked)}>
        <Label>{label}</Label>
        <SwitchButton $isChecked={isChecked}>
            <SwitchAnimation $isChecked={isChecked} className="toggle" />
        </SwitchButton>
    </SwitchContainer>
);

export default Switch;
