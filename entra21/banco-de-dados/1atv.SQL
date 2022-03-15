DROP TABLE IF EXISTS propetarios;
DROP TABLE IF EXISTS locatarios;
DROP TABLE IF EXISTS imoveis;
DROP TABLE IF EXISTS contratos;

CREATE TABLE IF NOT EXISTS propetarios (
id SERIAL PRIMARY KEY,
noome TEXT NOT NULL,
cpf TEXT NOT NULL UNIQUE
);

insert into
propetarios (nome,cpf)
VALUES
('Pedro','111.111.111.-11'),
('João','222.222.222.-22'),
('Marcos','222.222.222.-22');

CREATE TABLE IF NOT EXISTS imoveis (
id SERIAL PRIMARY KEY,
	numero_quartos INTEGER NOT NULL,
	numero banheiros integer NOT NULL,
	area NUMERIC NOT NULL,
	piscina boolen DEFAULT false,
	churrasqueira boolean DEFAULT false,
	id_propetarios integer NOT NULL REFERENCES propetarios
);

INSERT INTO
imoveis (numero_quartos, numero_banheiros, area, piscina, churrasqueira, id_propetario)
VALUES
(2, 1, 150, true, false, 1),
(3, 2, 150, true, false, 2),
(1, 1, 150, true, false, 3);

CREATE TABLE IF NOT EXISTS contratos (
id_locatario integer REFERENCES locatarios,
	id_movel integer REFERENCES imoveis,
	data_inicio date,
	data_termino date NOT NULL,
	observacoes text,
	id_propetario integer NOT NULL REFERENCES propetarios,
	PRIMARY KEY (id_locatarios, id_movel, data_inicio)
);

INSERT INTO
contratos
VALUE
(1, 2, DATE(NOW()), DATE(NOW) + 7, 15, 900, NULL, 1),
(2, 2, DATE(NOW()), '2021-09-05', 10, 1500, NULL, 1),
(3, 3, DATE(NOW()), '2021-09-05', 1, 700, NULL, 1);

