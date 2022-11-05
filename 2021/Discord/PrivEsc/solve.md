# Solve

By reading the discord documentation we can see that the Context object given as argument to each command execution can allow us to trace the author of the message triggering the command to give him a new role using the add_roles method which takes as an argument a Role object that can be obtained from the get function of discord.utils:

```!m o await ctx.message.author.add_roles(discord.utils.get(ctx.guild.roles, name='Administrateur'))```



