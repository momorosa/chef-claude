import chefLogo from '../assets/chefLogo.svg'

export default function Header() 
{
    return (
        <header>
            <div className="header">
                <img className="logo" src={ chefLogo } alt="chef logo" />
                <span>CHEF CLAUDE</span>
            </div>
        </header>
    )
}