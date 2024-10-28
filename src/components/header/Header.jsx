import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Вёсла-ремёсла
					</strong>
				</h1>
				<div className="header__text htext">
					<p>Межкампусный проект НИУ ВШЭ</p>
				</div>
				<Link to="/map" className="button header-button">
                    Интерактивная карта
                </Link>
			</div>
		</header>
	);
}

export default Header;