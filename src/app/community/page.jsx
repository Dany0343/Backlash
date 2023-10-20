import Header from "../Header";
import Card from "./card";
import TotallyKiller from "../../../public/images/TotallyKiller.png";
import Barbie from "../../../public/images/Barbie.png";
import Bottoms from "../../../public/images/Bottoms.png";
import Exorcist from "../../../public/images/exorcist.png";
import Fairplay from "../../../public/images/fairplay.png";
import FightClub from "../../../public/images/fightclub.png";
import Friday13 from "../../../public/images/friday13.png";
import Getout from "../../../public/images/getout.png";
import NoOne from "../../../public/images/noonewillsaveyou.png";
import Oppen from "../../../public/images/oppenheimer.png";
import Pastlives from "../../../public/images/pastlives.png";
import Pearl from "../../../public/images/pearl.png";
import SAW from "../../../public/images/saw.png";
import SAWX from "../../../public/images/sawx.png";
import Scream from "../../../public/images/Scream.png";
import TalkToMe from "../../../public/images/TalktoMe.png";
import TheCreator from "../../../public/images/thecreator.png";
import TheExorcist from "../../../public/images/theexorcist.png";
import TheShining from "../../../public/images/theshining.png";

export default function Community() {
  const movies = [
    {
      image: TotallyKiller,
      title: "Totally Killer",
      description:
        "Thirty-five years after the shocking murders of three teens, an infamous killer returns on Halloween night to claim a fourth victim. When 17-year-old Jamie comes face-to-face with the masked maniac, she accidentally time-travels back to 1987. Forced to navigate the unfamiliar culture, Jamie teams up with her teenage mother to take down the psycho once and for all.",
      user: "Pepito",
    },
    {
      image: Barbie,
      title: "Barbie",
      description:
        "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
      user: "CaudilloC",
    },
    {
      image: Friday13,
      title: "Friday the 13th",
      description:
        "Camp counselors are stalked and murdered by an unknown assailant while trying to reopen a summer camp that was the site of a child’s drowning.",
      user: "Socrates",
    },
    {
      image: TalkToMe,
      title: "Talk to Me",
      description:
        "Camp counselors are stalked and murdered by an unknown assailant while trying to reopen a summer camp that was the site of a child’s drowning.",
      user: "Platón",
    },
    {
      image: SAWX,
      title: "Saw X",
      description:
        "Camp counselors are stalked and murdered by an unknown assailant while trying to reopen a summer camp that was the site of a child’s drowning.",
      user: "Aristoteles",
    },
    {
      image: Bottoms,
      title: "Bottoms",
      description:
        "PJ and Josie start a fight club as a way to lose their virginities to cheerleaders. The fight club gains traction and soon the most popular girls in school are beating each other up in the name of self-defense. But the pair find themselves in over their heads and in need of a way out before their plan is exposed.",
      user: "Epicteto",
    },
    {
      image: Scream,
      title: "Scream",
      description:
        "A killer known as Ghostface begins killing off teenagers, and as the body count begins rising, one girl and her friends find themselves contemplating the ‘rules’ of horror films as they find themselves living in a real-life one.",
      user: "Tales",
    },
    {
      image: Getout,
      title: "Get Out",
      description:
        "Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family’s overly accommodating behavior as nervous attempts to deal with their daughter’s interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
      user: "HP. Lovecraft",
    },
    {
      image: TheCreator,
      title: "The creator",
      description:
        "Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family’s overly accommodating behavior as nervous attempts to deal with their daughter’s interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
      user: "Alan Turing",
    },
    {
      image: TheExorcist,
      title: "The Exorcist: Believer",
      description:
        "Since the death of his wife 12 years ago, Victor Fielding has raised their daughter, Angela on his own. But when Angela and her friend Katherine disappear in the woods, only to return three days later with no memory of what happened to them, it unleashes a chain of events that will force Victor to confront the nadir of evil and, in his terror and desperation, seek out the only person alive who has witnessed anything like it before: Chris MacNeil.",
      user: "Papa Francisco",
    },
    {
      image: Pearl,
      title: "Pearl",
      description:
        "Trapped on her family’s isolated farm, Pearl must tend to her ailing father under the bitter and overbearing watch of her devout mother. Lusting for a glamorous life like she’s seen in the movies, Pearl’s ambitions, temptations, and repressions all collide, in the stunning, technicolor-inspired origin story of X’s iconic villain.",
      user: "Mahoma",
    },
    {
      image: Fairplay,
      title: "Fair Play",
      description:
        "An unexpected promotion at a cutthroat hedge fund pushes a young couple’s relationship to the brink, threatening to unravel not only their recent engagement but their lives.",
      user: "Michael Jackson",
    },
    {
      image: SAW,
      title: "Saw",
      description:
        "An unexpected promotion at a cutthroat hedge fund pushes a young couple’s relationship to the brink, threatening to unravel not only their recent engagement but their lives.",
      user: "",
    },
    {
      image: FightClub,
      title: "Fight Club",
      description:
        "An unexpected promotion at a cutthroat hedge fund pushes a young couple’s relationship to the brink, threatening to unravel not only their recent engagement but their lives.",
      user: "Ghandi",
    },
    {
      image: Exorcist,
      title: "The Exorcist",
      description:
        "12-year-old Regan MacNeil begins to adapt an explicit new personality as strange events befall the local area of Georgetown. Her mother becomes torn between science and superstition in a desperate bid to save her daughter, and ultimately turns to her last hope: Father Damien Karras, a troubled priest who is struggling with his own faith.",
      user: "Santo Tomas de Aquino",
    },
    {
      image: Oppen,
      title: "Oppenheimer",
      description:
        "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
      user: "Einstein",
    },
    {
      image: NoOne,
      title: "No One Will Save You",
      description:
        "A young woman who’s been alienated from her community finds herself in a face-off against a host of extraterrestrial beings who threaten her future while forcing her to deal with her past.",
      user: "Jaime Maussan",
    },
    {
      image: Pastlives,
      title: "Past Lives",
      description:
        "Nora and Hae Sung, two deeply connected childhood friends, are wrest apart after Nora’s family emigrates from South Korea. 20 years later, they are reunited for one fateful week as they confront notions of love and destiny.",
      user: "ChatGPT",
    },
    {
      image: TheShining,
      title: "The Shining",
      description:
        "Nora and Hae Sung, two deeply connected childhood friends, are wrest apart after Nora’s family emigrates from South Korea. 20 years later, they are reunited for one fateful week as they confront notions of love and destiny.",
      user: "Oscar Bucio",
    },
    // Poner mas peliculas
  ];

  return (
    <>
      <Header />
      <h1 className="text-center text-2xl my-4">Peliculas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 border-2 border-white m-9 rounded-md lg:justify-center justify-items-center">
        {movies.map((movie, index) => (
          <Card
            key={index}
            image={movie.image}
            title={movie.title}
            description={movie.description}
            user={movie.user}
          />
        ))}
      </div>
    </>
  );
}
