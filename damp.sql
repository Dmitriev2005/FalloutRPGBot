create database fallout;
use fallout;
create table player_data(
    id int primary key,
    player_level int,
    strength int,
    /*new*/
    perception int,
    /****/
    endurance int,
    charisma int,
    intelligence int,
    agility int,
    luck int,
    health int,
    action_points int,
    weight_things int,
    weapon JSON,
    wear JSON,
    /*new*/
    player_help JSON
);
create table world_weapon(
    id int primary key,
    weapon_name varchar(250),
    damage int,
    price int,
    weapon_weight int,
    must_strength int,
    must_intelligence int,
    must_agility int,
    must_level int,
    ammo enum("10-mm","45-mm", ".44", "12-round","5.56","plasma cartridges"),
    rarity enum("обычное","редкое","легендарное")
);
create table world_wear(
    id int primary key,
    wear_name varchar(250),
    must_level int,
    armor int,
    wear_weight int,
    price int,
    must_strength int,
    rarity enum("обычное","редкое","легендарное"),
    wear_type enum("голова","тело")
);
create table world_help(
    id int primary key,
    help_name varchar(250),
    res_health int,
    res_action_points int
);

INSERT INTO player_data set id=1, player_level=1, strength=5,endurance int, charisma int, intelligence int,agility int,luck int,health int,action_points int,weight_things int,
INSERT INTO world_weapon set id=1, weapon_name="10-мм пистолет", damage=18, price=40, weapon_weight=3, must_strength=0, must_intelligence=0, must_agility=2, must_level=1, ammo="10-mm", rarity="обычное";
INSERT INTO world_wear set id=1, wear_name="коженная броня", armor=10, price=80, wear_weight=8, must_strength=0, wear_type="тело", must_level=2, rarity="обычное";
INSERT INTO world_help set id=1, help_name="стимулятор", res_health=15, res_action_points=0;