import Button from "./Button"
import { secondaryButtons } from "../lib/constants"



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