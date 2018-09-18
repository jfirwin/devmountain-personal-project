UPDATE
  users
SET
  username = ${username},
  firstname = ${firstname},
  lastname = ${lastname},
  home = ${home}
WHERE
  authid = ${authid}
RETURNING username, firstname, lastname, home, imgurl, coverurl, id
