import { json } from 'express'
import {Player,Weapon,Wear} from './model.js'
// функции обращении к бд
export async function reduceAttribute(idUser,attribute,count){
   const res = await Player.findOne({
    where:{
        id:idUser
    }
   })
   
    res.set(attribute,res.get(attribute)-count)
    await res.save()
   
}
export async function boostAttribute(idUser,attribute,count){
    const res = await Player.findOne({
        where:{
            id:idUser
        }
    })    
    res.set(attribute,res.get(attribute)+count)
    
    await res.save()
}
//
export async function getAllWeapon(){
    const res = await Weapon.findAll()
    const returnAr = res.map((key,value)=>{

    })
}
//функция для теста, создания игрока
async function createPlayer(){
    const w = await Player.create({
        id:5,
        strength:4,
        endurance:3,
        charisma:5,
        intelligence:6,
        agility:10,
        luck:1,
        health:100,
        action_points:10,
        weight_things:250
    })
}
async function createWeapon(){
    const w = await Weapon.create({
        id:1,
        name:'10-мм пистолет',
        damage:18,
        price:50,
        weight:10,
        mustStrength:0,
        mustIntelligence:0,
        mustAgility:2,
        mustLevel:1,
        ammo:'10-mm'
    })
}


//reduceAttribute(5,"charisma",1)
//createPlayer()
//boostAttribute(5,"charisma",3)
//createWeapon()
console.log(await getAllWeapon())