import Button from "./Button"


const secondaryButtons = [
    "Mark all as complete",
    "Mark all as incomplete",
    "Reset to initial",
    "Remove all items"
]
const ButtonGroup = () => {

    return (
        <section className="button-group">
            {secondaryButtons.map((text) => (

                <Button key={text} type="secondary" label={text} />
            ))
            }

        </section>
    )
}

export default ButtonGroup