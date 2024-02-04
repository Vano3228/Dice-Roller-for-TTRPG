function Welcome() {
    return(
        <div className="main">
            <div className="welcome">
                <h1>Добро пожаловать в DiceRoller</h1>
                <h1>Выберите страницу</h1>
                <div className="navButt">
                    <a href="dice">
                        <h1>Dices</h1>
                    </a>
                </div>
                <div className="navButt">
                    <a href="roll">
                        <h1>Skill Rolls</h1>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Welcome