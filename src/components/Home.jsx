import clsx from "clsx";
import { locations } from "#constants";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "#store/windowStore";
import useLocationStore from "#store/locationStore";
const projects = locations.work?.children ?? [];
const Home = () => {
    const { openWindow } = useWindowStore()
    const {setActiveLocation}= useLocationStore()
    const handleOpen = (project) => {
        setActiveLocation(project)
        openWindow("finder")
    }
    useGSAP(() => {
        Draggable.create(".folder")
    }, [])
    return (
        <section id="home">
            <ul>
                {projects.map((project) => (
                    <li key={project.id}
                        className={clsx("group folder", project.windowPosition)}
                        onClick={() => handleOpen(project)}
                    >
                        <img src="/images/folder.png" alt={project.name} />
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Home;