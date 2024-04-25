import {Telegraf} from "telegraf"
import express from "express"
import 'dotenv/config'


const app = express()
const bot = new Telegraf(process.env.TOKEN)

bot.start((ctx)=>{
    ctx.reply("У вас не распределены очки S.P.E.C.I.A.L!")
})
bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));