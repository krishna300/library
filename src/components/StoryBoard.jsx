import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { storyboardData as data } from "../assets/db";
const Storyboard = () => (
  <VerticalTimeline>
    {data.map((item) => (
      <VerticalTimelineElement
        key={item.id}
        date={item.date}
        icon={
        <div className="flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
        }
      >
        <h3 className="font-bold">{item.title}</h3>
        <p>{item.description}</p>
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
);

export default Storyboard;
