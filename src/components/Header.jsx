import Counter from "./Counter";
import Logo from "./Logo";

import { useItemsStore } from "../store/itemStore";

const Header = () => {
  const items = useItemsStore((state) => state.items);
  return (
    <header>
      <Logo />
      <Counter
        totalItems={items.length}
        packedItems={items.filter((item) => item.packed).length}
      />
    </header>
  );
};

export default Header;
