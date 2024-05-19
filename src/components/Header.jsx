import Counter from "./Counter"
import Logo from "./Logo"

const Header = ({ totalItems, packedItems }) => {
  return (
    <header>

      <Logo />
      <Counter packedItems={packedItems} totalItems={totalItems} />
    </header>
  )
}

export default Header