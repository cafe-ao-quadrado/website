import CssSvg from '../assets/css3.svg'
import DockerSvg from '../assets/docker.svg'
import GitSvg from '../assets/git.svg'
import HtmlSvg from '../assets/html.svg'
import JavascriptSvg from '../assets/javascript.svg'
import MysqlSvg from '../assets/mysql.svg'
import NodejsSvg from '../assets/nodejs.svg'
import ReactjsSvg from '../assets/reactjs.svg'

const icons = [
  {
    Icon: CssSvg,
    alt: 'css icon',
    classname: 'rotate-12',
  },
  {
    Icon: DockerSvg,
    alt: 'docker icon',
    classname: '-rotate-12',
  },
  {
    Icon: GitSvg,
    alt: 'git icon',
    classname: 'rotate-3',
  },
  {
    Icon: HtmlSvg,
    alt: 'html icon',
    classname: '-rotate-12',
  },
  {
    Icon: JavascriptSvg,
    alt: 'javascript icon',
    classname: 'rotate-6',
  },
  {
    Icon: MysqlSvg,
    alt: 'mysql icon',
    classname: '-rotate-12',
  },
  {
    Icon: NodejsSvg,
    alt: 'nodejs icon',
    classname: 'rotate-6',
  },
  {
    Icon: ReactjsSvg,
    alt: 'reactjs icon',
    classname: '-rotate-6',
  },
]

export const IconsSlide = () => {
  return (
    <div className="shrink-0 flex jusitfy-around animate-slide">
      {icons.map(({ Icon, alt, classname }) => (
        <img
          key={alt}
          src={Icon}
          alt={alt}
          className={`grayscale hover:grayscale-0 mx-10 w-12 h-12 transition duration-500 ${classname}`}
        />
      ))}
    </div>
  )
}
