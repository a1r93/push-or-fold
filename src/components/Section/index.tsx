import { ReactElement } from 'react';

import { Color } from '../../colors';
import { Header, SectionContainer, SectionWrapper, Title } from './style';

interface ISectionProps {
    background: Color;
    title: string;
    headerSlot?: ReactElement;
    children: ReactElement | ReactElement[] | ReactElement[][];
    grid: number;
    span?: number;
    margin?: number[];
    gap?: number;
}

const Section = ({ background, title, headerSlot, children, grid, span, margin, gap = 4 }: ISectionProps) => {
    return (
        <SectionContainer background={background} span={span} margin={margin}>
            <Header>
                <Title>{title}</Title>
                {headerSlot}
            </Header>
            <SectionWrapper grid={grid} gap={gap}>
                {children}
            </SectionWrapper>
        </SectionContainer>
    );
};

export default Section;
