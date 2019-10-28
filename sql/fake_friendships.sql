INSERT INTO friendships(receiver_id, sender_id, accepted)
WITH expanded AS (
  SELECT DISTINCT RANDOM(), seq, r.id AS receiver_id, s.id AS sender_id
  FROM GENERATE_SERIES(1, 500) seq, userlist r, userlist s
), shuffled AS (
  SELECT DISTINCT e.*
  FROM expanded e
  INNER JOIN (
    SELECT ei.seq, MIN(ei.random) FROM expanded ei GROUP BY ei.seq
  ) em ON (e.seq = em.seq AND e.random = em.min)
  ORDER BY e.seq
)
SELECT DISTINCT
  s.receiver_id,
  s.sender_id,
  (
    CASE (RANDOM() * 2)::INT
      WHEN 0 THEN true
      WHEN 1 THEN false
      WHEN 2 THEN true
    END
  ) AS accepted
FROM shuffled s;
DELETE FROM friendships WHERE sender_id = receiver_id;
