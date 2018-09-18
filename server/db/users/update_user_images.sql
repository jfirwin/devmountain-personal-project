UPDATE
  users
SET
  imgurl = ${imgurl},
  coverurl = ${coverurl}
WHERE
  authid = ${authid}
RETURNING username, firstname, lastname, home, imgurl, coverurl, id
