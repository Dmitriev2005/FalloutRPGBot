import { Sequelize, DataTypes} from 'sequelize'
import 'dotenv/config'
const sequelize = new Sequelize({dialect:process.env.DIALECT,database:process.env.DATABASE,
     host:process.env.HOST,  username:process.env.USERNAME})

export const User = sequelize.define('user_data',{
    id:{
        type:DataTypes.INTEGER,
        field:'id',
        primaryKey:true
    
    },
    gameData:{
        field:'game_data',
        type:DataTypes.JSON
    }
    // perception:{}
    // endurance int,
    // charisma int,
    // intelligence int,
    // agility int,
    // luck int,
    // health int,
    // action_points int,
    // weight_things int,
    // things JSON
},{freezeTableName:true, timestamps:false})