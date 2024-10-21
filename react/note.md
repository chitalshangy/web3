<h1><a href="https://react.dev">React</a></h1>

<h2><a href="https://react.dev/learn/installation">Installation</a></h2>
<ol>
    <li>Start a New React Project</li>
    <table>
        <tr>
            <th rowspan="4">Frameworks</th>
            <td><a href="https://nextjs.org/">Next.js</a></td>
            <td>npx create-next-app@latest</td>
        </tr>
        <tr>
            <td>Remix</td>
            <td>npx create-remix</td>   
        </tr>
        <tr>
            <td>Gatsby</td>
            <td>npx create-gatsby</td>   
        </tr>
        <tr>
            <td>Expo(for native apps)</td>
            <td>npx create-expo-app</td>   
        </tr>
    </table>
    <li>Add React to an Existing Project</li>
    <li>Editor Setup</li>
    <li>Using TypeScript</li>
    <li>Developer Tools</li>
    <li>React Compiler(experimental)</li>
</ol>

<h2><a href="https://react.dev/learn/describing-the-ui">Describing the UI</a></h2>
<ol>
    <li>First Component</li>
    <li>Importing and Exporting Components</li>
    <li>Writing Markup with JSX</li>
    <li>JavaScript in JSX with Curly Braces</li>
    <li>Passing Props to a Component</li>
    <li>Conditional Rendering</li>
    <li>Rendering Lists</li>
    <li>Keeping Components Pure</li>
    <li>UI as a Tree</li>
</ol>

<h2><a href="https://react.dev/learn/adding-interactivity">Adding Interactivity</a></h2>
<ol>
    <li>Responding to Events</li>
    <table>
        <tr>
            <th rowspan="2">Event propagation</th>
            <td>Stopping propagation : e.stopPropagation()</td>
        </tr>
        <tr>
            <td>Preventing default behavior : e.preventDefault()</td>
        </tr>
    </table>
    <li>State: A Component's Memory</li>
    <li>Render and Commit</li>
    <table>
        <tr>
            <td>Trigger a render</td>
        </tr>
        <tr>
            <td>React renders your components</td>
        </tr>
        <tr>
            <td>React commits changes to the DOM</td>
        </tr>
    </table>
    <li>State as a Snapshot(Component-based)</li>
    <li>Queueing a Series of State Updates</li>
    <li>Updating Objects in State(Replace rather than update)</li>
    <table>
        <tr>
            <td>Treat state as read-only </td>
        </tr>
        <tr>
            <td>Copying objects with the spread syntax(...)</td>
        </tr>
        <tr>
            <td>Updating a nested object: Objects are not really nested, they are pointed</td>
        </tr>
        <tr>
            <td>Write concise update logic with Immer(Proxy)</td>
        </tr>
    </table>
    <li>Updating Arrays in State(Replace rather than update)</li>
</ol>

<h2><a href="https://react.dev/learn/managing-state">Managing State</a></h2>
<ol>
    <li>Reacting to Input with State</li>
    <li>Choosing the State Structure</li>
    <table>
        <tr>
            <td>Group related state</td>
        </tr>
        <tr>
            <td>Avoid contradictions in state </td>
        </tr>
        <tr>
            <td>Avoid redundant state</td>
        </tr>
        <tr>
            <td>Avoid duplication in state</td>
        </tr>
        <tr>
            <td>Avoid deeply nested state</td>
        </tr>
    </table>
    <li>Sharing State Between Components</li>
    <li>Preserving and Resetting State</li>
    <li>Extracting State Logic into a Reducer<li>
    <li>Passing Data Deeply with Context</li>
    <li>Scaling Up with Reducer and Context</li>
</ol>

<h2><a href="https://react.dev/learn/escape-hatches">Escape Hatches</a></h2>
<ol>
    <li>Referencing Values with Refs</li>
        <table>
        <tr>
            <td>refs let you retain information between re-renders of a component</td>
        </tr>
        <tr>
            <td>setting the ref’s current value does not trigger a re-render</td>
        </tr>
    </table>
    <li>Manipulating the DOM with Refs</li>
    <li>Synchronizing with Effects</li>
    <table>
        <tr>
            <td>Declare an Effect</td>
        </tr>
        <tr>
            <td>Specify the Effect dependencies</td>
        </tr>
        <tr>
            <td>Add cleanup</td>
        </tr>
    </table>
    <li>You Might Not Need an Effect</li>
    <li>Lifecycle of Reactive Effects</li>
    <table>
        <tr>
            <td>Each Effect has a separate lifecycle from the surrounding component</td>
        </tr>
        <tr>
            <td>Each Effect describes a separate synchronization process that can start and stop</td>
        </tr>
    </table>
    <li>Separating Events from Effects</li>
    <li>Removing Effect Dependencies</li>
    <table>
        <tr>
            <td>Dependencies should always match the code</td>
        </tr>
    </table>
    <li>Reusing Logic with Custom Hooks</li>
</ol>

<h1><a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs">Node.js</a></h1>


<h1><a href="https://www.typescriptlang.org">TypeScript</a></h1>
