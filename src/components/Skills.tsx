import { useEffect, useRef, useState } from "react";

const SectionHeading: React.FC<{ children: string; color?: 'red' | 'blue' }> = ({ children, color = 'blue' }) => (
    <div className="mb-8">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-2">
            {color === 'blue' ? '— Personal' : '— Career'}
        </p>
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-3">
            {children}
        </h3>
        <div className={`h-[3px] w-12 ${color === 'blue' ? 'bg-blue-600' : 'bg-red-500'}`} />
    </div>
);

type SkillCategory = {
    title: string;
    icons: string[];
};

const logos: SkillCategory[] = [
    {
        title: "Frameworks & Libraries",
        icons: [
            "https://icon.icepanel.io/Technology/svg/React.svg",
            "https://icon.icepanel.io/Technology/svg/Node.js.svg",
            "https://icon.icepanel.io/Technology/svg/.NET.svg",
            "https://icon.icepanel.io/Technology/svg/.NET-core.svg",
            "https://icon.icepanel.io/Technology/svg/Bootstrap.svg",
            "https://icon.icepanel.io/Technology/svg/jQuery.svg",
            "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
        ],
    },
    {
        title: "Cloud & Infrastructure",
        icons: [
            "https://icon.icepanel.io/Technology/svg/Azure.svg",
            "https://icon.icepanel.io/Technology/svg/Docker.svg",
            "https://icon.icepanel.io/Technology/svg/Kubernetes.svg",
            "https://icon.icepanel.io/Technology/svg/NGINX.svg",
            "https://icon.icepanel.io/Technology/svg/Podman.svg",
            "https://icon.icepanel.io/Technology/svg/HashiCorp-Terraform.svg",
            "https://icon.icepanel.io/Technology/png-shadow-512/Helm.png",
        ],
    },
    {
        title: "DevOps & CI/CD",
        icons: [
            "https://icon.icepanel.io/Technology/svg/Azure-Devops.svg",
            "https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg",
            "https://icon.icepanel.io/Technology/svg/Argo-CD.svg",
        ],
    },
    {
        title: "Programming Languages",
        icons: [
            "https://icon.icepanel.io/Technology/svg/C%23-%28CSharp%29.svg",
            "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
            "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
            "https://icon.icepanel.io/Technology/svg/HTML5.svg",
            "https://icon.icepanel.io/Technology/svg/CSS3.svg",
        ],
    },
    {
        title: "Databases",
        icons: [
            "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
            "https://icon.icepanel.io/Technology/svg/MySQL.svg",
            "https://icon.icepanel.io/Technology/svg/Azure-SQL-Database.svg",
            "https://icon.icepanel.io/Technology/png-shadow-512/Microsoft-SQL-Server.png",
            "https://icon.icepanel.io/Technology/svg/Redis.svg",
            "https://icon.icepanel.io/Technology/png-shadow-512/Elastic-Search.png",
        ],
    },
    {
        title: "Development Tools",
        icons: [
            "https://icon.icepanel.io/Technology/svg/Git.svg",
            "https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png",
            "https://icon.icepanel.io/Technology/svg/NPM.svg",
            "https://icon.icepanel.io/Technology/svg/NuGet.svg",
            "https://icon.icepanel.io/Technology/svg/Jest.svg",
            "https://icon.icepanel.io/Technology/svg/Playwrite.svg",
            "https://icon.icepanel.io/Technology/svg/Postman.svg",
            "https://icon.icepanel.io/Technology/svg/Swagger.svg",
            "https://icon.icepanel.io/Technology/svg/Vite.js.svg",
            "https://az-icons.com/export/icons/a39e7fd3307ff56cc26d5a64eec7bf3f.svg",
        ],
    },
    {
        title: "Monitoring & Observability",
        icons: [
            "https://icon.icepanel.io/Technology/svg/Grafana.svg",
            "https://icon.icepanel.io/Technology/svg/Prometheus.svg",
            "https://icon.icepanel.io/Technology/svg/Kibana.svg",
            "https://icon.icepanel.io/Technology/svg/OpenTelemetry.svg",
            "https://icon.icepanel.io/Technology/svg/SonarQube.svg",
        ],
    },
    {
        title: "Collaboration Tools",
        icons: [
            "https://icon.icepanel.io/Technology/svg/Confluence.svg",
            "https://icon.icepanel.io/Technology/svg/Slack.svg",
            "https://icon.icepanel.io/Technology/svg/Figma.svg",
        ],
    },
    {
        title: "Others",
        icons: [
            "https://www.svgrepo.com/show/354135/oauth.svg",
            "https://nbomber.com/assets/img/nbomber-logo.svg",
            "https://icon.icepanel.io/Technology/svg/RabbitMQ.svg",
            "https://www.svgrepo.com/show/452062/microsoft.svg",
        ],
    }
];

const CATEGORIES_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(logos.length / CATEGORIES_PER_PAGE);

function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, inView };
}

type SkillRowProps = {
    category: SkillCategory;
    animationDelay?: number;
    animating: boolean;
    direction: "left" | "right" | null;
};

const SkillRow: React.FC<SkillRowProps> = ({ category, animationDelay = 0, animating, direction }) => {
    const { ref, inView } = useInView();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const updateScrollState = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 4);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        updateScrollState();
        el.addEventListener("scroll", updateScrollState, { passive: true });
        window.addEventListener("resize", updateScrollState);
        return () => {
            el.removeEventListener("scroll", updateScrollState);
            window.removeEventListener("resize", updateScrollState);
        };
    }, []);

    const scroll = (dir: "left" | "right") => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollBy({ left: dir === "right" ? 280 : -280, behavior: "smooth" });
    };

    const slideClass = animating && direction
        ? direction === "right"
            ? "skills-slide-in-right"
            : "skills-slide-in-left"
        : "";

    return (
        <div
            ref={ref}
            className={`mb-8 transition-all duration-700 ease-out ${slideClass}`}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView && !animating ? "translateY(0)" : inView && animating ? undefined : "translateY(28px)",
                transitionDelay: animating ? `${animationDelay}ms` : `${animationDelay}ms`,
            }}
        >
            <h4 className="text-xs sm:text-sm md:text-base font-semibold mb-3 text-neutral-300 uppercase tracking-widest">
                {category.title}
            </h4>

            <div className="relative">
                {/* Left fade + arrow */}
                <div
                    className="absolute left-0 top-0 h-full w-12 z-10 flex items-center justify-start pointer-events-none transition-opacity duration-300"
                    style={{
                        opacity: canScrollLeft ? 1 : 0,
                        background: "linear-gradient(to right, rgba(10,10,10,0.9), transparent)",
                    }}
                >
                    <button
                        onClick={() => scroll("left")}
                        className="pointer-events-auto ml-1 w-7 h-7 flex items-center justify-center text-white/70 hover:text-white text-xl leading-none transition-colors"
                    >
                        ‹
                    </button>
                </div>

                {/* Scrollable row */}
                <div
                    ref={scrollRef}
                    className="flex flex-row gap-2 overflow-x-auto scroll-smooth"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {category.icons.map((src, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 flex items-center justify-center bg-neutral-800 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 p-2.5 hover:scale-105 transition-transform duration-200"
                            style={{
                                opacity: inView ? 1 : 0,
                                transform: inView ? "scale(1)" : "scale(0.75)",
                                transition: `opacity 0.35s ease ${animationDelay + i * 45}ms, transform 0.35s ease ${animationDelay + i * 45}ms`,
                            }}
                        >
                            <img
                                src={src}
                                alt={`${category.title} icon ${i + 1}`}
                                className="w-full h-full object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {/* Right fade + arrow */}
                <div
                    className="absolute right-0 top-0 h-full w-12 z-10 flex items-center justify-end pointer-events-none transition-opacity duration-300"
                    style={{
                        opacity: canScrollRight ? 1 : 0,
                        background: "linear-gradient(to left, rgba(10,10,10,0.9), transparent)",
                    }}
                >
                    <button
                        onClick={() => scroll("right")}
                        className="pointer-events-auto mr-1 w-7 h-7 flex items-center justify-center text-white/70 hover:text-white text-xl leading-none transition-colors"
                    >
                        ›
                    </button>
                </div>
            </div>
        </div>
    );
};

const Skills: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState<"left" | "right" | null>(null);
    const { ref: headingRef, inView: headingInView } = useInView(0.2);

    const pageCategories = logos.slice(
        currentPage * CATEGORIES_PER_PAGE,
        currentPage * CATEGORIES_PER_PAGE + CATEGORIES_PER_PAGE
    );

    const goToPage = (page: number) => {
        if (page === currentPage || animating) return;
        const dir = page > currentPage ? "right" : "left";
        setDirection(dir);
        setAnimating(true);
        setTimeout(() => {
            setCurrentPage(page);
            setAnimating(false);
        }, 350);
    };

    const goPrev = () => goToPage(currentPage - 1);
    const goNext = () => goToPage(currentPage + 1);

    return (
        <div className="w-full px-4 sm:px-0">
            <div
                ref={headingRef}
                className="transition-all duration-700 ease-out"
                style={{
                    opacity: headingInView ? 1 : 0,
                    transform: headingInView ? "translateX(0)" : "translateX(-48px)",
                }}
            >
                <SectionHeading color="red">Skills & Experience</SectionHeading>
            </div>

            {/* Page content with overflow hidden to clip slide animation */}
            <div className="overflow-hidden">
                <div
                    key={currentPage}
                    className={
                        animating
                            ? direction === "right"
                                ? "skills-exit-left"
                                : "skills-exit-right"
                            : direction === "right"
                                ? "skills-enter-right"
                                : direction === "left"
                                    ? "skills-enter-left"
                                    : "skills-enter-initial"
                    }
                >
                    {pageCategories.map((category, index) => (
                        <SkillRow
                            key={category.title}
                            category={category}
                            animationDelay={index * 80}
                            animating={animating}
                            direction={direction}
                        />
                    ))}
                </div>
            </div>

            {/* Pagination controls */}
            <div className="flex items-center justify-between mt-4 mb-2">
                {/* Prev button */}
                <button
                    onClick={goPrev}
                    disabled={currentPage === 0 || animating}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold uppercase tracking-widest border border-neutral-700 text-neutral-300 hover:border-red-500 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-neutral-700 disabled:hover:text-neutral-300"
                >
                    <span className="text-base leading-none">‹</span>
                    Prev
                </button>

                {/* Page dots */}
                <div className="flex items-center gap-2">
                    {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goToPage(i)}
                            disabled={animating}
                            className="transition-all duration-300 rounded-full focus:outline-none"
                            style={{
                                width: i === currentPage ? "28px" : "8px",
                                height: "8px",
                                background: i === currentPage ? "#ef4444" : "#525252",
                                borderRadius: "9999px",
                            }}
                            aria-label={`Go to page ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Next button */}
                <button
                    onClick={goNext}
                    disabled={currentPage === TOTAL_PAGES - 1 || animating}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold uppercase tracking-widest border border-neutral-700 text-neutral-300 hover:border-red-500 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-neutral-700 disabled:hover:text-neutral-300"
                >
                    Next
                    <span className="text-base leading-none">›</span>
                </button>
            </div>

            {/* Page counter */}
            <p className="text-center text-xs text-neutral-500 tracking-widest uppercase mt-1">
                Page {currentPage + 1} of {TOTAL_PAGES}
            </p>

            <style>{`
                @keyframes slideInFromRight {
                    from { opacity: 0; transform: translateX(60px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInFromLeft {
                    from { opacity: 0; transform: translateX(-60px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideOutToLeft {
                    from { opacity: 1; transform: translateX(0); }
                    to   { opacity: 0; transform: translateX(-60px); }
                }
                @keyframes slideOutToRight {
                    from { opacity: 1; transform: translateX(0); }
                    to   { opacity: 0; transform: translateX(60px); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(12px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .skills-enter-right {
                    animation: slideInFromRight 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }
                .skills-enter-left {
                    animation: slideInFromLeft 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }
                .skills-enter-initial {
                    animation: fadeIn 0.4s ease forwards;
                }
                .skills-exit-left {
                    animation: slideOutToLeft 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }
                .skills-exit-right {
                    animation: slideOutToRight 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }
            `}</style>
        </div>
    );
};

export default Skills;
