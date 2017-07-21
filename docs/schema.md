# Schema Information

## users

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## universities

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | indexed, unique
alias           | string    |
location        | string    | indexed
url             | string    | indexed, unique
public/private  | string    | indexed, unique
admission_rate  | float     | indexed  
sat_25          | integer   | indexed
sat_75          | integer   | indexed
act_25          | integer   | indexed
act_75          | integer   | indexed
average_coa     | integer   |
num_undergrads  | integer   |
retention_rate  | float     |

## followed universities

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
uniId           | integer   | not null, indexed, foreign key
followerId      | integer   | not null, indexed, foreign key
