import { Char, SplashScreenContainer, WelcomeContainer } from './style';

const part1 = 'WELCOME TO';
const part2 = 'PUSH OR FOLD';

const SplashScreen = () => (
    <SplashScreenContainer>
        <WelcomeContainer>
            {part1
                .split('')
                .map((letter: string, index: number) =>
                    letter === ' ' ? (
                        <div style={{ display: 'inline', marginLeft: 30 }} />
                    ) : (
                        <Char delay={index}>{letter}</Char>
                    ),
                )}
        </WelcomeContainer>
        <WelcomeContainer>
            {part2
                .split('')
                .map((letter: string, index: number) =>
                    letter === ' ' ? (
                        <div style={{ display: 'inline', marginLeft: 30 }} />
                    ) : (
                        <Char delay={index + part1.length}>{letter}</Char>
                    ),
                )}
        </WelcomeContainer>
        <WelcomeContainer></WelcomeContainer>
    </SplashScreenContainer>
);

export default SplashScreen;
