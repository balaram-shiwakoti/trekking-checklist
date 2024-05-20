import { useItemsStore } from "../store/itemStore";
import Button from "./Button";

const ButtonGroup = () => {
  const removeAllItem = useItemsStore((state) => state.removeAllItem);
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);

  const secondaryButton = [
    { label: "Mark all as complete", onClick: markAllAsComplete },
    { label: "Mark all as incomplete", onClick: markAllAsIncomplete },
    { label: "Reset to initial", onClick: resetToInitial },
    { label: "Remove all items", onClick: removeAllItem },
  ];

  return (
    <section className="button-group">
      {secondaryButton.map((button) => {
        return (
          <Button
            key={button.label}
            onClick={button.onClick}
            buttonType="secondary"
            label={button.label}
          />
        );
      })}
    </section>
  );
};

export default ButtonGroup;
