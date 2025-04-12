import chefLogo from '../assets/chefLogo.svg'

export default function Header() 
{
    return (
        <header>
            <div className="header">
                <img className="logo" src={ chefLogo } alt="chef logo" />
                <span>CHEF CLAUDE</span>
            </div>
            <div className="intro">Enter 5 ingredients you have at home, and let Chef Momo suggest a delicious recipe complete with easy-to-follow cooking instructions!</div>
        </header>
    )
}