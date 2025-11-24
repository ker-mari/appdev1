import Avatar from "./Avatar";
import Card from "./Card";


src = "https://i.imgur.com/QIrZWGIs.jpg"
alt = "Alan L. Hart"

export default function Profile() {
  return (
    <Card>
        <Avatar
            size={100}
            person={{
                name: 'Katsuko Saruhashi',
                imageId: 'YfeOqp2'
            }}
        />
    </Card>
  );
}