export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
}

const NavbarItem = ({ onClick, name }: Props) => {
  return (
    <li>
      <button onClick={onClick} className="group tracking-widest transition duration-500">
        {name}
        <span className="block h-1 scale-0 rounded-full bg-gray-700 transition-all duration-500 group-hover:max-w-full group-hover:scale-110 group-hover:bg-black"></span>
      </button>
    </li>
  )
}

export default NavbarItem
