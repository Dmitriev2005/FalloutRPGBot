import { Sequelize, DataTypes} from 'sequelize'
import 'dotenv/config'
const sequelize = new Sequelize({dialect:process.env.DIALECT,database:process.env.DATABASE,
     host:process.env.HOST,  username:process.env.USERNAME})

export const Player = sequelize.define('player_data',{
    id:{
        type:DataTypes.INTEGER,
        field:'id',
        primaryKey:true
    
    },
    level:{
        type:DataTypes.INTEGER,
        field:'player_level',
        primaryKey:true
    },
    strength:{
        field:'strength',
        type:DataTypes.INTEGER
    },
    perception:{
        field:"perception",
        type:DataTypes.INTEGER
    },
    endurance:{
        field:'endurance',
        type:DataTypes.INTEGER
    },
    charisma:{
        field:'charisma',
        type:DataTypes.INTEGER
    },
    intelligence:{
        field:'intelligence',
        type:DataTypes.INTEGER
    },
    agility:{
        field:'agility',
        type:DataTypes.INTEGER
    },
    luck:{
        field:'luck',
        type:DataTypes.INTEGER
    },
    health:{
        field:'health',
        type:DataTypes.INTEGER
    },
    actionPoints:{
        field:'action_points',
        type:DataTypes.INTEGER
    },
    weightThings:{
        field:'weight_things',
        type:DataTypes.INTEGER
    },
    weapon:{
        field:'weapon',
        type:DataTypes.JSON
    },
    wear:{
        field:'wear',
        type:DataTypes.JSON
    },
    player_help:{
        field:"player_help",
        type:DataTypes.JSON
    }
},{freezeTableName:true, timestamps:false})

export const Weapon = sequelize.define('world_weapon',{
    id:{
        type:DataTypes.INTEGER,
        field:'id',
        primaryKey:true
    
    },
    name:{
        field:'weapon_name',
        type:DataTypes.STRING
    },
    damage:{
        field:'damage',
        type:DataTypes.INTEGER
    },
    price:{
        field:'price',
        type:DataTypes.INTEGER
    },
    weight:{
        field:'weapon_weight',
        type:DataTypes.INTEGER
    },
    mustStrength:{
        field:'must_strength',
        type:DataTypes.INTEGER
    },
    mustIntelligence:{
        field:'must_intelligence',
        type:DataTypes.INTEGER
    },
    mustAgility:{
        field:'must_agility',
        type:DataTypes.INTEGER
    },
    mustLevel:{
        field:'must_level',
        type:DataTypes.INTEGER
    },
    ammo:{
        field:'ammo',
        type:DataTypes.ENUM("10-mm","45-mm", ".44", "12-round","5.56","plasma cartridges")
    },
    rarity:{
        field:'rarity',
        type:DataTypes.ENUM("обычное","редкое","легендарное")
    },
},{freezeTableName:true, timestamps:false})

export const Wear = sequelize.define('world_wear',{
    id:{
        type:DataTypes.INTEGER,
        field:'id',
        primaryKey:true
    
    },
    level:{
        field:'player_level',
        type:DataTypes.INTEGER
    },
    name:{
        field:'wear_name',
        type:DataTypes.STRING
    },
    armor:{
        field:'armor',
        type:DataTypes.INTEGER
    },
    weight:{
        field:'wear_weight',
        type:DataTypes.INTEGER
    },
    price:{
        field:'price',
        type:DataTypes.INTEGER
    },
    mustStrength:{
        field:'must_strength',
        type:DataTypes.INTEGER
    },
    rarity:{
        field:'rarity',
        type:DataTypes.ENUM("обычное","редкое","легендарное")
    },
    wearType:{
        field:'wear_type',
        type:DataTypes.ENUM("голова","тело")
    }
},{freezeTableName:true, timestamps:false})

export const Help = sequelize.define('world_help',{
    id:{
        type:DataTypes.INTEGER,
        field:'id',
        primaryKey:true
    
    },
    name:{
        field:'help_name',
        type:DataTypes.STRING
    },
    resHealth:{
        field:'res_health',
        type:DataTypes.INTEGER
    },
    resActionPoints:{
        field:'res_action_points',
        type:DataTypes.INTEGER
    }
},{freezeTableName:true, timestamps:false})
