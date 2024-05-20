const Counter = ({ packedItems, totalItems }) => {
  return (
    <p>
      <b>{packedItems}</b>/{totalItems} items packed
    </p>
  );
};

export default Counter;
