SELECT
  A.*,
  U.imgurl
FROM
  users U
  FULL JOIN activities A ON U.id = A.userid
WHERE
  U.username = ${username}
ORDER BY
  activitydate DESC
LIMIT
  20
