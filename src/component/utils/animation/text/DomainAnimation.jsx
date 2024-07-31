export default function DomainAnimation() {
    return (
        <div class="font-extrabold text-3xl [text-wrap:balance] text-gray-600">
            My Domain:
            <span class="text-yellow-300 inline-flex flex-col pl-2 h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul class="block animate-text-slide text-left leading-tight [&_li]:block">
                <li>Computer Engineering</li>
                <li>Embedded System</li>
                <li>Full Stack Development</li>
                <li>Digital Design</li>
                <li>Painting</li>
                <li aria-hidden="true">Computer Engineering</li>
            </ul>
            </span>
        </div>
    )
}