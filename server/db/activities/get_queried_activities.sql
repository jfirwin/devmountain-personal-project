SELECT
  A.activityid,
  A.lnglat,
  A.activitydate,
  A.title,
  A.rating,
  COALESCE(coordinator.coordinator, '[]') AS coordinator,
  COALESCE('[]') AS imgs
FROM
  activities A FULL
  JOIN (
    SELECT
      U.id,
      json_agg(
        (
          SELECT
            x
          FROM(
              SELECT
                U.id,
                U.username,
                U.firstname,
                U.lastname,
                U.imgurl
            ) x
        )
      ) AS coordinator
    FROM
      users U
    GROUP BY
      U.id
  ) as coordinator on coordinator.id = a.userid
WHERE
  (rating >= ${minrating} AND rating <= ${maxrating}) AND
  (activitydate >= ${start_date} AND activitydate <= ${end_date}) AND
  (lnglat <@ box ('(${east},${north})', '(${west},${south})'))
