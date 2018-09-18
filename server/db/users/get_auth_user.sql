SELECT
  U.id,
  U.username,
  U.firstname,
  U.lastname,
  U.imgurl,
  U.coverurl,
  U.home
FROM
  users U
WHERE
  U.authid = ${authid}
