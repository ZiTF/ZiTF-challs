#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
CREATE USER $APP_DB_USER WITH PASSWORD '$APP_DB_PASS';
CREATE DATABASE $APP_DB_NAME;
GRANT ALL PRIVILEGES ON DATABASE $APP_DB_NAME TO $APP_DB_USER;
\connect $APP_DB_NAME $APP_DB_USER

CREATE TABLE users (id SERIAL UNIQUE, firstname varchar(100) UNIQUE, password varchar(100));
insert into users (firstname, password) values ('Boblitooo',  'MacacaBanana');
insert into users (firstname, password) values ('Bilelitooo', 'DonkeyKong');
insert into users (firstname, password) values ('Babidiii',   '$CHALL_FLAG');

CREATE TABLE team (id SERIAL UNIQUE, name varchar(100) UNIQUE, role varchar(100), url text, quote text);
insert into team (name, role, url, quote) values ('Dion',        'CEO',               'https://feuille.s3.eu-west-3.amazonaws.com/team/default.jpg',    'Be yourself; everyone else is already taken.');
insert into team (name, role, url, quote) values ('Kirke',       'Co-Worker',         'https://feuille.s3.eu-west-3.amazonaws.com/team/default4.jpg',   'I''m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can''t handle me at my worst, then you sure as hell don''t deserve me at my best.');
insert into team (name, role, url, quote) values ('Dismas',      'Community Manager', 'https://feuille.s3.eu-west-3.amazonaws.com/team/default14.jpg',  'Two things are infinite: the universe and human stupidity; and I''m not sure about the universe.');
insert into team (name, role, url, quote) values ('Phineas',     'Co-Worker',         'https://feuille.s3.eu-west-3.amazonaws.com/team/default6.jpg',   'So many books, so little time.');
insert into team (name, role, url, quote) values ('Cristo',      'Chef de projet',    'https://feuille.s3.eu-west-3.amazonaws.com/team/default9.jpg',   'A room without books is like a body without a soul.');
insert into team (name, role, url, quote) values ('Linus',       'Analyst',           'https://feuille.s3.eu-west-3.amazonaws.com/team/default22.jpg',  'Be who you are and say what you feel, because those who mind don''t matter, and those who matter don''t mind.');
insert into team (name, role, url, quote) values ('Evander',     'Analyst',           'https://feuille.s3.eu-west-3.amazonaws.com/team/default20.jpg',  'You''ve gotta dance like there''s nobody watching,Love like you''ll never be hurt,Sing like there''s nobody listening,And live like it''s heaven on earth.');
insert into team (name, role, url, quote) values ('Taddeus',     'Chef de projet',    'https://feuille.s3.eu-west-3.amazonaws.com/team/default12.jpg',  'You know you''re in love when you can''t fall asleep because reality is finally better than your dreams.');
insert into team (name, role, url, quote) values ('Porphyrios',  'Co-Worker',         'https://feuille.s3.eu-west-3.amazonaws.com/team/default5.jpg',   'You only live once, but if you do it right, once is enough.');
insert into team (name, role, url, quote) values ('Sylus',       'Co-Worker',         'https://feuille.s3.eu-west-3.amazonaws.com/team/default3.jpg',   'Be the change that you wish to see in the world.');
insert into team (name, role, url, quote) values ('Elmo',        'Analyst',           'https://feuille.s3.eu-west-3.amazonaws.com/team/default18.jpg',  'In three words I can sum up everything I''ve learned about life: it goes on.');
insert into team (name, role, url, quote) values ('Benganaille', 'PNJ',               'https://feuille.s3.eu-west-3.amazonaws.com/team/default999.jpg', 'If you want to know what a man''s like, take a good look at how he treats his inferiors, not his equals.');
insert into team (name, role, url, quote) values ('Nereus',      'Chef de projet',    'https://feuille.s3.eu-west-3.amazonaws.com/team/noname.jpg',     'Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend');
insert into team (name, role, url, quote) values ('Tadeo',       'Co-Worker',         'https://feuille.s3.eu-west-3.amazonaws.com/team/default7.jpg',   'If you tell the truth, you don''t have to remember anything.');
insert into team (name, role, url, quote) values ('Zeno',        'Chef de projet',    'https://feuille.s3.eu-west-3.amazonaws.com/team/default10.jpg',  'Friendship ... is born at the moment when one man says to another ""What! You too? I thought that no one but myself . . .');
insert into team (name, role, url, quote) values ('Esdras',      'Analyst',           'https://feuille.s3.eu-west-3.amazonaws.com/team/default17.jpg',  'I''ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.');
insert into team (name, role, url, quote) values ('Cyrus',       'Co-Worker',         'https://feuille.s3.eu-west-3.amazonaws.com/team/default8.jpg',   'A friend is someone who knows all about you and still loves you.');
insert into team (name, role, url, quote) values ('Myron',       'Community Manager', 'https://feuille.s3.eu-west-3.amazonaws.com/team/default15.jpg',  'Always forgive your enemies; nothing annoys them so much.');
insert into team (name, role, url, quote) values ('Eustachys',   'Co-Worker',         'https://feuille.s3.eu-west-3.amazonaws.com/team/default2.jpg',   'To live is the rarest thing in the world. Most people exist, that is all.');
insert into team (name, role, url, quote) values ('Kosmas',      'Analyst',           'https://feuille.s3.eu-west-3.amazonaws.com/team/default19.jpg',  'Live as if you were to die tomorrow. Learn as if you were to live forever.');
insert into team (name, role, url, quote) values ('Zenais',      'CTO',               'https://feuille.s3.eu-west-3.amazonaws.com/team/default16.jpg',  'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.');
insert into team (name, role, url, quote) values ('Alastair',    'Community Manager', 'https://feuille.s3.eu-west-3.amazonaws.com/team/default13.jpg',  'Without music, life would be a mistake.');
insert into team (name, role, url, quote) values ('Kallistos',   'Chef de projet',    'https://feuille.s3.eu-west-3.amazonaws.com/team/default11.jpg',  'We accept the love we think we deserve.');
insert into team (name, role, url, quote) values ('Kainan',      'Analyst',           'https://feuille.s3.eu-west-3.amazonaws.com/team/default21.jpg',  'I am so clever that sometimes I don''t understand a single word of what I am saying.');

CREATE TABLE comments (id SERIAL UNIQUE, name varchar(100) UNIQUE, role varchar(100), url text, comment text);
insert into comments (name, role, url, comment) values ('Bill Elito', 'CEO Moon Key', 'https://feuille.s3.eu-west-3.amazonaws.com/comments/monkey-suit.jpeg', 'Feuille nous permet d''effectuer des projets à des prix record ! La chine devrait sans doute se soucier de cette association !');
insert into comments (name, role, url, comment) values ('Guy Tond', 'Figurant', 'https://feuille.s3.eu-west-3.amazonaws.com/team/noname.jpg', 'L''automne est un second printemps où chaque feuille est une fleur.');
insert into comments (name, role, url, comment) values ('Baby dille', 'Trader', 'https://feuille.s3.eu-west-3.amazonaws.com/comments/monkey-trader-bananaCoin.jpeg', 'R3JhY2Ugw6AgbCdleHBsb2l0YXRpb24gZGVzIMOpdHVkaWFudHMgZGUgZmV1aWxsZSwgaidhaSBwdSBzdG9uayBldCBkb3VibGVyIG1lcyBCYW5hbmFDb2luLg');

CREATE TABLE services (id SERIAL UNIQUE, title varchar(100) UNIQUE, description text, logo text); 
insert into services (title, description, logo) values ('NOTRE IDENTITÉ', 'Nous sommes une association-entreprise. C''est à dire que nous sommes une association à but non lucratif mais aussi une entreprise avec un numéro de SIRET.', 'https://feuille.s3.eu-west-3.amazonaws.com/leaves/leaf1.webp');
insert into services (title, description, logo) values ('NOTRE FONCTIONNEMENT', 'En plus des membres permanents, nous embauchons des étudiants pour la réalisation technique de vos projets.', 'https://feuille.s3.eu-west-3.amazonaws.com/leaves/leaf2.webp');
insert into services (title, description, logo) values ('MISSION PÉDAGOGIQUE', 'Notre mission est une mission pédagogique. Nous apportons du concret à la formation d''excellence de l''école d''ingénieur ISIMA.', 'https://feuille.s3.eu-west-3.amazonaws.com/leaves/leaf3.webp');
insert into services (title, description, logo) values ('MARQUE DE FABRIQUE', 'Notre motivation est de rendre un travail le plus professionnel et de la meilleure qualité possible.', 'https://feuille.s3.eu-west-3.amazonaws.com/leaves/leaf4.webp');
insert into services (title, description, logo) values ('EVÈNEMENTS', 'Nous sommes surtout une association étudiante. Nous organisons des évènements pour promouvoir le web, l''innovation, l''entreprenariat.', 'https://feuille.s3.eu-west-3.amazonaws.com/leaves/leaf5.webp');
insert into services (title, description, logo) values ('NOTRE FIERTÉ', 'Nous sommes fiers d''acquérir une première expérience professionnelle qui complète notre formation technique d''ingénieurs.', 'https://feuille.s3.eu-west-3.amazonaws.com/leaves/leaf6.webp');
insert into services (title, description, logo) values ('HEHEHE', 'Nous sommes surtout une association étudiante. Nous organisons des évènements pour promouvoir le web, l''innovation, l''entreprenariat.', 'https://feuille.s3.eu-west-3.amazonaws.com/leaves/leaf7.webp');
insert into services (title, description, logo) values ('HEHEHE2', 'Nous sommes fiers d''acquérir une première expérience professionnelle qui complète notre formation technique d''ingénieurs.', 'https://feuille.s3.eu-west-3.amazonaws.com/leaves/leaf8.webp');

COMMIT;
EOSQL
