

export default function Skills() {
    return (
        <section className="skills-section p-4">
            <h2 className="text-2xl font-semibold mb-4 text-center text-3xl">Skills</h2>
            <h3>Frontend</h3>
            <ul className="list-disc list-inside">
                <li>HTML</li>
                <li>CSS - Tailwind CSS</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
            </ul>
            <h3>Backend</h3>
            <ul className="list-disc list-inside">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>NestJS</li>
            </ul>
            <h3>Base de Datos</h3>
            <ul className="list-disc list-inside">
                <li>PostgreSQL</li>
            </ul>
            <h3>Tools</h3>
            <ul className="list-disc list-inside">
                <li>Git</li>
                <li>GitHub</li>
                <li>Postman</li>
                <li>Vercel</li>
                <li>Render</li>
                <li>Supabase</li>
                <li>Visual Studio Code</li>
            </ul>
        </section>
    );
}