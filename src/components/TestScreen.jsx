import FuzzyText from "./FuzzyText"

const TestScreen = () => {
    return(
        <div className="min-h-screen w-full">
            <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover
                fontSize="8rem"
            >
                Test Screen
            </FuzzyText>
        </div>
    )
}

export default TestScreen;