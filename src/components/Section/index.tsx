import { ReactElement } from 'react';

import { Row } from '../../styles/layouts';
import { TPaletteColors } from '../../styles/themes/types';
import { SectionContainer, SectionWrapper, Title } from './style';

interface ISectionProps {
    background: TPaletteColors;
    title: string;
    headerSlot?: ReactElement;
    children: ReactElement | ReactElement[] | ReactElement[][];
    grid: number;
    span?: number;
    margin?: number[];
    gap?: number;
}

const Section = ({
    background,
    title,
    headerSlot,
    children,
    grid,
    span,
    margin,
    gap = 4,
    ...styledComponentsProps
}: ISectionProps) => {
    return (
        <SectionContainer background={background} span={span} margin={margin} {...styledComponentsProps}>
            <Row justify="space-between" align="center" padding={[0, 0, 2]}>
                <Title>{title}</Title>
                {headerSlot}
            </Row>
            <SectionWrapper grid={grid} gap={gap}>
                {children}
            </SectionWrapper>
        </SectionContainer>
    );
};

export default Section;
