<h1>React</h1>

<h2><a href="https://react.dev/learn/installation">Installation</a></h2>
<ol>
    <li>Start a New React Project</li>
    <table>
        <tr>
            <th rowspan="4">Frameworks</th>
            <td>Next.js</td>
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
    <li>Updating Arrays in State</li>
</ol>