SELECT
  id,
  username,
  firstname,
  lastname,
  imgurl,
  coverurl,
  home
FROM
  users
WHERE
  authid = ${authid}
