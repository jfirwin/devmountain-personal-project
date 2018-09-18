UPDATE
  activities
SET
  title = ${title},
  lnglat = ${lnglat},
  activitydate = ${activitydate},
  rating = ${rating},
  description = ${description}
WHERE
  activityid = ${activityid}
RETURNING (SELECT imgurl FROM users WHERE authid = ${authid}), title, lnglat, activitydate, rating, description, activityid, userid
