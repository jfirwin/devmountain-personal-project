CREATE TABLE users (
  id serial PRIMARY KEY,
  authid varchar(100),
  username varchar(30) UNIQUE,
  firstname varchar(30),
  lastname varchar(30),
  imgurl varchar(200),
  coverurl varchar(200),
  home varchar(50)
)
