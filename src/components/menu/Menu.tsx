import Brand from "./Brand";
import "./menu_style.css"
import MenuItems from "./MenuItems";

interface ButtonProps {

}




const Menu: React.FC<ButtonProps> = () => {

    const data = [
        {
            "label": "Proyecto 1",
            "to": "",
            "items": [
                {
                    "label": "Proyecto 2",
                    "to": "",
                    "items": [
                        {
                            "label": "Proyecto 3",
                            "to": "",
                            "items": []
                        }
                    ]
                },
                {
                    "label": "MENU",
                    "to": "",
                    "items": []
                }
            ]
        }
    ];

    return (
        <header className="header" id="header">
            <nav className="navbar container">
                <Brand label="Juridica"></Brand>
                <div className="burger" id="burger">
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </div>
                <div className="menu" id="menu">
                    <MenuItems items={data}></MenuItems>
                </div>
                <button className="switch" id="switch">
                    <i className="switch-light bx bx-sun"></i>
                    <i className="switch-dark bx bx-moon"></i>
                </button>
            </nav>
        </header>
    );


};

export default Menu;