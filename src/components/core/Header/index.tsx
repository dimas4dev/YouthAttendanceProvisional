import DisneyIcon from '../../../assets/DisneyIcon.svg';
import { InputComponent } from '../Input';
import { Link } from 'wouter';
import { useInputChange } from '../../../hooks/handleInputChange';

interface HeaderProps {
    isLogin?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isLogin = false }) => {

    const { value, onChange } = useInputChange();

    const linksHeader = [
        { name: 'Home', path: '/' },
        { name: 'Watchlist', path: '/watchlist' },
        { name: 'Movies', path: '/movies' },
        { name: 'Series', path: '/series' },
        { name: 'Originals', path: '/originals' },
    ]



    return (
        <>
            {isLogin ? (
                <header className="flex justify-between items-center p-4">
                    <img src={DisneyIcon} alt="DisneyIcon" className="h-24 p-2" />
                    <InputComponent type='text' placeholder='Ingresa lo que deseas buscar' onChange={onChange} value={value} />
                    <nav>
                        <ul className="flex space-x-4 text-white">
                            {linksHeader.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.path}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>
            ) :
                <header className='flex justify-center items-center h-24'> {/* Altura de ejemplo, ajusta según tus necesidades */}
                    <img className="h-auto max-h-full" src={DisneyIcon} alt="DisneyIcon" />
                </header>}
        </>
    )
}