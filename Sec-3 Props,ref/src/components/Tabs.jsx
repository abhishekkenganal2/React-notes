export default function Tabs ({children, buttons, ButtonContainer = 'menu'}) {
    return <>
        <menu>
            <ButtonContainer>{buttons}</ButtonContainer>
        </menu>
        {children}
    </>
}