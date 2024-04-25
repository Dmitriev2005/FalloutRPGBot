import { json } from 'express'
import {User} from './model.js'
// функции обращении к бд
async function reduceAttribute(idUser,attribute,count){
   const res = await User.findOne({
    where:{
        id:idUser
    }
   })
   
   //копируем объект, меняем значение свойства скопированного объекта и присваиваем к оригиналу
   try{
    const copyRes = {...res.gameData}

    for(let key in copyRes){
        if(key===attribute)
            copyRes[key]-=count
    }

    res.gameData = {...copyRes}
    await res.save()
   }
   catch(e)
   {
    console.log(e)
   }
}
async function boostAttribute(idUser,attribute,count){
    const res = await User.findOne({
        where:{
            id:idUser
        }
       })
       
    //копируем объект, меняем значения скопированного объекта и присваиваем к оригиналу
    try{
    const copyRes = {...res.gameData}
    for(let key in copyRes){
        if(key===attribute)
            copyRes[key]+=count
    }
    res.gameData = {...copyRes}
    await res.save()

    }
    catch(e)
    {
    console.log(e)
    }
}
//функция для теста, создания игрока
async function cre(){
    const w = await User.create({id:5, gameData:{
        strength:4,
        endurance:3,
        charisma:5,
        intelligence:6,
        agility:10,
        luck:1,
        health:100,
        action_points:10,
        weight_things:250,
        things:{
            weapon:[{
                name:"Убиватель",
                damage:4,
                weight_thing:20,
                isCurrent:true
            }]
        }
    }})
}

//reduceAttribute(5,"charisma",1)
boostAttribute(5,"charisma",3)