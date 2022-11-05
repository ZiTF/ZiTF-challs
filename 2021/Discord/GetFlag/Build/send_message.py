#! /usr/bin/python3
import discord, json
from discord.ext import commands, tasks
from os import getenv

token = getenv('TOKEN')

prefixes = []

bot = commands.Bot(command_prefix=prefixes)

@bot.event
async def on_command_error(ctx, error):
    print(error)
    await ctx.send(error)
"""
@bot.event
async def on_error(event_method, *args, **kwargs):
    print(args)
    print("Error : bring some bananas\n")
"""
@bot.event
async def on_ready():
    print("Bot is now up !")
    channel = bot.get_channel(id=883454584100618260)
    with open("message.txt", "r") as f :
        await channel.send(f.read())
    await bot.logout()

bot.run(token)

