import { json } from 'express'
import {Player,Weapon,Wear} from './model.js'

// убавить аттрибут
async function reduceAttribute(idUser,attribute,count){
   const res = await Player.findOne({
    where:{
        id:idUser
    }
   })
   
    res.set(attribute,res.get(attribute)-count)
    await res.save()
   
}
// увеличить аттрибут
async function boostAttribute(idUser,attribute,count){
    const res = await Player.findOne({
        where:{
            id:idUser
        }
    })    
    res.set(attribute,res.get(attribute)+count)
    
    await res.save()
}
//Добавить вещи игроку
async function addPlayerWeapon(idUser,idWeapon){
    const resWeap = await Weapon.findOne({
        where:{
            id:idWeapon
        }
    })
    const resPlayer = await Player.findOne({
        where:{
            id:idUser
        }
    })

    resPlayer.weapon = resWeap.dataValues
    resPlayer.save()
}
// Получения массивов dataValue из wear и weapon
async function getAllWeapon(){
    const res = await Weapon.findAll()
    return res
}
async function getAllWear(){
    const res = await Wear.findAll()
    return res
}
const worldWeaponArrayBuffer = await getAllWeapon()
const worldWearArrayBuffer = await getAllWear()
const worldWeaponArray = []
const worldWearArray = []
worldWeaponArrayBuffer.forEach(item=>{
    worldWeaponArray.push(item.dataValues)
})
worldWearArrayBuffer.forEach(item=>{
    worldWearArray.push(item.dataValues)
})

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
//console.log(await getAllWeapon())
export {reduceAttribute,boostAttribute,worldWeaponArray,worldWearArray}