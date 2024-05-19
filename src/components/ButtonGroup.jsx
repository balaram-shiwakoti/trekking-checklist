
import Button from "./Button";
import { useItemsContext } from "../lib/hooks";

const ButtonGroup = () => {
    const { handleMarkAllAsComplete, handleMarkAllAsIncomplete, handleResetToInitial, handleRemoveAllItem } = useItemsContext()

    const secondaryButton = [
        { label: "Mark all as complete", onClick: handleMarkAllAsComplete },
        { label: "Mark all as incomplete", onClick: handleMarkAllAsIncomplete },
        { label: "Reset to initial", onClick: handleResetToInitial },
        { label: "Remove all items", onClick: handleRemoveAllItem },
    ];

    return (
        <section className="button-group">
            {secondaryButton.map((button) => {
                return (
                    <Button
                        key={button.label + button.onClick.toString()}
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
