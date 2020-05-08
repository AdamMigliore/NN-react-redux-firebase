import React from "react";
import moment from "moment";

export default function Notifications({ notifications }) {
  const notificationsListed = notifications
    ? notifications.map((notification) => {
        return (
          <li key={notification.id}>
            <p className="blue-text darken-1">{notification.content}</p>
            <p className="blue-text text-lighten-1">from {notification.user}</p>
            <p className="grey-text ">
              {moment(notification.timestamp.toDate()).fromNow()}
            </p>
          </li>
        );
      })
    : null;

  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="online-users">{notificationsListed}</ul>
        </div>
      </div>
    </div>
  );
}
