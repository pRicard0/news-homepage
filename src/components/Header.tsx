import Logo from "../assets/images/logo"
import IconMenu from "../assets/images/IconMenu"
import MenuClose from "../assets/images/MenuClose"

type MenuProps = {
    text: string
}

function MenuItem(props: MenuProps) {
    return (
        <li className="text-left">
            <button type="button" className="hover:text-Soft-Red transition">
                <span className='text-lg font-Inter sm'>{props.text}</span>
            </button>
        </li>
    )
}
export default function Header() {
    
    const openMenu = () => {
      const menu = document.getElementById('menu');
      const modal = document.getElementById('modal');
      if (menu && modal) {
        menu.classList.remove('translate-x-64');
        menu.classList.add('translate-x-0');
        modal.classList.remove('-translate-x-full');
        modal.classList.add('-translate-x-0');
      }
    };
  
    const closeMenu = () => {
      const menu = document.getElementById('menu');
      const modal = document.getElementById('modal');
      if (menu && modal) {
        menu.classList.remove('translate-x-0');
        menu.classList.add('translate-x-64');
        modal.classList.remove('-translate-x-0');
        modal.classList.add('-translate-x-full');
      }
    };
  
    return (
      <div className="flex items-center justify-between mb-4">
        <Logo></Logo>
        <nav className="min-h-full max-md:hidden max-md:aria-hidden">
          <ul className="flex space-x-8 text-Dark-Grayish-Blue">
            <MenuItem text="Home" />
            <MenuItem text="News" />
            <MenuItem text="Popular" />
            <MenuItem text="Trending" />
            <MenuItem text="Categories" />
          </ul>
        </nav>
        <nav className="md:hidden md:aria-hidden">
          <button type="button" id="menu-button" onClick={openMenu}>
            <IconMenu></IconMenu>
          </button>
          <div
            id="modal"
            className="w-screen h-screen -translate-x-full transition duration-300 bg-black opacity-60 fixed top-0 right-0 z-10"
            onClick={closeMenu}
          ></div>
          <div
            id="menu"
            className="bg-white w-64 p-6 h-full fixed top-0 right-0 translate-x-64 transition z-20"
          >
            <div className="flex justify-end mb-16">
              <button type="button" id="close-button" onClick={closeMenu}>
                <MenuClose></MenuClose>
              </button>
            </div>
            <div>
              <ul className="space-y-4">
                <MenuItem text="Home" />
                <MenuItem text="News" />
                <MenuItem text="Popular" />
                <MenuItem text="Trending" />
                <MenuItem text="Categories" />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }