import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import Askingmind from '../../assets/Askingmind.png'
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import NewsMonkey from '../../assets/NewsMonkey.png'
import ems from '../../assets/ems.png'
import TextUtil from '../../assets/TextUtil.png'
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Askingmind}
          link="https://nzmshrxz.github.io/AskAI/"
          h3="Asking Minds"
          p="Ask Me Anything!"
        />
        <ProjectCard
          src={viberr}
          link="https://nzmshrxz.github.io/netflix-clone/"
          h3="NetflixClone"
          p="Streaming App"
        />
        <ProjectCard
          src={NewsMonkey}
          link="https://github.com/nzmshrxz/NewsApp"
          h3="NewsMonkey"
          p="News App"
        />
        <ProjectCard
          src={ems}
          link="https://github.com/nzmshrxz/Employee-Management-System"
          h3="EMS"
          p="Employee Management System"
        />
        <ProjectCard
          src={TextUtil}
          link="https://github.com/nzmshrxz/TextUtility-software"
          h3="TextUtils"
          p="Text-Utility Software"
        />
      </div>
    </section>
  );
}

export default Projects;
