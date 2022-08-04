import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
const defaultDate = {
  date: "",
  description: "",
};
function CreateStory() {
  const [dates, setDates] = useState([{ ...defaultDate }]);
  const objectHasValues = (obj) => {
    return Object.keys(obj).some((key) => obj[key]);
  };
  const handleDates = (e) => {
    let newDates = [...dates];
    const current = newDates[e.target.closest(".row").dataset.id];
    current[e.target.name] = e.target.value;
    newDates = newDates.filter(
      (date, idx) => objectHasValues(date) || idx === 0
    );
    if (e.target.value) newDates.push({ ...defaultDate });

    setDates(newDates);
  };
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>שם הגיבור</Form.Label>
        <Form.Control type="text" placeholder="שם הגיבור" dir="rtl" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>סיפור</Form.Label>
        <Form.Control
          as="textarea"
          dir="rtl"
          placeholder="סיפור"
          style={{ height: "200px" }}
        />
      </Form.Group>

      <Form.Group>
        {dates.map((date, i) => {
          return (
            <Row data-id={i} key={i} className="mb-1">
              <Col xs={5}>
                <Form.Control
                  type="date"
                  placeholder="תאריך"
                  name="date"
                  minLength={15}
                  onChange={handleDates}
                  value={date.date}
                />
              </Col>

              <Col>
                <Form.Control
                  placeholder="פירוט"
                  name="description"
                  minLength={10}
                  maxLength={60}
                  onChange={handleDates}
                  value={date.description}
                  dir="rtl"
                />
              </Col>
            </Row>
          );
        })}
      </Form.Group>
      <Button type="submit" className="ms-auto">
        שליחה
      </Button>
    </Form>
  );
}

export default CreateStory;
