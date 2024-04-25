USE fallout;

create table player_data(
    id int primary key,
    /*new*/
    player_level int,
    /*****/
    strength int,
    endurance int,
    charisma int,
    intelligence int,
    agility int,
    luck int,
    health int,
    action_points int,
    weight_things int,

    weapon JSON,
    wear JSON
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
    /*new*/
    must_level int,
    ammo enum("10-mm","45-mm", ".44", "12-round","5.56","plasma cartridges")
    /****/
);
create table world_wear(
    id int primary key,
    wear_name varchar(250),
    must_level int,
    armor int,
    wear_weight int,
    price int,
    must_strength int
);
/*not avalible*/
create table help(
    id int primary key,
    help_name varchar(250),
    res_health int,
    res_action_points int
);

