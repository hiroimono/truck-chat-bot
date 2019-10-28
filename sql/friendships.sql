DROP TABLE IF EXISTS friendships;

CREATE TABLE friendships (
	id SERIAL primary key,
  receiver_id INT not null REFERENCES userlist(id),
  sender_id INT not null REFERENCES userlist(id),
  accepted BOOLEAN default null,
	created_at TIMESTAMP default CURRENT_TIMESTAMP
);
