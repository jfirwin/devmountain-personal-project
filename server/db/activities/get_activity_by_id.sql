SELECT
  A.*,
  U.username,
  U.firstname,
  U.lastname,
  U.home,
  U.imgurl
FROM
  activities A
  FULL JOIN users U ON U.id = A.userid
WHERE
  activityid = ${activityid}
