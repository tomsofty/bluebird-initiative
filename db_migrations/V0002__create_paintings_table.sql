CREATE TABLE t_p46257685_bluebird_initiative.paintings (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  author VARCHAR(255),
  year INTEGER,
  size VARCHAR(100),
  technique VARCHAR(100),
  price NUMERIC(12, 2),
  is_available BOOLEAN DEFAULT TRUE,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);