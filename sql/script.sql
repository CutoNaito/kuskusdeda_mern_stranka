create database kuskusdeda;
use kuskusdeda;

create table users(
	id int primary key auto_increment,
	username varchar(50) not null,
    email varchar(100) not null,
    password varchar(50) not null,
    isAdmin bit
);

create table kupony(
	id int primary key auto_increment,
    datum_vytvoreni datetime,
    datum_vyprseni datetime,
    kod varchar(10)
);

create table uzivatelke_kupony(
	id int primary key auto_increment,
    user_id int not null,
    kupon_id int not null,
    constraint user_this_id foreign key(user_id) references users(id),
    constraint kupon_this_id foreign key(kupon_id) references kupony(id)
);

create table zbozi(
	id int primary key auto_increment,
    nazev varchar(20)
);

create table objednavka(
	id int primary key auto_increment,
    user_id int not null,
    zbozi_id int not null,
    constraint user_objednavka_id foreign key(user_id) references users(id),
    constraint zbozi_objednavka_id foreign key(zbozi_id) references zbozi(id),
    datum_objednavky datetime
);

create table zrusene_objednavky(
	id int primary key auto_increment,
    user_id int not null,
    zbozi_id int not null,
    datum_objednavky datetime
);