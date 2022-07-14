import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "react-bootstrap";
const UserList = () => {
  const [listOfUSer, setlistOfUSer] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setlistOfUSer(response.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(listOfUSer, "my users");
  return (
    <div className="mycards">
      {listOfUSer.map((user) => {
        return (
          <div key={user.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ width: "12rem", marginLeft: "3rem" }}
                variant="top"
                src="https://icons-for-free.com/download-icon-avatar+human+male+man+men+people+person+profile+user+users-1320196163635839021_512.png"
              />
              <Card.Body>
                <Card.Title style={{ color: "black" }}>{user.name}</Card.Title>
                <Card.Text style={{ color: "black" }}>
                  <h4>{user.email}</h4>
                  <h4>{user.phone}</h4>
                  <h4>{user.website}</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
