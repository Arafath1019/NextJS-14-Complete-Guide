import classes from './event-item.module.css';
import Button from '../ui/button';

function EventItem(props) {
    const { title, image, date, location, id } = props;
    
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattedAddress = location.replace(', ', '\n');

    const exploreLink = `/events/${id}`;

  return <li className={classes.item}>
    <img src={"/" + image} alt={title} className={classes.image}  />
    <div className={classes.rightSection}>
        <div>
            <h2>TITLE</h2>
            <div>
                <time>{humanReadableDate}</time>
            </div>
            <div>
                <address>{formattedAddress}</address>
            </div>
        </div>
        <div>
            <Button link={exploreLink}>Explore Event</Button>
        </div>
    </div>
  </li>;
}

export default EventItem;
