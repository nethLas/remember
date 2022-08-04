import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
function StoryCardComp() {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchHero = async () => {
      setLoading(true);
      const res = await fetch("db.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log(res);
      const data = await res.json();
      console.log(data);
      setHero(data.heroes[0]);
      setLoading(false);
    };
    fetchHero();
  }, []);
  if (loading) return <div>Loading</div>;
  return (
    <>
      {/* <Card>
        <Card.Img
          variant="top"
          style={{
            display: "inline-block",
            height: "200px",
            width: "300px",
            
          }}
          src="data:image/jpeg;base64,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"
        />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card> */}
      <Card className="bg-dark text-white " style={{ marginBottom: "12px" }}>
        <Card.Img
          src={hero.url}
          alt="Card image"
          className="img`"
          style={{ objectFit: "cover" }}
          height="400px"
        />
        <Card.ImgOverlay>
          <Card.Title>{hero.name}</Card.Title>
          <Card.Text>{hero.text}</Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default StoryCardComp;
