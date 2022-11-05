import discord, json
from discord.ext import commands, tasks
import random
from os import getenv



token = getenv('TOKEN')
channels_file = "channels.json"
blacklist = ["import", "os", "sys", "spawn", "subprocess", "Popen", "run", "dir", "Popen"]
prefixes = ['!m ', '!monkey ' ]
flag_d366d7d6eb08f181e8e3f6ed9d9876e6 = "ZiTF{6cad9cdb010bd1dbe6e480601313dc08}"
flag = "ZiTF{d366d7d6eb08f181e8e3f6ed9d9876e6}"
slack = "a"*2000 # to ensure that the output of globals() will be too long to be fully visible in a discord message 

bot = commands.Bot(command_prefix=prefixes)

status = ["Order you tasty bananas!",
          "Monkeys will overcome!",
          "🍌🍌🍌🍌🍌🍌",
          "🐒🐒🐒🐒🐒🐒"]

@bot.command()
async def hello(ctx):
    guild = ctx.message.guild
    guild_id = str(guild.id)
    channels = load_channels()
    name = f'order-{len(channels)}'
    author = ctx.message.author
    if not guild_id in channels.keys() or author.id not in [x['user'] for x in channels[guild_id]] :
        cat = discord.utils.get(ctx.guild.categories, id=883523270262009897)
        channel = await guild.create_text_channel(name,category=cat)
        await channel.set_permissions(bot.user, read_messages = True, send_messages= True)
        await channel.set_permissions(author, read_messages = True, send_messages= True)
        await channel.set_permissions(ctx.guild.default_role, read_messages=False, send_messages= False)
        try :
            channels[guild_id].append({'channel' : name, 'user' : author.id})
        except :
            channels[guild_id] = [{'channel' : name, 'user' : author.id}]
        with open(channels_file, 'w') as f:
            json.dump(channels,f)
        await channel.send(f'''Bonjour {ctx.message.author.mention}, please detail your order here.''')
    else :
        await ctx.send("you already have a dedicated channel to your order!")


@bot.command(aliases=['o'])
async def order(ctx,*args):
    args = ' '.join(args)
    if all([word not in args for word in blacklist]) :
        if ctx.channel.name.startswith('order-') :
            if args.startswith('await ') :
                #can execute most of the asynchronous functions of discord.py
                await ctx.send(f"You just ordered {await eval(args.replace('await',''))} bananas ! ")
            else :
                await ctx.send(f"Vous venez de commander {eval(args)} bananes! ")
        else :
            await ctx.send("Wrong channel! You have to create a private channel first with :```!monkey hello```")
    else :
        await ctx.send("Attack detected!!!")

@bot.command(aliases=['n'])
async def nuke(ctx,*args):
    channels = load_channels()
    guild_id = str(ctx.guild.id)
    if guild_id in channels.keys() and any([ctx.author.id == channel['user'] and ctx.channel.name == channel['channel'] for channel in channels[guild_id]]) :
        nuke_channel = discord.utils.get(ctx.guild.channels, id=ctx.channel.id)
        new_channel = await nuke_channel.clone(reason="Cleaning ...")
        await nuke_channel.delete()
        await new_channel.send("**Cleaning over  .**")
    else : 
        await ctx.send("You don't have the right to nuke this channel!")

@bot.event
async def on_command_error(ctx, error):
    print(error)
    await ctx.send(error)

@bot.event
async def on_error(event_method, *args, **kwargs):
    print("Error : bring some bananas\n")

@bot.event
async def on_ready():
    print("Bot is now up !")
    del globals()['token']
    print(load_channels())

def load_channels():
    try:
        with open(channels_file, 'r') as f:
            channels = json.load(f)
    except :
        channels = {}
    return channels

@tasks.loop(seconds = 5)
async def changeStatus():
	game = discord.Game(random.choice(status))
	await bot.change_presence(status = discord.Status.online, activity = game)

bot.run(token)
del token

