INSERT INTO
  activities (
    userid,
    title,
    lnglat,
    activitydate,
    rating,
    description
  )
VALUES
  (
    (
      SELECT
        id
      FROM
        users
      WHERE
        authid = ${authid}
    ),
    ${title},
    ${lnglat},
    ${activitydate},
    ${rating},
    ${description}
  )

RETURNING (SELECT imgurl FROM users WHERE authid = ${authid}),title, lnglat, activitydate, rating, description, activityid, userid
