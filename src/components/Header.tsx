import Logo from "../assets/images/logo"
import IconMenu from "../assets/images/IconMenu"
import MenuClose from "../assets/images/MenuClose"

type MenuProps = {
    text: string
}

function MenuItem(props: MenuProps) {
    return (
        <li className="text-left">
            <button type="button">
                <span className='text-lg font-Inter'>{props.text}</span>
            </button>
        </li>
    )
}

export default function Header(){
    const menu = document.getElementById('menu')
    const modal = document.getElementById('modal')
    const openMenu = () => {
        if(menu && modal) {
            menu.classList.remove('translate-x-64')
            menu.classList.add('translate-x-0')
            modal.classList.remove('-translate-x-full')
            modal.classList.add('-translate-x-0')
        }
    }
    const closeMenu = () => {
        if(menu && modal) {
            menu.classList.remove('translate-x-0')
            menu.classList.add('translate-x-64')
            modal.classList.remove('-translate-x-0')
            modal.classList.add('-translate-x-full')
        }
    }

    return (
        <div className="flex items-center justify-between mb-4">
            <Logo></Logo>
            <nav>
                <button type="button" id="menu-button" onClick={openMenu}>
                    <IconMenu></IconMenu>
                </button>
                <div id="modal" className="w-screen h-screen -translate-x-full transition duration-300 bg-black opacity-50 fixed top-0 right-0 z-10" onClick={closeMenu}></div>
                <div id="menu" className="bg-white w-64 p-6 h-full fixed top-0 right-0 translate-x-64 transition z-20">
                    <div className="flex justify-end mb-16">
                        <button type="button" id="close-button" onClick={closeMenu}>
                            <MenuClose></MenuClose>
                        </button>
                    </div>
                    <div>
                        <ul className="space-y-4">
                            <MenuItem text="Home"/>
                            <MenuItem text="News"/>
                            <MenuItem text="Popular"/>
                            <MenuItem text="Trending"/>
                            <MenuItem text="Categories"/>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}   