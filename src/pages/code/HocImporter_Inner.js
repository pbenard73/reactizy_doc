
export default `import { withReactizy } from 'reactizy'

const Component = props => (
    <div>
        <button onClick={() => props.alert.success("Success Message")}>Show Alert</button>

        <button onClick={() => props.history.push("/another-url")}>Go to another Url</button>
    </div>
)

Component.use = ["alert", "router"]

export default withReactizy(Component)`
