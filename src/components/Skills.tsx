const Skills: React.FC = () => {
    // https://techicons.dev/
    // https://az-icons.com/
    const logos = [
        {
            techStackIcons:
                [
                    "https://icon.icepanel.io/Technology/svg/C%23-%28CSharp%29.svg",
                    "https://icon.icepanel.io/Technology/svg/Node.js.svg",
                    "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
                    "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
                    "https://icon.icepanel.io/Technology/svg/React.svg",
                    "https://icon.icepanel.io/Technology/svg/HTML5.svg",
                    "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
                    "https://icon.icepanel.io/Technology/svg/MySQL.svg",
                    "https://icon.icepanel.io/Technology/svg/Azure-SQL-Database.svg",
                    "https://icon.icepanel.io/Technology/png-shadow-512/Microsoft-SQL-Server.png",
                    "https://icon.icepanel.io/Technology/svg/Bootstrap.svg",
                    "https://icon.icepanel.io/Technology/svg/CSS3.svg"
                ]
        },
        {
            toolsIcons: [
                "https://icon.icepanel.io/Technology/svg/Argo-CD.svg",
                "https://icon.icepanel.io/Technology/svg/Azure.svg",
                "https://icon.icepanel.io/Technology/svg/Azure-Devops.svg",
                "https://icon.icepanel.io/Technology/svg/Confluence.svg",
                "https://icon.icepanel.io/Technology/svg/Docker.svg",
                "https://icon.icepanel.io/Technology/svg/.NET.svg",
                "https://icon.icepanel.io/Technology/svg/.NET-core.svg",
                "https://icon.icepanel.io/Technology/png-shadow-512/Elastic-Search.png",
                "https://icon.icepanel.io/Technology/svg/Figma.svg",
                "https://icon.icepanel.io/Technology/svg/Git.svg",
                "https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg",
                "https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png",
                "https://icon.icepanel.io/Technology/svg/Grafana.svg",
                "https://icon.icepanel.io/Technology/png-shadow-512/Helm.png",
                "https://icon.icepanel.io/Technology/svg/Jest.svg",
                "https://icon.icepanel.io/Technology/svg/jQuery.svg",
                "https://icon.icepanel.io/Technology/svg/Kibana.svg",
                "https://icon.icepanel.io/Technology/svg/Kubernetes.svg",
                "https://icon.icepanel.io/Technology/svg/NGINX.svg",
                "https://icon.icepanel.io/Technology/svg/NPM.svg",
                "https://icon.icepanel.io/Technology/svg/NuGet.svg",
                "https://icon.icepanel.io/Technology/svg/OpenTelemetry.svg",
                "https://icon.icepanel.io/Technology/svg/Playwrite.svg",
                "https://icon.icepanel.io/Technology/svg/Podman.svg",
                "https://icon.icepanel.io/Technology/svg/Prometheus.svg",
                "https://icon.icepanel.io/Technology/svg/Postman.svg",
                "https://icon.icepanel.io/Technology/svg/Redis.svg",
                "https://icon.icepanel.io/Technology/svg/SonarQube.svg",
                "https://icon.icepanel.io/Technology/svg/Slack.svg",
                "https://icon.icepanel.io/Technology/svg/Swagger.svg",
                "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
                "https://icon.icepanel.io/Technology/svg/Vite.js.svg",
                "https://icon.icepanel.io/Technology/svg/HashiCorp-Terraform.svg",
                "https://az-icons.com/export/icons/a39e7fd3307ff56cc26d5a64eec7bf3f.svg"
            ]
        }
    ]

    return (
        <div className='ml-4 mr-4'>
            <h3 className="text-3xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-tight whitespace-nowrap overflow-hidden font-bold">
                Skills & Experience
            </h3>
            <div className="w-[25%] h-1 bg-red-500 mb-3 mx-auto"></div>
        </div>
    )
}

export default Skills;
