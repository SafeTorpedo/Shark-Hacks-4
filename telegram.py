import telebot
import time
import random
from appwrite.client import Client
from appwrite.services.databases import Databases

client = Client()

API_KEY = "API"


bot = telebot.TeleBot(API_KEY)
print("Bot is running!")
@bot.message_handler(commands=['start'])
def greet(message):
  bot.send_message(message.chat.id, "Hello, Welcome to the Shark Attacks. Please write /help to see the commands available.")

@bot.message_handler(commands=['help'])
def hello(message):
  bot.send_message(message.chat.id, """Available Commands :-
  /quiz - to play the shark quiz(you have to authenticated)
  /about - This bot is made by Stark Attacks team for SharkHacks 4
  /authenticate - To authenticate the user
  /facts - To get to know the facts about shark
	""")

@bot.message_handler(commands=['about'])
def greet(message):
  bot.send_message(message.chat.id, "This bot is made by Stark Attacks team for SharkHacks 4")

@bot.message_handler(commands=['facts'])
def facst(message):
    facts = app_get_fact()
    gg = random.randint(0,len(facts))
    bot.send_message(message.chat.id, f"Did you know: {facts[gg]}")


  
@bot.message_handler(commands=['authenticate'])
def authenticate(message):
	appwrite_authenticate(message.chat.username)
	bot.send_message(message.chat.id, "You are authenticated as `{message.chat.username}` using appwrite")

@bot.message_handler(commands=['quiz'])
def quiz(message):
    bot.send_message(message.chat.id, '''What unusual thing can a bull shark do?
    a.Survive in fresh water
    b.Survive out of water
    c.Eat seaweed
    d.Talk''')
    x = check()
    bot.send_message(message.chat.id, "Checking...\n {x}")  # a
    bot.send_message(message.chat.id, '''Which is the largest of all sharks?
    a.Great White shark
    b.Whale shark
    c.Bull shark
    d.Tiger shark''')
    x = check()
    bot.send_message(message.chat.id, "Checking...\n {x}")  # b
    bot.send_message(message.chat.id, '''What unusual thing can a bull shark do?
    a.Survive in fresh water
    b.Survive out of water
    c.Eat seaweed
    d.Talk''')
    x = check()
    bot.send_message(message.chat.id, "Checking...\n  {x}")  # b
    time.sleep(4)
    bot.send_message(message.chat.id, f"calculating your score")
    bot.send_message(message.chat.id, f"you scored {2} out of {3}")
    (client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_key('919c2d18fb5d4...a2ae413da83346ad2')) # Your secret API key)

    databases = Databases(client)

    result = databases.create_document('[DATABASE_ID]', '[COLLECTION_ID]', '[DOCUMENT_ID]', {})
    




bot.polling()