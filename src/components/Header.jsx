import Counter from "./Counter"
import Logo from "./Logo"

import { useItemsContext } from "../lib/hooks"

const Header = () => {
  const { items } = useItemsContext()
  return (
    <header>

      <Logo />
      <Counter totalItems={items.length} packedItems={items.filter((item) => item.packed).length} />
    </header>
  )
}

export default Header