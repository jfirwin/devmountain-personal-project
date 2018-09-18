CREATE TABLE activities (
  id serial PRIMARY KEY,
  userid INTEGER REFERENCES users(id),
  title varchar(50),
  lnglat point,
  activitydate date,
  style integer,
  rating integer,
  description varchar(1000)
)
