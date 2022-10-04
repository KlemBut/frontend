const Hamburger = ({ isOpen }) => {
    const burgerOneStyle = {
        transform: isOpen? "rotate(45deg)" : "rotate(0)"
    }

    const burgerTwoStyle = {
        transform: isOpen? "translateX(100%)" : "translateX(0)",
        opacity: isOpen? 0:1
    }

    const burgerThreeStyle = {
        transform: isOpen? "rotate(-45deg)" : "rotate(0)"
    }

    return(
        <div className="hamburger">
            <div className="burger burger1" style={burgerOneStyle}></div>
            <div className="burger burger2" style={burgerTwoStyle}></div>
            <div className="burger burger3" style={burgerThreeStyle}></div>
        </div>
    )
}

export default Hamburger