import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button, Card, Container } from "semantic-ui-react";

const Index = ({ notes }) => {
  return (
    <div className="notes-container">
      <h1>Notes</h1>
      <div className="grid wrapper">
        {notes.map((notes) => {
          return;
          <div key={notes._id}>
            <Card>
              <Card.Content>
                <Card.Header>
                  <Link href={`${notes._id}`}>{note.title}</Link>
                </Card.Header>
              </Card.Content>
              <Card.Content extra></Card.Content>
              <Link href={`/${notes._id}`}>
                <Button primary>View</Button>
              </Link>
              <Link href={`/${notes._id}/edit`}>
                <Button primary>Edit</Button>
              </Link>
            </Card>
          </div>;
        })}
      </div>
    </div>
  );
};

//Next specific, allow sto get props before initial render, run serverside
Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/notes");
  const { data } = await res.json();
  return {
    notes: data,
  };
};

export default Index;
