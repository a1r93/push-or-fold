import { Label, SwitchAnimation, SwitchButton, SwitchContainer } from './style';

interface ISwitchProps {
    label?: string;
    isChecked: boolean;
    setIsChecked: (isChecked: boolean) => void;
}

const Switch = ({ isChecked, setIsChecked, label }: ISwitchProps) => (
    <SwitchContainer align="center" justify="flex-end" onClick={() => setIsChecked(!isChecked)}>
        <SwitchButton $isChecked={isChecked}>
            <SwitchAnimation $isChecked={isChecked} className="toggle" />
        </SwitchButton>
        <Label>{label}</Label>
    </SwitchContainer>
);

export default Switch;
